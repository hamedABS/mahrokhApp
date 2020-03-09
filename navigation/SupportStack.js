import React from 'react'
import {createStackNavigator} from "react-navigation-stack";
import Support from "../forms/support/Support";
import AboutApp from "../forms/support/AboutApp";
import FAQ from "../forms/support/FAQ";
import {headerBackImag, HeaderTitle} from "./navigationConstants";

export const SupportStack = createStackNavigator({
    Support: {
        screen: Support,
        navigationOptions: {
            headerTitle: () => HeaderTitle(`پشتیبانی                      `),
        },
    },
    AboutApp: {
        screen: AboutApp,
        navigationOptions: {
            headerTitle: () => HeaderTitle(`درباره ماهرخ`),
            headerBackImage: () => headerBackImag,
        },
    },
    FAQ: {
        screen: FAQ,
        navigationOptions: {
            headerTitle: () => HeaderTitle(`سوالات متداول`),
            headerBackImage: () => headerBackImag,
        },
    }
})


export default SupportStack;
