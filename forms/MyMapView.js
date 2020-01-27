import React from 'react';
import MapView, {Marker} from "react-native-maps";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import {Dimensions, View} from "react-native";

const API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImUzNDJhZTY3NmYwNTZkMWU0ZjdkNWF' +
    'mN2I4NTExNDdmYzVkM2VkNDlkMjQxOGNkOTkxOWZhNmJjM2VmN2NmNWM1YmMxNDA0NjFlOWYxNGIwIn0.e' +
    'yJhdWQiOiI3Mjg4IiwianRpIjoiZTM0MmFlNjc2ZjA1NmQxZTRmN2Q1YWY3Yjg1MTE0N2ZjNWQzZWQ0OWQyNDE4Y' +
    '2Q5OTE5ZmE2YmMzZWY3Y2Y1YzViYzE0MDQ2MWU5ZjE0YjAiLCJpYXQiOjE1Nzc2MDg2MDMsIm5iZiI6MTU3NzYwODYwMywiZ' +
    'XhwIjoxNTgwMTE0MjAzLCJzdWIiOiIiLCJzY29wZXMiOlsiYmFzaWMiXX0.lfi0xRKATVpeBMQNiy5Ld3IsWWbWtPLBaeDcK6rLix' +
    'Mh6UOTQOyu7JeLLqBvFGn0vFl7VKYXsYvRlLtpehXtRv_SumSh23XXAxJOWOS6kbWfwNJvmkNnPoI8DbS48SNLZr3vw3dn_TR0l7uWFnhy' +
    'KZE3fZsEbqDqN2vq1-CN3Hz0IzMQf8qRxuB9qK7hGrQ9JOF-Oy4SzuFVN4KO_w9a8tJ00L3E1pgr6-b901WQUNLWyq2FC0RxXUzSMBZw96N0jzG' +
    '1_xA2DnuWcn07y016jQbo1vpgZdC-Dbo2VjtmpCJu28J0742rPdXZMwoJQSGBvkVTcrKXWWZAyMSKWY5KsQ';


export default class MyMapView extends React.Component {

    constructor() {
        super();
        this.state = {
            location: '',
            markers: [],
            region: {},
            coords: [{
                latitude: 35.726981,
                longitude: 51.424158
            }]
        }
    }


    onRegionChange(region) {
        // this.setState({region});
    }

    componentDidMount() {
        this._getLocationAsync()
    }

    _getLocationAsync = async () => {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({
            location: location,
            camera:{
                center:{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                },
                zoom:1
            },
            markers: [{
                coordinate: location.coords,
                color: 'red'
            }],
            region: {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        });
    };

    render() {
        let text = 'Waiting..';
        let location;
        let locationIsLoad = false;
        let id = 0;
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
            locationIsLoad = false
        } else if (this.state.location) {
            text = JSON.stringify(this.state.location);
            location = JSON.parse(text);
            console.log(location.coords.latitude);
            console.log(location.coords.longitude);
            locationIsLoad = true;
        }

        if (locationIsLoad) {
            return (
                <View style={{width: width, height: height / 4}}>
                    <MapView style={{width: width, height: height / 4}}
                             region={this.state.region}
                             onRegionChange={(region) => this.onRegionChange(region)}
                             showsMyLocationButton={true}
                             followsUserLocation={true}
                             showsCompass={true}
                             showsIndoors={true}
                    >
                        {this.state.markers.map(marker => (
                            <Marker
                                coordinate={marker.coordinate}
                                pinColor={marker.color}
                                key={id++}
                            />
                        ))}

                        <MapView.Polyline
                            coordinates={this.state.coords}
                            strokeWidth={2}
                            strokeColor="red"/>
                    </MapView>
                </View>
            )
        } else {
            console.log("location not loaded yet...")
            return null;
        }
    }
}

const {width, height} = Dimensions.get("window");


