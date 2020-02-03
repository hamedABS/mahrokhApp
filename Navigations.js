import {createStackNavigator} from "react-navigation-stack";
import Home from "./forms/home/HomePage";
import Salon from "./forms/salon/Salon";
import SalonInfo from "./forms/salon/SalonInfo";
import Blog from "./forms/blog/Blog";
import BlogArticle from "./forms/blog/BlogArticle";
import SalonsList from "./forms/salon/SalonsList";
import Support from "./forms/support/Support";
import Profile from "./forms/profile/Profile";
import Setting from "./forms/profile/Setting";
import WelcomePage from "./forms/auth/WelcomePage";
import RegisterClass from "./forms/auth/RegisterPage";
import RegisterClass2 from "./forms/auth/RegisterPage2";
import ReservedSalons from "./forms/profile/ReservedSalons";
import ReserveDetails from "./forms/profile/ReserveDetails";
import Filter from "./forms/salon/Filter";
import ProfileSetting from "./forms/profile/ProfileSetting";
import FinalizeReserve from "./forms/salon/FinalizeReserve";
import SalonIntro from "./forms/blog/SalonIntro";
import AboutApp from "./forms/support/AboutApp";
import ReserveNew from "./forms/salon/ReserveNew";
import Survey from "./forms/profile/Survey";
import ChangePasswordPage from "./forms/profile/ChangePasswordPage"
import FAQ from "./forms/support/FAQ";
import Login from "./forms/auth/LoginPage";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {Image, Text, StyleSheet} from "react-native";
import React from "react";

export const HomeStack = createStackNavigator({
    Home: Home,
    Salon: Salon,
    SalonInfo: SalonInfo,
    FinalizeReserve: FinalizeReserve,
    ReserveNew: ReserveNew,
    ReservedSalons: ReservedSalons,
    ReserveDetails: ReserveDetails,
    Survey:Survey,
}, {
    initialRouteName: 'Salon'
})
HomeStack.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    let routeName = navigation.state.routes[navigation.state.index].routeName
    if (routeName != 'Home') {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
}

export const BlogStack = createStackNavigator({
    Blog: Blog,
    BlogArticle: BlogArticle,
    SalonIntro: SalonIntro
}, {
    initialRouteName: 'Blog'
})

BlogStack.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    let routeName = navigation.state.routes[navigation.state.index].routeName
    if (routeName == 'BlogArticle' || routeName == 'SalonIntro') {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
}

export const ReservationStack = createStackNavigator({
    Reservation: SalonsList,
    Salon: Salon,
    Filter: Filter,
    SalonInfo: SalonInfo
})

ReservationStack.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    let routeName = navigation.state.routes[navigation.state.index].routeName
    if (routeName != 'Reservation') {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
}

export const SupportStack = createStackNavigator({
    Support: Support,
    AboutApp: AboutApp,
    FAQ: FAQ
})
export const ProfileStack = createStackNavigator({
    Profile: Profile,
    Setting: Setting,
    ReservedSalons: ReservedSalons,
    ReserveDetails: ReserveDetails,
    AboutApp: AboutApp,
    Salon: Salon,
    ChangePasswordPage: ChangePasswordPage,
    ProfileSetting: ProfileSetting,
    FAQ: FAQ,
    Survey: Survey
}, {
    initialRouteName: 'Profile'
})

ProfileStack.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    let routeName = navigation.state.routes[navigation.state.index].routeName
    if (routeName != 'Profile') {
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
        Profile: ProfileStack,
        Support: SupportStack,
        Reservation: ReservationStack,
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
                return <Image style={{width: 21, height: 23, tintColor: tintColor}}
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
            activeTintColor: '#FAC918',
            inactiveTintColor: 'rgb(0,0,0)',
        },
    });

const styles = StyleSheet.create({
    label: {
        textAlign: 'center',
        fontFamily: 'IRANSansWeb',
        fontSize: 11,
    }
})
