import React from 'react';
import MapView, {Marker} from "react-native-maps";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import {View} from "react-native";

export default class MapView extends React.Component {

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
        console.log(location)
        this.setState({
            location: location,
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
                <View>
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
        } else return null;
    }
}
