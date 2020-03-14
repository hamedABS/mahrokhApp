import {createBottomTabNavigator} from "react-navigation-tabs";
import {Dimensions, Image, StyleSheet, Text} from "react-native";
import React from "react";
import ProfileStack from "./ProfileStack";
import {SupportStack} from "./SupportStack";
import ReservesStack from "./ReserveStack";
import BlogStack from "./BlogStack";
import HomeStack from "./HomeStack";


export const TabNavigator = createBottomTabNavigator(
    {
        Profile: ProfileStack,
        Support: SupportStack,
        Reservation: ReservesStack,
        Blog: BlogStack,
        Home: HomeStack
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let icon;
                if (routeName == 'Home') {
                    icon = require('../assets/png/home.png');
                } else if (routeName == 'Blog') {
                    icon = require('../assets/png/copy.png')
                } else if (routeName == 'Reservation') {
                    icon = require('../assets/png/list.png')
                } else if (routeName == 'Support') {
                    icon = require('../assets/png/telemarketer.png')
                } else if (routeName == 'Profile') {
                    icon = require('../assets/png/woman.png')
                }
                return <Image style={{width: 24, height: 24, tintColor: tintColor}}
                              source={icon}/>
            },
            tabBarLabel: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                if (routeName == 'Home') {
                    return <Text style={[styles.label, {color: tintColor}]}>ماهرخ</Text>
                } else if (routeName == 'Blog') {
                    return <Text style={[styles.label, {color: tintColor}]}>بلاگ</Text>
                } else if (routeName == 'Reservation') {
                    return <Text style={[styles.label, {color: tintColor}]}>رزرو سالن</Text>
                } else if (routeName == 'Support') {
                    return <Text style={[styles.label, {color: tintColor}]}> پشتیبانی</Text>
                } else if (routeName == 'Profile') {
                    return <Text style={[styles.label, {color: tintColor}]}>پروفایل من</Text>
                }
            }
        }), tabBarOptions: {
            activeTintColor: '#B08C3E',
            inactiveTintColor: 'rgb(0,0,0)',
        },
    });
export const {width, height} = Dimensions.get("window");


const styles = StyleSheet.create({
    label: {
        textAlign: 'center',
        fontFamily: 'IRANSansWeb',
        fontSize: 11,
    }
})
