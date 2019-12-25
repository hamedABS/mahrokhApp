import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {StyleSheet, Text, View, Image, Dimensions, TouchableHighlight} from 'react-native';

export default class Home extends React.Component {
    static navigationOptions = {
        headerTitle: ()=> <LogoTitle/>
    };

    render() {
        return (
            <View>
            </View>
        )
    }
}


class LogoTitle extends React.Component{
    render() {
        return (
            <View style={styles.headerLogo}>
                <View></View>
                <Image
                    source={require('./assets/png/Group-2102.png')}
                    style={{width: 60, height: 60}}
                />
                <TouchableHighlight style={{paddingRight: 10}}>
                    <View>
                        <Image
                            source={require('./assets/png/calendar.png')}
                            style={{width: 30, height: 35}}
                        />
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
    headerLogo: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});