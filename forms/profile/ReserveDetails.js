import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MapView from "react-native-maps";
import Routing from "../Routing";

export default class ReserveDetails extends React.Component {

    constructor() {
        super();

        this.state = {
            location: '',
            markers: [],
            region: {},
            coords: [{
                latitude: 35.726981,
                longitude: 51.424158
            }]
        }
    }

    static navigationOptions = ({navigation}) => {
        let headerBackImage = <Image source={require('../../assets/png/left.png')}
                                     style={{width: 20, height: 20}}
        />;
        let headerTitle =
            <Text style={{
                textAlign: 'center',
                fontFamily: 'IRANSansWeb',
                width: width/1.3,
                fontSize: 16
            }}>جزییات رزرو</Text>
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
                <View style={[styles.itemContainer,{height:height/4}]} >
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Salon')}>
                        <Image
                            source={require('../../assets/png/salon1.png')}
                            style={{width: width / 4, height: width / 4, borderRadius: 50}}
                        />
                    </TouchableOpacity>
                    <Text style={[styles.itemText,{fontSize: 18}]}>رزرو آرایشگاه کایزن</Text>
                </View>
                <View style={[styles.itemContainer,{padding:10, height:height/8}]}>
                    <Text style={styles.itemText}>زمان رزرو:چهارشنبه ساعت 10 صبح</Text>
                    <Text style={styles.itemText}>آدرس آرایشگاه:مرداماد چهار راه امیرخان نرسیده به میدان پلاک 10</Text>
                </View>
                <View style={[styles.itemContainer,{height:height/11}]}>
                    <Text style={styles.itemText}>صورت حساب: پرداخت شده است</Text>
                </View>
                <View>
                    <MapView style={{width: width, height: height / 4}}
                             region={this.state.region}
                             onRegionChange={(region) => this.onRegionChange(region)}
                             showsMyLocationButton={true}
                             followsUserLocation={true}
                             showsCompass={true}
                             showsIndoors={true}
                    />

                    <View style={styles.address}>
                        <Text style={{fontSize: 17, fontFamily: 'IRANSansFaNum', textAlign: 'center', color: '#00000099'}}>زعفرانیه
                            - مقدس اردبیلی- پلاک 2</Text>
                        <TouchableOpacity style={styles.routingBtn}
                                          onPress={() => Routing.onDoTheDirectionOnPress(this.state.location.coords.latitude, this.state.location.coords.longitude)}>
                            <Text style={{
                                fontSize: 15,
                                fontFamily: 'IRANSansFaNum',
                                textAlign: 'center',
                                marginBottom: 5,
                                color: '#00000099',
                            }}>مسیر یابی</Text>
                        </TouchableOpacity>
                    </View>
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
        fontSize: 12,
        fontFamily: 'IRANSansFaNum',
        textAlign:'center'
    },
    itemImage: {
        width: width / 3,
        height: height / 8,
        margin: 6,
        borderRadius: 10,
        overflow: 'hidden'
    },
    details: {
        width: width / 6,
        justifyContent:'center',
        height: '20%',
        borderRadius: 50,
        borderColor: '#B08C3E',
        borderWidth: 1,
        marginBottom:10,
        alignSelf: 'flex-end'
    },
    address: {
        width: width,
        height: height / 9,
        justifyContent: 'space-around',
        flexDirection: 'row-reverse',
        alignItems: "center",
        backgroundColor: 'white',
    },
    routingBtn: {
        justifyContent:'center',
        width: width / 4.8,
        height: 27,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#B08C3E'
    },
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
