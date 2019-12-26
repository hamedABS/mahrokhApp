import React from 'react';

import WelcomePage from './forms/auth/WelcomePage.js';
import RegisterClass from './forms/auth/RegisterPage.js';
import RegisterClass2 from './forms/auth/RegisterPage2.js';
import * as Font from 'expo-font';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import AppIntro from './AppIntro';
import Home from './forms/home/HomePage';
import BlogPage from './BlogPage';
import ReservationPage from './ReservationPage';
import ProfilePage from './ProfilePage';
import SupportPage from './SupportPage';
import Login from './forms/auth/LoginPage'
import Salon from './forms/Salon.js'
import {Image} from "react-native";
import {exp} from "react-native-reanimated";

const HomeStack = createStackNavigator({
    Home: Home,
    Salon:Salon
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

export default class App extends React.Component{
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
    }
  }

  async componentDidMount() {
    try {
      console.log("int component did mount")
      await Font.loadAsync({
        'IranSans': require('./assets/fonts/IranianSans_0.ttf'),
        'IRANSansFaNum': require('./assets/fonts/IRANSansFaNum_Light.ttf'),
        'IRANSansWeb': require('./assets/fonts/IRANSansWeb.ttf'),
        'IRANSansWebLight': require('./assets/fonts/IRANSansWeb_Light.ttf'),
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
    if (this.state.fontLoaded){
      return <AppContainer/>
    } else return null;
  }
}

/*import React from 'react';
import Temp from './Temp2';

const App = ()=>{
  return <Temp/>
}
export default App*/
