import {createStackNavigator} from "react-navigation-stack";
import Home from "./forms/home/HomePage";
import Salon from "./forms/salon/Salon";
import SalonInfo from "./forms/salon/SalonInfo";
import Blog from "./forms/blog/Blog";
import BlogArticle from "./forms/blog/BlogArticle";
import SalonReserve from "./forms/salon/SalonReserve";
import Support from "./forms/support/Support";
import Profile from "./forms/profile/Profile";
import Setting from "./forms/profile/Setting";
import WelcomePage from "./forms/auth/WelcomePage";
import RegisterClass from "./forms/auth/RegisterPage";
import RegisterClass2 from "./forms/auth/RegisterPage2";
import ReservedSalons from "./forms/profile/ReservedSalons";
import ReserveDetails from "./forms/profile/ReserveDetails";
import ProfileSetting from "./forms/profile/ProfileSetting";
import Login from "./forms/auth/LoginPage";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {Image} from "react-native";
import React from "react";

export const HomeStack = createStackNavigator({
    Home: Home,
    Salon: Salon,
    SalonInfo: SalonInfo
}, {
    initialRouteName: 'Home'
})
HomeStack.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    let routeName = navigation.state.routes[navigation.state.index].routeName
    if (routeName == 'Salon' || routeName == 'SalonInfo') {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
}

export const BlogStack = createStackNavigator({
    Blog: Blog,
    BlogArticle: BlogArticle
}, {
    initialRouteName: 'Blog'
})

BlogStack.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    let routeName = navigation.state.routes[navigation.state.index].routeName
    if (routeName == 'BlogArticle') {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
}

export const ReservationStack = createStackNavigator({
   Reservation: SalonReserve,
    Salon: Salon,
    SalonInfo: SalonInfo
})
export const SupportStack = createStackNavigator({
    Support: Support,

})
export const ProfileStack = createStackNavigator({
    Profile: Profile,
    Setting: Setting,
    ReservedSalons: ReservedSalons,
    ReserveDetails: ReserveDetails,
    Salon: Salon,
    ProfileSetting:ProfileSetting
}, {
    initialRouteName: 'Profile'
})

ProfileStack.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    let routeName = navigation.state.routes[navigation.state.index].routeName
    if (routeName == 'ReserveDetails' || routeName == 'Salon') {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
}

export const AuthStack = createStackNavigator({
    Welcome: WelcomePage,
    RegisterPage: RegisterClass,
    RegisterPage2: RegisterClass2,
    Login: Login
})

export const TabNavigator = createBottomTabNavigator(
    {
        Profile: {screen: ProfileStack, title: 'خانه'},
        Support: SupportStack,
        Reservation: ReservationStack,
        Blog: BlogStack,
        Home: {
            screen: HomeStack,
            initialRouteName: 'ماهرخ',
            title: 'ماهرخ',
            navigationOption: ({navigation}) => ({
                title: 'ماهرخ',
                tabBarLabel: 'ماهرخ'
            }),
        },
    },
    {
        initialRouteName: 'Profile',
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                // console.log('routeName: ' + routeName)
                let icon;
                if (routeName == 'Home') {
                    icon = require('./assets/png/home.png');
                } else if (routeName == 'Blog') {
                    icon = require('./assets/png/copy.png')
                } else if (routeName == 'Reservation') {
                    icon = require('./assets/png/calendar.png')
                } else if (routeName == 'Support') {
                    icon = require('./assets/png/telemarketer.png')
                } else if (routeName == 'Profile') {
                    icon = require('./assets/png/woman.png')
                }
                return <Image style={{width: 20, height: 20, tintColor: tintColor}}
                              source={icon}/>
            }
        }), tabBarOptions: {
            activeTintColor: '#B08C3E',
            inactiveTintColor: 'gray',
        },
    });
