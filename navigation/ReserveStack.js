import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import SalonsList from "../forms/salon/SalonsList";
import Salon from "../forms/salon/Salon";
import Filter from "../forms/salon/Filter";
import SalonInfo from "../forms/salon/SalonInfo";
import ReserveNew from "../forms/salon/ReserveNew";
import FinalizeReserve from "../forms/salon/FinalizeReserve";
import {headerBackImag, HeaderTitle} from "./navigationConstants";


const ReservesStack = createStackNavigator({
    Reservation: SalonsList,
    Salon: Salon,
    Filter: {
        screen: Filter,
        navigationOptions: {
            headerTitle: () => HeaderTitle(`فیلترها`),
            headerBackImage: () => headerBackImag,
        },
    },
    SalonInfo: {
        screen: SalonInfo,
        navigationOptions: {
            headerTitle: () => HeaderTitle(`کایزن`),
            headerBackImage: () => headerBackImag,
        },
    },
    ReserveNew: {
        screen: ReserveNew,
        navigationOptions: {
            headerTitle: () => HeaderTitle(`رزرو جدید`),
            headerBackImage: () => headerBackImag,
        },
    },
    FinalizeReserve: {
        screen: FinalizeReserve,
        navigationOptions: {
            headerTitle: () => HeaderTitle(`ثبت رزرو`),
            headerBackImage: () => headerBackImag,
        },
    },

})

ReservesStack.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    let routeName = navigation.state.routes[navigation.state.index].routeName
    if (routeName != 'Reservation') {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
}


export default ReservesStack;
