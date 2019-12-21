import React from 'react';

import WelcomePage from './WelcomePage.js';
import RegisterClass from './RegisterPage.js';
import RegisterClass2 from './RegisterPage2.js';
import * as Font from 'expo-font';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AppIntro from './AppIntro';
import Home from './MainPage';


const AppStack = createStackNavigator({
  Home: Home
})
const AuthStack = createStackNavigator({
  Welcome: WelcomePage,
  RegisterPage: RegisterClass,
  LoginPage: RegisterClass2
})

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    AppIntro: AppIntro,
    App:AppStack,
    Auth:AuthStack
  },
  {
    initialRouteName: 'AppIntro',
  }
));
export default AppContainer;

// import React from 'react';
// import Temp from './Temp';

// const App = ()=>{
//   return <Temp/>
// }

// export default App