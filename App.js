import React from 'react';

import * as Font from 'expo-font';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AppIntro from './AppIntro';
import {TabNavigator} from "./navigation/Navigations";
import AuthStack from './navigation/AuthStack'
import {I18nManager} from 'react-native';

I18nManager.allowRTL(false);
I18nManager.forceRTL(false);


const API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImUzNDJhZTY3NmYwNTZkMWU0ZjdkNWFmN2I4NTExNDdmYzVkM2VkNDlkM" +
    "jQxOGNkOTkxOWZhNmJjM2VmN2NmNWM1YmMxNDA0NjFlOWYxNGIwIn0.eyJhdWQiOiI3Mjg4IiwianRpIjoiZTM0MmFlNjc2ZjA1NmQxZTRmN2Q1YWY3Y" +
    "jg1MTE0N2ZjNWQzZWQ0OWQyNDE4Y2Q5OTE5ZmE2YmMzZWY3Y2Y1YzViYzE0MDQ2MWU5ZjE0YjAiLCJpYXQiOjE1Nzc2MDg2MDMsIm5iZiI6MTU3NzYwOD" +
    "YwMywiZXhwIjoxNTgwMTE0MjAzLCJzdWIiOiIiLCJzY29wZXMiOlsiYmFzaWMiXX0.lfi0xRKATVpeBMQNiy5Ld3IsWWbWtPLBaeDcK6rLixMh6UOTQOyu7JeL" +
    "LqBvFGn0vFl7VKYXsYvRlLtpehXtRv_SumSh23XXAxJOWOS6kbWfwNJvmkNnPoI8DbS48SNLZr3vw3dn_TR0l7uWFnhyKZE3fZsEbqDqN2vq1-CN3Hz0IzMQf8qRx" +
    "uB9qK7hGrQ9JOF-Oy4SzuFVN4KO_w9a8tJ00L3E1pgr6-b901WQUNLWyq2FC0RxXUzSMBZw96N0jzG1_xA2DnuWcn07y016jQbo1vpgZdC-Dbo2VjtmpCJ" +
    "u28J0742rPdXZMwoJQSGBvkVTcrKXWWZAyMSKWY5KsQ"

const AppContainer = createAppContainer(createSwitchNavigator(
    {
        AppIntro: AppIntro,
        Auth: AuthStack,
        Tab: TabNavigator
    },
    {
        initialRouteName: 'Auth',
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
                'IRANSansFaNum': require('./assets/fonts/IRANSansFaNum_Light.ttf'),
                'IRANSansWeb': require('./assets/fonts/IRANSansWeb.ttf'),
                'IRANSansWebLight': require('./assets/fonts/IRANSansWeb_Light.ttf'),
                'IRANSansWebMedium': require('./assets/fonts/IRANSansWeb_Medium.ttf'),
                'IRANSansWebBold': require('./assets/fonts/IRANSansWeb_Bold.ttf'),
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
