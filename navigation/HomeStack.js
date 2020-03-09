import {createStackNavigator} from "react-navigation-stack";
import React from "react";
import Home from "../forms/home/HomePage";
import Salon from "../forms/salon/Salon";
import SalonInfo from "../forms/salon/SalonInfo";
import FinalizeReserve from "../forms/salon/FinalizeReserve";
import ReserveNew from "../forms/salon/ReserveNew";
import ReservedSalons from "../forms/profile/ReservedSalons";
import {ReserveDetailsPage, SurveyPage} from "./ProfileStack";

const HomeStack = createStackNavigator({
    Home: Home,
    Salon: Salon,
    SalonInfo: SalonInfo,
    FinalizeReserve: FinalizeReserve,
    ReserveNew: ReserveNew,
    ReservedSalons: ReservedSalons,
    ReserveDetails: ReserveDetailsPage,
    Survey: SurveyPage,
}, {
    initialRouteName: 'Home'
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

export default HomeStack
