import React from 'react';

import WelcomePage from './WelcomePage.js';
import RegisterClass from './RegisterPage.js';
import RegisterClass2 from './RegisterPage2.js';
import * as Font from 'expo-font';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import AppIntro from './AppIntro';
import Home from './MainPage';
import BlogPage from './BlogPage';
import ReservationPage from './ReservationPage';
import ProfilePage from './ProfilePage';
import SupportPage from './SupportPage';
import {Image} from "react-native";


const AppStack = createStackNavigator({
    Home: Home
})

const HomeStack = createStackNavigator({
    Home: Home
})
const BlogStack = createStackNavigator({
    Blog: BlogPage,

})
const ReservationStack = createStackNavigator({
    Reservation: ReservationPage,

})
const SupportStack = createStackNavigator({
    Support: SupportPage,

})
const ProfileStack = createStackNavigator({
    Profile: ProfilePage,
})
const AuthStack = createStackNavigator({
    Welcome: WelcomePage,
    RegisterPage: RegisterClass,
    LoginPage: RegisterClass2
})
const TabNavigator = createBottomTabNavigator({
    Home: HomeStack,
    Blog: BlogStack,
    Reservation: ReservationStack,
    Support: SupportStack,
    Profile: ProfileStack
})

/*const AppContainer = createAppContainer(createSwitchNavigator(
    {
        AppIntro: AppIntro,
        App: AppStack,
        Auth: AuthStack,
        Tab: TabNavigator
    },
    {
        initialRouteName: 'AppIntro',
    }
));*/

export default createAppContainer(createBottomTabNavigator(
    {
        //AppIntro: AppIntro,
        Profile: ProfileStack,
        Support: SupportStack,
        Reservation: ReservationStack,
        Blog: BlogStack,
        Home: HomeStack
    },
    {
        initialRouteName: 'Home',
    }));
//export default AppContainer;

// import React from 'react';
// import Temp from './Temp';
//
// const App = ()=>{
//   return <Temp/>
// }
//
// export default App

// import React from 'react';
// import {View, Image, StyleSheet, Dimensions, TouchableHighlight} from "react-native";
//
//
// export default class LogoTitle extends React.Component {
//     render() {
//         return (
//             <View style={styles.headerLogo}>
//                 <View></View>
//                 <Image
//                     source={require('./assets/png/Group-2102.png')}
//                     style={{width: 50, height: 50}}
//                 />
//                 <TouchableHighlight style={{padding: 10}}>
//                     <View>
//                         <Image
//                             source={require('./assets/png/calendar.png')}
//                             style={{width: 30, height: 30}}
//                         />
//                     </View>
//                 </TouchableHighlight>
//             </View>
//         )
//     }
// }
// const {width, height} = Dimensions.get("window");
// const styles = StyleSheet.create({
//     headerLogo: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between'
//     }
// });