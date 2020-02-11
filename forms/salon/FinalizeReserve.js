import React from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from "react-native-simple-radio-button";


export default class FinalizeReserve extends React.Component {

    static navigationOptions = ({navigation}) => {
        let headerBackImage = <Image source={require('../../assets/png/left.png')}
                                     style={{width: 20, height: 20}}
        />;
        let headerTitle =
            <Text style={{
                textAlign: 'center',
                fontFamily: 'IRANSansWeb',
                width: width / 1.3,
                fontSize: 16
            }}>ثبت رزرو</Text>
        return {
            headerBackImage: () => {
                return headerBackImage
            },
            headerTitle: () => {
                return headerTitle
            },
        };
    };

    constructor() {
        super();
        this.state = {
            value: '',
            toBePayPrice: ''
        }
    }

    _radioPress = (value) => {
        let wholePrice = this.props.navigation.getParam('wholePrice');
        let discount = 20000;

        if (value == 0) {
            this.setState({
                value: value,
                toBePayPrice: wholePrice - discount
            })
        } else {
            let toBe‍PayPrice = (wholePrice - discount) / 5
            this.setState({
                value: value,
                toBePayPrice: toBe‍PayPrice
            })
        }
    }

    render() {
        let discount = 20000;
        let wholePrice = this.props.navigation.getParam('wholePrice');
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <View style={[styles.itemContainer, {height: height / 4}]}>
                    <View style={{flexDirection: 'row-reverse', alignItems: 'center', alignContent: 'center'}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Salon')}>
                            <Image
                                source={require('../../assets/png/salon1.png')}
                                style={{width: width / 5, height: width / 5, borderRadius: 50, marginLeft: 10}}
                            />
                        </TouchableOpacity>
                        <Text style={[styles.itemText, {fontSize: 22}]}>رزرو آرایشگاه کایزن</Text>
                    </View>
                    <Text style={[styles.itemText, {fontSize: 15, marginTop: 10}]}>آدرس آرایشگاه:میرداماد چهار راه
                        امیرخان نرسیده به میدان پلاک 10</Text>
                </View>

                <View style={styles.invoiceView}>
                    <View style={styles.invoiceViewFirstPart}>
                        <Text style={styles.itemText}> مجموع سبد خرید:{wholePrice} </Text>
                        <Text style={styles.itemText}> تخفیف: {discount} تومان </Text>
                        <Text style={[styles.itemText, {color: '#B08C3E'}]}>مبلغ نهایی: {wholePrice - discount} </Text>
                    </View>
                    <View style={{alignItems: 'center', alignContent: 'center'}}>
                        <Text style={[styles.itemText, {color: '#B08C3E'}]}>مبلغ
                            نهایی: {this.state.toBePayPrice} </Text>
                    </View>
                </View>

                <RadioForm
                    style={{flexDirection: 'column', justifyContent: 'flex-end', marginTop: 30}}
                    animation={true}
                >
                    {
                        radio_props.map((obj, i) => (
                            <RadioButton key={i}>
                                <RadioButtonLabel
                                    obj={obj}
                                    onPress={(value) => this._radioPress(value)}
                                    labelStyle={{fontSize: 17, color: 'rgba(0,0,0,0.5)', fontFamily: 'IRANSansFaNum'}}
                                />
                                <RadioButtonInput
                                    obj={obj}
                                    isSelected={this.state.value === i}
                                    onPress={(value) => this._radioPress(value)}
                                    borderWidth={1}
                                    buttonInnerColor={'#e6b618'}
                                    buttonOuterColor={this.state.value === i ? '#a27d3d' : '#000'}
                                    buttonSize={12}
                                    buttonOuterSize={16}
                                    buttonWrapStyle={{marginLeft: 10}}
                                />

                            </RadioButton>
                        ))
                    }
                </RadioForm>

                <View style={{flexDirection: 'row-reverse', justifyContent: 'space-around', width: width}}>
                    <TouchableOpacity style={styles.pay_btn} onPress={this._onRegisterPressButton}>
                        <Text style={styles.btn_pay_txt}>پرداخت آنلاین</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.wallet_pay_btn} onPress={this._onRegisterPressButton}>
                        <Text style={[styles.btn_pay_txt, {color: 'black'}]}>پرداخت از کیف پول</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}


const {width, height} = Dimensions.get("window");
const radio_props = [
    {
        label: "کل مبلغ رزرو را میپردازم.              ",
        value: 0
    }, {
        label: "فقط مبلغ پیش پرداخت را میپردازم\n (۲۰٪ مبلغ)",
        value: 1
    }]
const styles = StyleSheet.create({
    itemContainer: {
        width: width,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.26)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemText: {
        fontSize: 14,
        fontFamily: 'IRANSansFaNum',
        textAlign: 'center',
        color: 'rgba(0,0,0,0.58)'
    },
    invoiceView: {
        width: width / 2.3,
        height: height / 4.7,
        marginTop: 20,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        backgroundColor: 'white'
    },
    invoiceViewFirstPart: {
        width: "100%",
        height: "70%",
        borderBottomColor: 'rgba(0,0,0,0.46)',
        borderBottomWidth: 1
    },
    btn_pay_txt: {
        fontFamily: 'IRANSansWebMedium',
        fontSize: width / 23,
        textAlign: 'center',
        color: 'white'
    },
    pay_btn: {
        width: width / 2.5,
        height: height / 18,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e6b618',
        borderRadius: 50,
        marginTop: 20
    },
    wallet_pay_btn: {
        width: width / 2.5,
        height: height / 18,
        borderWidth: 1,
        borderColor: '#B08C3E',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: 20
    }
})

const mockData = [
    {
        id: 1,
        salonName: 'سالن کایزن',
        service: 'کاشت ناخن',
        salonImageSource: '../../assets/png/salon1.png',
        date: '۱۲ شهریور ساعت ۱۰ صبح'
    },
    {
        id: 2,
        salonName: 'سالن کایزن',
        service: 'کاشت ناخن',
        salonImageSource: '../../assets/png/salon1.png',
        date: '۱۲ شهریور ساعت ۱۰ صبح'
    }, {
        id: 3,
        salonName: 'سالن کایزن',
        service: 'کاشت ناخن',
        salonImageSource: '../../assets/png/salon1.png',
        date: '۱۲ شهریور ساعت ۱۰ صبح'
    },
    {
        id: 43,
        salonName: 'سالن کایزن',
        service: 'کاشت ناخن',
        salonImageSource: '../../assets/png/salon1.png',
        date: '۱۲ شهریور ساعت ۱۰ صبح'
    },
    {
        id: 43,
        salonName: 'سالن کایزن',
        service: 'کاشت ناخن',
        salonImageSource: '../../assets/png/salon1.png',
        date: '۱۲ شهریور ساعت ۱۰ صبح'
    },
]
