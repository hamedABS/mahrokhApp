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


export const ReserveDetailsPage = {
    screen: ReserveDetails,
    navigationOptions: {
        headerTitle: () => HeaderTitle(`جزییات رزرو`),
        headerBackImage: () => headerBackImag,
    }
}
export const SurveyPage ={
    screen:Survey,
    navigationOptions:{
        headerTitle: () => HeaderTitle(`نظر سنجی`),
        headerBackImage: () => headerBackImag,
    },
}

const ProfileStack = createStackNavigator({
    Profile: Profile,
    Setting: Setting,
    ReservedSalons: ReservedSalons,
    ReserveDetails: ReserveDetailsPage,
    AboutApp: AboutApp,
    Salon: Salon,
    ChangePasswordPage: ChangePasswordPage,
    ProfileSetting: ProfileSetting,
    FAQ: FAQ,
    Survey: SurveyPage,
    SalonList: SalonsList,
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
