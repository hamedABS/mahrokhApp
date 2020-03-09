import React from 'react';

import * as Font from 'expo-font';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AppIntro from './AppIntro';
import {TabNavigator} from "./navigation/Navigations";
import AuthStack from './navigation/AuthStack'

import {I18nManager} from 'react-native';

I18nManager.allowRTL(false);
I18nManager.forceRTL(false);


const AppContainer = createAppContainer(createSwitchNavigator(
    {
        AppIntro: AppIntro,
        Auth: AuthStack,
        Tab: TabNavigator
    },
    {
        initialRouteName: 'AppIntro',
    }
));

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            fontLoaded: false,
        }
    }

    async componentDidMount() {
        try {
            await Font.loadAsync({
                'IranSans': require('./assets/fonts/IranianSans_0.ttf'),
                'IRANSansFaNum': require('./assets/fonts/IRANSansFaNum_Light.ttf'),
                'IRANSansWeb': require('./assets/fonts/IRANSansWeb.ttf'),
                'IRANSansWebLight': require('./assets/fonts/IRANSansWeb_Light.ttf'),
                'IRANSansWebMedium': require('./assets/fonts/IRANSansWeb_Medium.ttf'),
                'IRANSansWebBold': require('./assets/fonts/IRANSansWeb_Bold.ttf'),
                'IRANSansWebUltraLight': require('./assets/fonts/IRANSansWeb_UltraLight.ttf'),
                'Ionicons': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf')
            });
            this.setState({fontLoaded: true});

            console.log(this.state.fontLoaded)
        } catch (e) {
            console.warn(e)
        }
    }

    render() {
        if (this.state.fontLoaded) {
            return <AppContainer/>
        } else return null;
    }
}
