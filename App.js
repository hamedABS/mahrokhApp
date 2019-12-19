// import React, { Component } from 'react';
// import { Ionicons } from '@expo/vector-icons'
// import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight } from 'react-native';
// import AppIntroSlider from 'react-native-app-intro-slider';
// import WelcomePage from './WelcomePage.js';
// import RegisterClass from './RegisterPage.js';
// import RegisterClass2 from './RegisterPage2.js';
// import * as Font from 'expo-font';
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';

// const MainNavigator = createStackNavigator({
//   Home: {screen: HomeScreen},
//   Profile: {screen: ProfileScreen},
// });

// export default class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       showRealApp: false,
//       fontLoaded: false,
//       screens: []
//     }
//     this.state.screens.push(<App />)
//   }


 

//   _renderItem = ({ item }) => {
//     return (
//       <View style={styles.container} alignItems='center'>
//         <Image style={styles.slider_image} source={item.image} />
//         <Text style={styles.title_text}> {item.title}</Text>
//         <Text style={styles.main_text} >{item.text} </Text>
//       </View>
//     );
//   }

//   _onDone = () => {
//     this.setState({ showRealApp: true })
//   }

//   _renderNextButton = () => {
//     return (
//       <View style={styles.buttonCircle}>
//         <Ionicons
//           name="md-arrow-round-forward"
//           color="rgba(255, 255, 255, .9)"
//           size={24}
//           style={{ backgroundColor: 'transparent' }}
//         />
//       </View>
//     );
//   }

//   _renderPrevButton = () => {
//     return (
//       <View style={styles.buttonCircle}>
//         <Ionicons
//           name="md-arrow-round-back"
//           color="rgba(255, 255, 255, .9)"
//           size={24}
//           style={{ backgroundColor: 'transparent' }}
//         />
//       </View>
//     );
//   }

//   _renderDoneButton = () => {
//     return (
//       <View style={styles.buttonCircle}>
//         <Ionicons
//           name="md-checkmark"
//           color="rgba(255, 255, 255, .9)"
//           size={24}
//         //style={{ backgroundColor: 'transparent' }}
//         />
//       </View>
//     );
//   }

//   async componentDidMount() {
//     await Font.loadAsync({
//       'MyAwesomeFont': require('./assets/font/IRANSansWeb_Medium.ttf'),
//       'ionicons':require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf')
//     });
//     this.setState({fontLoaded: true});

//     console.log(this.state.fontLoaded)
//   }

//   render() {
//     if (this.state.fontLoaded) {
//       // let index = this.state.screens.length;
//       // let screen = this.state.screens.get(length - 1)

//       // if(screen == <App/>){
//       //   if (this.state.showRealApp) {
//       //     this.state.screens.push(<WelcomePage />)
//       //     return this.state.screens.get(++index);
//       //   }
//       // } else if(<WelcomePage />){

//       // }

//       if (this.state.showRealApp) {
//         this.state.screens.push(<WelcomePage />)
//         return <RegisterClass2/>
//       } else {
//         // return <AppIntroSlider renderItem={this._renderItem}
//         //   slides={slides}
//         //   dotStyle = {{backgroundColor: 'rgba(178,112,244,.4)'}}
//         //   activeDotStyle = {{backgroundColor: 'rgba(132,40,224,.9)'}}
//         //   onDone={this._onDone}
//         //   renderNextButton={this._renderNextButton}
//         //   renderDoneButton={this._renderDoneButton}
//         //   renderPrevButton= {this._renderPrevButton}
//         //   showPrevButton='true'
//         // />
//         // return <WelcomePage />

//         return <RegisterClass2/>
//       }
//     } else {
//       return  null;
//     }
//   }
// }
// const { width, height } = Dimensions.get("window");
// const styles = StyleSheet.create({
//   container: {
//     height: height,
//     width,
//     flexWrap: 'wrap'
//   },
//   title_text: {
//     fontSize: width / 15,
//     fontWeight: 'bold',
//     padding: 30,
//     paddingBottom: 10
//   },
//   main_text: {
//     fontSize: width / 20,
//     paddingLeft: 10,
//     paddingRight: 10
//   },
//   slider_image: {
//     padding: 5,
//     marginTop: height / 10,
//     height: height / 2.7,
//     width: width / 1.6
//   },
//   buttonCircle: {
//     width: 40,
//     height: 40,
//     backgroundColor: 'rgba(76, 10, 142, .6)',
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   }
// });

// const slides = [
//   {
//     key: 'page 1',
//     title: 'با ما زیبا شوید',
//     text: ' با استفاده از این اپلیکیشن شما میتوانید زیبا شوید. تمام مراحل زیبا شدنتان را میتوانید دنبال کنید',
//     image: require('./assets/png/Group-29.png'),
//   },
//   {
//     key: 'page 2',
//     title: 'رزرو آنلاین آرایشگاه',
//     text: 'رزرو آنلاین فروشگاه با انواع خدمات مختلف بصورت مجزا و دقیق',
//     image: require('./assets/png/Group-31.png'),

//   },
//   {
//     key: 'page 3',
//     title: 'فروشگاه آنلاین',
//     text: 'خرید از فروشگاه آنلاین و آرایش حرفه ای بصورت کاملا تخصصی',
//     image: require('./assets/png/Group-36.png'),
//   },
// ]

import React from 'react';
import Temp from './Temp';


const App = ()=>{
  return <Temp/>
}

export default App