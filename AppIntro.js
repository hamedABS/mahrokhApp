import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions, TouchableHighlight} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-ionicons';
import * as Font from 'expo-font';


export default class AppIntro extends React.Component {
    constructor() {
        super()
        this.state = {
            showRealApp: false,
        }
    }


    _renderItem = ({item}) => {
        return (
            <View style={styles.container} alignItems='center'>
                <Image style={styles.slider_image} source={item.image}/>
                <Text style={styles.title_text}> {item.title}</Text>
                <Text style={styles.main_text}>{item.text} </Text>
            </View>
        );
    }

    _onDone = () => {
        this.setState({showRealApp: true})
        this.props.navigation.navigate('Welcome')
    }

    _renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Icon
                    name="md-arrow-round-forward"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                    style={{backgroundColor: 'transparent'}}
                />
            </View>

        );
    }

    _renderPrevButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Icon
                    name="md-arrow-round-back"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                    style={{backgroundColor: 'transparent'}}
                />
            </View>
        );
    }

    _renderDoneButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Icon
                    name="md-checkmark"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                    //style={{ backgroundColor: 'transparent' }}
                />
            </View>
        );
    }


    render() {
        console.log('app intro renderring')
        if (this.state.showRealApp) {
            console.log('app show real')
            return null
        } else {
            console.log('returining appIntroSlider')
            return <AppIntroSlider renderItem={this._renderItem}
                                   slides={slides}
                                   dotStyle={{backgroundColor: 'rgba(178,112,244,.4)'}}
                                   activeDotStyle={{backgroundColor: 'rgba(132,40,224,.9)'}}
                                   onDone={this._onDone}
                                   renderNextButton={this._renderNextButton}
                                   renderDoneButton={this._renderDoneButton}
                                   renderPrevButton={this._renderPrevButton}
                                   showPrevButton='true'

            />
        }
    }
}


const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        height: height,
        width,
        flexWrap: 'wrap'
    },
    title_text: {
        fontSize: width / 15,
        padding: 30,
        paddingBottom: 10,
        fontFamily: 'IRANSansWebBold'
    },
    main_text: {
        fontSize: width / 20,
        paddingLeft: 10,
        paddingRight: 10,
        fontFamily: 'IRANSansFaNum'
    },
    slider_image: {
        padding: 5,
        marginTop: height / 10,
        height: height / 2.7,
        width: width / 1.6
    },
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(76, 10, 142, .6)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const slides = [
    {
        key: 'page 1',
        title: 'با ما زیبا شوید',
        text: ' با استفاده از این اپلیکیشن شما میتوانید زیبا شوید. تمام مراحل زیبا شدنتان را میتوانید دنبال کنید',
        image: require('./assets/png/Group-29.png'),
    },
    {
        key: 'page 2',
        title: 'رزرو آنلاین آرایشگاه',
        text: 'رزرو آنلاین فروشگاه با انواع خدمات مختلف بصورت مجزا و دقیق',
        image: require('./assets/png/Group-31.png'),

    },
    {
        key: 'page 3',
        title: 'فروشگاه آنلاین',
        text: 'خرید از فروشگاه آنلاین و آرایش حرفه ای بصورت کاملا تخصصی',
        image: require('./assets/png/Group-36.png'),
    },
]
