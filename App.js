import React from 'react';

import WelcomePage from './auth/WelcomePage.js';
import RegisterClass from './auth/RegisterPage.js';
import RegisterClass2 from './auth/RegisterPage2.js';
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
import Login from './auth/LoginPage'
import {Image} from "react-native";


/*const AppStack = createStackNavigator({
    AppIntro: AppIntro
})*/

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
    RegisterPage2: RegisterClass2,
    Login:Login
})

const TabNavigator =  createBottomTabNavigator(
    {
        Profile: ProfileStack,
        Support: SupportStack,
        Reservation: ReservationStack,
        Blog: BlogStack,
        Home: {
            screen: HomeStack,
            initialRouteName: 'ماهرخ',
            title:'ماهرخ',
            navigationOption:({navigation}) =>({
               title: 'ماهرخ',
                tabBarLabel:'ماهرخ'
            }),
        },
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon:({focused, horizontal, tintColor}) =>{
                const {routeName} = navigation.state;
                console.log('routeName: ' + routeName)
                let icon;
                if (routeName == 'Home'){
                    icon = require('./assets/png/home.png');
                } else if (routeName == 'Blog'){
                    icon= require('./assets/png/copy.png')
                }else if (routeName == 'Reservation'){
                    icon= require('./assets/png/calendar.png')
                }else if (routeName == 'Support'){
                    icon= require('./assets/png/telemarketer.png')
                }else if (routeName == 'Profile'){
                    icon= require('./assets/png/woman.png')
                }
                return <Image style={{width:20, height:20, tintColor:tintColor}}
                              source={icon}/>
            }
        }),tabBarOptions: {
            activeTintColor: '#B08C3E',
            inactiveTintColor: 'gray',
        },
    });

const AppContainer = createAppContainer(createSwitchNavigator(
    {
        AppIntro: AppIntro,
        //App: AppStack,
        Auth: AuthStack,
        Tab: TabNavigator
    },
    {
        initialRouteName: 'Tab',
    }
));
export default AppContainer;






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