import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Popup, showLocation} from "react-native-map-link";
// import Mapir from "mapir-react-native-sdk";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import MyMapView from '../MyMapView'
import Routing from "../Routing";


export default class SalonInfo extends React.Component {

    constructor() {
        super();
        this.state = {
            location: '',
            isVisible: false,
            options: {},
            locationIsLoaded: false
        }
    }


    static navigationOptions = ({navigation}) => {
        let headerBackImage = <Image source={require('../../assets/png/left.png')}
                                     style={{width: 20, height: 20}}
        />;
        let headerTitle = <Text style={{
            textAlign: 'center',
            fontFamily: 'IRANSansWeb',
            flexGrow: 1,
            marginRight: 30,
            fontSize: 16
        }}>کایزن</Text>
        return {
            title: navigation.getParam('salonName', 'کایزن'),
            headerBackImage: () => {
                return headerBackImage
            },
            headerTitle: () => {
                return headerTitle
            },
            tabBarVisible: false
        };
    };

    componentDidMount() {
        this._getLocationAsync()
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

    render() {
        if (this.state.locationIsLoaded)
            return (
                <View>
                    <Popup
                        isVisible={this.state.isVisible}
                        onCancelPressed={() => this.setState({isVisible: false})}
                        //appsWhiteList={["Waze"]}
                        onAppPressed={() => this.setState({isVisible: false})}
                        onBackButtonPressed={() => this.setState({isVisible: false})}
                        options={this.state.options}
                    />
                    <MyMapView/>
                    {/*  <Mapir apiKey={API_KEY} zoomLevel={13} centerCoordinate={[51.422548, 35.732573]}
                           style={{width: width, height: height / 4}}>
                        <Mapir.UserLocation />
                    </Mapir>*/}

                    <View style={styles.address}>
                        <Text style={{
                            fontSize: 17,
                            fontFamily: 'IRANSansFaNum',
                            textAlign: 'center',
                            color: '#00000099'
                        }}>زعفرانیه
                            - مقدس اردبیلی- پلاک 2</Text>
                        <TouchableOpacity style={styles.routingBtn}
                                          onPress={() => {this.setState({isVisible: true})}}>
                            <Text style={{
                                fontSize: 15,
                                fontFamily: 'IRANSansFaNum',
                                textAlign: 'center',
                                marginBottom: 5,
                                color: '#00000099',
                            }}>مسیر یابی</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.workingTime}>
                        <Text style={[styles.titlesBaseStyle, {alignSelf: 'flex-end'}]}>ساعات کاری</Text>
                        <View style={styles.workingTimeItem}>
                            <View style={{flexDirection: 'row-reverse', alignItems: 'center'}}>
                                <View style={{width: 10, height: 10, backgroundColor: '#ddac17', borderRadius: 50}}/>
                                <Text style={[styles.workingItemText, {fontSize: 15, marginRight: 10}]}>شنبه الی
                                    چهارشنبه</Text>
                            </View>
                            <Text style={[styles.workingItemText, {fontSize: 15}]}>۹-۲۰</Text>
                        </View>
                        <View style={styles.workingTimeItem}>
                            <View style={{flexDirection: 'row-reverse', alignItems: 'center'}}>
                                <View style={{width: 10, height: 10, backgroundColor: '#ddac17', borderRadius: 50}}/>
                                <Text style={[styles.workingItemText, {fontSize: 15, marginRight: 10}]}>پنجشنبه</Text>
                            </View>
                            <Text style={[styles.workingItemText, {fontSize: 15}]}>۹-۲۰</Text>
                        </View>
                    </View>
                    <View style={styles.personnelContainer}>
                        <Text style={styles.titlesBaseStyle}>پرسنل</Text>
                        <View style={styles.personnel}>
                            <View style={styles.personnelTile}>
                                <Image
                                    source={require('../../assets/png/brownHairGirl.png')}
                                    style={styles.personnelImage}
                                />
                                <Text style={[styles.titlesBaseStyle, {fontSize: 12}]}>پرسنل چشم</Text>
                            </View>
                            <View style={styles.personnelTile}>
                                <Image
                                    source={require('../../assets/png/brownHairGirl.png')}
                                    style={styles.personnelImage}
                                />
                                <Text style={[styles.titlesBaseStyle, {fontSize: 12}]}>پرسنل پوست</Text>
                            </View>
                            <View style={styles.personnelTile}>
                                <Image
                                    source={require('../../assets/png/brownHairGirl.png')}
                                    style={styles.personnelImage}
                                />
                                <Text style={[styles.titlesBaseStyle, {fontSize: 12}]}>پرسنل ابرو</Text>
                            </View>
                            <View style={styles.personnelTile}>
                                <Image
                                    source={require('../../assets/png/brownHairGirl.png')}
                                    style={styles.personnelImage}
                                />
                                <Text style={[styles.titlesBaseStyle, {fontSize: 12, marginLeft: 5}]}>پرسنل مو</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.titlesBaseStyle}>توضیحات
                            فروشگاه</Text>
                        <Text style={[styles.titlesBaseStyle,]}>برای زمان جمعه لطفا با ما
                            تماس بگیرید</Text>
                    </View>
                </View>
            )

        else return null;
    }
}

const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    address: {
        width: width,
        height: height / 9,
        justifyContent: 'space-around',
        flexDirection: 'row-reverse',
        alignItems: "center",
        backgroundColor: 'white',
        borderBottomColor: "#70707080",
        borderBottomWidth: 1
    },
    routingBtn: {
        justifyContent: 'center',
        width: width / 4.8,
        height: 27,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#B08C3E'
    },
    workingTime: {
        width: width,
        height: height / 6,
        borderBottomColor: "#70707080",
        borderBottomWidth: 1,
        alignItems: 'center'
    },
    workingTimeItem: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width / 1.3,
        marginTop: 5,
        marginRight: 10,
    },
    workingItemText: {
        fontSize: 17,
        fontFamily: 'IRANSansFaNum',
        textAlign: 'center',
        color: '#00000099',
    },
    personnelContainer: {
        width: width,
        height: height / 4.5,
        borderBottomColor: "#70707080",
        borderBottomWidth: 1,
        justifyContent: 'space-between'
    },
    personnel: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    personnelTile: {
        marginBottom: 20,
        alignItems: 'center'
    },
    personnelImage: {
        width: width / 6,
        height: width / 6,
        borderRadius: 50
    },
    info: {
        width: width,
        height: height / 5,
        borderBottomColor: "#70707080",
        borderBottomWidth: 1
    },
    titlesBaseStyle: {
        fontSize: 17,
        fontFamily: 'IRANSansFaNum',
        marginRight: 15,
        color: '#00000099',
    }
})
