import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MapView from "react-native-maps";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";


export default class SalonInfo extends React.Component {

    constructor() {
        super();
        this.state = {
            location: ''
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
        this.setState({location: location});
    };

    render() {
        let text = 'Waiting..';
        let location;
        let locationIsLoad = false;
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
            locationIsLoad=false
        } else if (this.state.location) {
            text = JSON.stringify(this.state.location);
            location = JSON.parse(text);
            console.log(location.coords.latitude);
            console.log(location.coords.longitude);
            locationIsLoad = true;
        }
        console.log(text)
        if (locationIsLoad) {
            let latitude = this.state.location.coords.latitude;
            let longitude = this.state.location.coords.longitude;
            return (
                <View>
                    <MapView style={{width: width, height: height / 4}}
                             initialRegion={{
                                 latitude: latitude,
                                 longitude: longitude,
                                 latitudeDelta: 0.0922,
                                 longitudeDelta: 0.0421,
                             }}
                             showsMyLocationButton={true}
                             followsUserLocation={true}
                             showsCompass={true}
                             showsIndoors={true}
                    />

                    <View style={styles.address}>
                        <Text style={{
                            fontSize: 17,
                            fontFamily: 'IRANSansFaNum',
                            textAlign: 'center',
                            color: '#00000099'
                        }}>زعفرانیه
                            - مقدس اردبیلی- پلاک 2</Text>
                        <TouchableOpacity style={styles.routingBtn}>
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
                                <View style={{width: 10, height: 10, backgroundColor: '#A537FD', borderRadius: 50}}/>
                                <Text style={[styles.workingItemText, {fontSize: 15, marginRight: 10}]}>شنبه الی
                                    چهارشنبه</Text>
                            </View>
                            <Text style={[styles.workingItemText, {fontSize: 15}]}>۹-۲۰</Text>
                        </View>
                        <View style={styles.workingTimeItem}>
                            <View style={{flexDirection: 'row-reverse', alignItems: 'center'}}>
                                <View style={{width: 10, height: 10, backgroundColor: '#A537FD', borderRadius: 50}}/>
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
        } else return null;
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
