import React, {Component} from "react";
import Constants from 'expo-constants';
import MapView from "react-native-maps";
import {Dimensions} from "react-native";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';


export default class Temp extends Component {
    state = {
        location: '',
        isModalVisible: false
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
        this.setState({location: location});
    };

    render() {
        let text = 'Waiting..';
        let location;
        let flag = false;
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.location) {
            text = JSON.stringify(this.state.location);
            location = JSON.parse(text);
            console.log(location.coords.latitude);
            console.log(location.coords.longitude);
            flag = true;
            console.log(location)
        }
        console.log(text)
        if (flag)
            return (
                <MapView style={{width: width, height: height / 4}}
                         initialRegion={{
                             latitude: location.coords.latitude,
                             longitude: location.coords.longitude,
                             latitudeDelta: 0.0922,
                             longitudeDelta: 0.0421,
                         }}
                         showsMyLocationButton={true}
                         followsUserLocation={true}
                         showsCompass={true}
                         showsIndoors={true}
                />
            );
        else return null
    }
}
const {width, height} = Dimensions.get("window");
