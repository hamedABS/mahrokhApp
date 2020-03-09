import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions, TouchableHighlight} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-ionicons';
import {I18nManager} from 'react-native';

I18nManager.allowRTL(false);

export default class AppIntro extends React.Component {
    constructor() {
        super()
        this.state = {
            showRealApp: false,
        }
    }

    static navigationOptions = {
        headerShown: false,
    };

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
                                   dotStyle={{backgroundColor: 'rgba(245,203,18,0.36)'}}
                                   activeDotStyle={{backgroundColor: '#ba9542'}}
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
        fontSize: 22,
        marginBottom: 10,
        marginTop: 25,
        fontFamily: 'IRANSansWebBold',
        textAlign: 'center'
    },
    main_text: {
        fontSize: 18,
        paddingLeft: 10,
        paddingRight: 10,
        fontFamily: 'IRANSansFaNum',
        textAlign: 'center'
    },
    slider_image: {
        padding: 5,
        marginTop: height / 10,
        height: width / 1.3,
        width: width / 1.3
    },
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: '#B08C3E',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const slides = [
    {
        key: 'page 1',
        title: 'انتخاب سالن زیبایی',
        text: 'سالن زیبایی، خدمات و پرسنل مورد نظر خود را با توجه به نمونه کارها انتخاب نمایید.',
        image: require('./assets/png/chooseSalon.png'),
    },
    {
        key: 'page 2',
        title: 'رزرواسیون آنلاین',
        text: 'بدون محدودیت زمان و مکان ، زمان دقیق مراجعه به سالن زیبایی خود را رزرو نمایید',
        image: require('./assets/png/onlineReserve.png'),

    },
    {
        key: 'page 3',
        title: 'پرداخت آنلاین و ثبت قطعی نوبت',
        text: 'شما می توانید با پرداخت بخشی از هزینه خدمات مورد نظر بصورت آنلاین و یا از موجودی کیف پول ، رزرو خود را قطعی نمایید',
        image: require('./assets/png/onlinePay.png'),
    },
    {
        key: 'page 4',
        title: 'تعیین موقعیت مکانی',
        text: 'سالن های زیبایی اطرافتان را مشاهده نمایید. لوکیشن سالن های زیبایی و مسیریابی را روی نقشه ببینید.',
        image: require('./assets/png/search_intro.png'),
    },
]
