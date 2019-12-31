import React, {Component} from 'react';
import {View, Dimensions, StyleSheet, ScrollView, Image, Text} from 'react-native';
import MapView from "react-native-maps";


export default class Temp extends Component {

    _onPressMethod = ()=>{
        let list = []
        for (let i = 0; i < 5; i++) {
            list.push(<Text>i = {i}</Text>)
        }
        return
    }

    render() {
        console.log("app rendering ...")
        return (
            <MapView style={{width: width, height: height}}
                  /*   initialRegion={{
                         latitude: 37.78825,
                         longitude: -122.4324,
                         latitudeDelta: 0.0922,
                         longitudeDelta: 0.0421,
                     }}*/
                     showsMyLocationButton={true}
                     followsUserLocation={true}
                     showsCompass={true}
                     showsIndoors={true}
            />
        )
    }
}

const {width, height} = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
