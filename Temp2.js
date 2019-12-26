import React, {Component} from 'react';
import {ScrollView, Image, Text} from 'react-native';
import * as Font from 'expo-font';

export default class Temp extends Component {

    constructor() {
        super();
        this.state = {
            showRealApp: false,
            fontLoaded: false,
        }
    }

   async componentDidMount() {
        console.log("int component did mount")
       await Font.loadAsync({
            MyAwesomeFont: require("./assets/fonts/IRANSansWeb.ttf"),
            ionicons: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf')
        });
        this.setState({fontLoaded: true});

        console.log(this.state.fontLoaded)
    }

    render() {
        if (this.state.fontLoaded) {
            return (
                <ScrollView horizontal>
                    <Text style={{fontSize: 50, fontFamily: "MyAwesomeFont"}}> سلام ملت ما </Text>
                </ScrollView>
            )
        }
        else
            {
                return null
            }

    }
}
