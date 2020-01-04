import React from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    ScrollView,
    TouchableHighlight
} from 'react-native';
import MapView from "react-native-maps";
import {color} from "react-native-reanimated";


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

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <View style={[styles.itemContainer, {height: height / 4}]}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Salon')}>
                        <Image
                            source={require('../../assets/png/salon1.png')}
                            style={{width: width / 4, height: width / 4, borderRadius: 50}}
                        />
                    </TouchableOpacity>
                    <Text style={[styles.itemText, {fontSize: 22}]}>رزرو آرایشگاه کایزن</Text>
                </View>
                <View style={[styles.itemContainer, {padding: 10, height: height / 8}]}>
                    <Text style={styles.itemText}>زمان رزرو:چهارشنبه ساعت 10 صبح</Text>
                    <Text style={styles.itemText}>آدرس آرایشگاه:میرداماد چهار راه امیرخان نرسیده به میدان پلاک 10</Text>
                </View>
                <View style={styles.invoiceView}>
                    <View style={styles.invoiceViewFirstPart}>
                        <Text style={styles.itemText}>مجموع سبد خرید:90 هزارتومان</Text>
                        <Text style={styles.itemText}> تخفیف:20 هزار تومان</Text>
                        <Text style={styles.itemText}>مالیات:0 تومان</Text>
                    </View>
                    <View>
                        <Text style={[styles.itemText, {color: '#B08C3E', marginTop:10}]}> مبلغ نهایی:70 هزار تومان</Text>
                    </View>
                </View>
                <View>
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
        color:'rgba(0,0,0,0.58)'
    },
    invoiceView: {
        width: width / 2.3,
        height: height / 5,
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
        backgroundColor: '#A537FD',
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
