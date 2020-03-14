import React from 'react'
import {createStackNavigator} from "react-navigation-stack";
import Profile from "../forms/profile/Profile";
import Setting from "../forms/profile/Setting";
import ReservedSalons from "../forms/profile/ReservedSalons";
import ReserveDetails from "../forms/profile/ReserveDetails";
import AboutApp from "../forms/support/AboutApp";
import Salon from "../forms/salon/Salon";
import ChangePasswordPage from "../forms/profile/ChangePasswordPage";
import ProfileSetting from "../forms/profile/ProfileSetting";
import FAQ from "../forms/support/FAQ";
import Survey from "../forms/profile/Survey";
import SalonsList from "../forms/salon/SalonsList";
import {headerBackImag, HeaderTitle} from "./navigationConstants";
import {Image, TouchableOpacity} from "react-native";


export const ReserveDetailsPage = {
    screen: ReserveDetails,
    navigationOptions: {
        headerTitle: () => HeaderTitle(`جزییات رزرو`),
        headerBackImage: () => headerBackImag,
    }
}
export const SurveyPage = {
    screen: Survey,
    navigationOptions: {
        headerTitle: () => HeaderTitle(`نظر سنجی`),
        headerBackImage: () => headerBackImag,
    },
}

const ProfileStack = createStackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: ({navigation}) => ({
            headerTitle: () => HeaderTitle(`پروفایل`),
            headerRight: () =>
                <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                    <Image
                        source={require('./../assets/png/settings3x.png')}
                        style={{width: 23, height: 23, marginRight: 15, tintColor: '#C8992E'}}/>
                </TouchableOpacity>,
            headerLeft: () =>
                <TouchableOpacity onPress={() => navigation.navigate('ReservedSalons')}>
                    <Image source={require('./../assets/png/list.png')}
                           style={{width: 23, height: 24, marginLeft: 15, tintColor: '#B08C3E'}}/>
                </TouchableOpacity>
        })
    },
    Setting: {
        screen: Setting,
        navigationOptions: {
            headerTitle: () => HeaderTitle(`تنظیمات`),
            headerBackImage: () => headerBackImag,
        },
    },
    ReservedSalons: {
        screen: ReservedSalons,
        navigationOptions: {
            headerTitle: () => HeaderTitle(`رزروهای من`),
            headerBackImage: () => headerBackImag,
        },
    },
    ReserveDetails: ReserveDetailsPage,
    AboutApp: {
        screen: AboutApp,
        navigationOptions: {
            headerTitle: () => HeaderTitle(`درباره ماهرخ`),
            headerBackImage: () => headerBackImag,
        },
    },
    Salon: Salon,
    ChangePasswordPage: {
        screen: ChangePasswordPage,
        navigationOptions: {
            headerTitle: () => HeaderTitle(`تغییر گذر واژه`),
            headerBackImage: () => headerBackImag,
        },
    },
    ProfileSetting: {
        screen: ProfileSetting,
        navigationOptions: {
            headerTitle: () => HeaderTitle(`پروفایل شخصی`),
            headerBackImage: () => headerBackImag,
        },
    },
    FAQ: {
        screen: FAQ,
        navigationOptions: {
            headerTitle: () => HeaderTitle(`سوالات متداول`),
            headerBackImage: () => headerBackImag,
        },
    },
    Survey: SurveyPage,
    SalonList: {
        screen: SalonsList,
        navigationOptions: {
            headerBackImage: () => headerBackImag,
        },
    },
});

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

export default ProfileStack;
