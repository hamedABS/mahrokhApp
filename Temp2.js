import React, {Component} from 'react';
import {View, Dimensions, StyleSheet, ScrollView, Image, Text} from 'react-native';
import {Video} from 'expo-av';


export default class Temp extends Component {
    constructor() {
        super();
        this.state = {
            location: null,
            errorMessage: null,
        };
    }

    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });
    };


    _onPressMethod = () => {
        let list = []
        for (let i = 0; i < 5; i++) {
            list.push(<Text>i = {i}</Text>)
        }
        return
    }

  /*  render() {
        return (
            <View style={{width: width, height: height}}>
                {/!*            <Video
                    source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay
                    isLooping
                    style={{ width: 300, height: 300 }}
                />
*!/}
                <View style={{height: 50, width: 100}}></View>
                {/!*   <PersianCalendarPicker
                    onDateChange={this.onDateChange}
                    width={200}
                    hieght={300}
                />*!/}
            </View>
        )
    }*/

    render() {
        let text = 'Waiting..';
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.location) {
            text = JSON.stringify(this.state.location);
        }

        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>{text}</Text>
            </View>
        );
    }
}

const {width, height} = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        textAlign: 'center',
    },
});
