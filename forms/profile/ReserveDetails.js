import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';
import Routing from "../Routing";
import MyMapView from "../MyMapView";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import {Popup} from "react-native-map-link";
import Modal from 'react-native-modal'
import authStyles from "../auth/AuthStyles";

export default class ReserveDetails extends React.Component {

    constructor() {
        super();
        this.state = {
            location: '',
            isVisible: false,
            options: {},
            locationIsLoaded: false,
            cancelModalIsVisible: false,
            cancelReason: ''
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
                width: width / 1.3,
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

    componentDidMount() {
        this._getLocationAsync()
    }

    _renderPopup() {
        return <Popup
            isVisible={this.state.isVisible}
            onCancelPressed={() => this.setState({isVisible: false})}
            onAppPressed={() => this.setState({isVisible: false})}
            onBackButtonPressed={() => this.setState({isVisible: false})}
            options={this.state.options}
        />
    }

    _getLocationAsync = async () => {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({
            location: location,
            options: {
                latitude: 35.764482,
                longitude: 51.395893,
                sourceLatitude: location.coords.latitude,
                sourceLongitude: location.coords.longitude,
                title: 'The White House',  // optional
                googleForceLatLon: true,
                dialogTitle: 'مسیر یابی کنید', // optional (default: 'Open in Maps')
                alwaysIncludeGoogle: true, // optional, true will always add Google Maps to iOS and open in Safari, even if app is not installed (default: false)
                dialogMessage: 'از چه اپلیکیشنی میخواهید استفاده کنید؟',
            },
            locationIsLoaded: true
        });

    };

    _renderCancelModal() {
        return <Modal isVisible={this.state.cancelModalIsVisible}>
            <View style={styles.modalContainer}>
                <Text style={[styles.itemText, {marginTop: 10}]}>دلیل لغو رزرو چیست؟</Text>
                <TextInput
                    style={[authStyles.txt_input, {
                        height: height/10,
                        width: width / 1.2,
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: 'rgba(0,0,0,0.5)'
                    }]}
                    autoCapitalize='words'
                    onChangeText={(cancelReason) => this.setState({cancelReason})}
                    value={this.state.cancelReason}/>

                <View style={{flexDirection: 'row-reverse', alignItems: 'center',marginBottom: 5}}>
                    <TouchableOpacity style={{padding: 5, backgroundColor: '#B08C3E', borderRadius: 5, marginLeft: 5}}
                                      onPress={() => this.setState({cancelModalIsVisible: false})}>
                        <Text style={styles.itemText}>لغو رزرو</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding: 5, backgroundColor: '#f75841', borderRadius: 5}}
                                      onPress={() => this.setState({cancelModalIsVisible: false})}>
                        <Text style={styles.itemText}> انصراف از لغو</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    }


    render() {
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                {this._renderPopup()}
                {this._renderCancelModal()}
                <View style={[styles.itemContainer, {height: height / 4}]}>
                    <TouchableOpacity style={styles.cancelBtn}
                                      onPress={() => this.setState({cancelModalIsVisible: true})}>
                        <Image
                            source={require('../../assets/png/cancel.png')}
                            style={{width: 20, height: 20, borderRadius: 50, tintColor: 'red', marginLeft: 5}}
                        />
                        <Text style={styles.itemText}>لغو رزرو</Text>
                    </TouchableOpacity>

                    <View style={{marginBottom: 10, alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Salon')}>
                            <Image
                                source={require('../../assets/png/salon1.png')}
                                style={{width: width / 4, height: width / 4, borderRadius: 50}}
                            />
                        </TouchableOpacity>
                        <Text style={[styles.itemText, {fontSize: 18}]}>رزرو آرایشگاه کایزن</Text>
                    </View>

                </View>
                <View style={[styles.itemContainer, {padding: 10, height: height / 8}]}>
                    <Text style={styles.itemText}>کاشت ناخن۹۸/۱۰/۲۷ ساعت 8 صبح</Text>
                    <Text style={styles.itemText}>خدامت مو ۹۸/۱۰/۲۶ ساعت 10 صبح</Text>
                    <Text style={styles.itemText}>کاشت ناخن۹۸/۱۰/۲۸ ساعت 12 صبح</Text>
                </View>
                <View style={[styles.itemContainer, {height: height / 11}]}>
                    <Text style={styles.itemText}>صورت حساب: پرداخت شده است</Text>
                </View>
                <View>
                    <MyMapView/>
                    <View style={styles.address}>
                        <Text style={{
                            fontSize: 17,
                            fontFamily: 'IRANSansFaNum',
                            textAlign: 'center',
                            color: '#00000099'
                        }}>زعفرانیه
                            - مقدس اردبیلی- پلاک 2</Text>
                        <TouchableOpacity style={styles.routingBtn}
                                          onPress={() => {
                                              this.setState({isVisible: true})
                                          }}>
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
        textAlign: 'center'
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
        justifyContent: 'center',
        height: '20%',
        borderRadius: 50,
        borderColor: '#B08C3E',
        borderWidth: 1,
        marginBottom: 10,
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
        justifyContent: 'center',
        width: width / 4.8,
        height: 27,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#B08C3E'
    },
    modalContainer: {
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        width: width / 1.1,
        height: height / 3,
        borderRadius: 10
    },
    cancelBtn: {
        alignSelf: 'flex-end',
        flexDirection: 'row-reverse',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        marginTop: 10,
        marginLeft: 10
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
