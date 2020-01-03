import React, {Component} from 'react';
import {View, Dimensions, StyleSheet, ScrollView, Image, Text} from 'react-native';
import { Video } from 'expo-av';

export default class Temp extends Component {

    _onPressMethod = () => {
        let list = []
        for (let i = 0; i < 5; i++) {
            list.push(<Text>i = {i}</Text>)
        }
        return
    }

    render() {
        console.log("app rendering ...")
        return (
            <View style={{width:width, height:height}}>
                <Video
                    source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay
                    isLooping
                    style={{ width: 300, height: 300 }}
                />
            </View>

        )
    }
}

const {width, height} = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
