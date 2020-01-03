import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView} from 'react-native';


export default class Profile extends React.Component {


    static navigationOptions = ({navigation}) => {
        let leftBtn =
            <TouchableOpacity onPress={() => navigation.navigate('ReservedSalons')}>
                <Image source={require('../../assets/png/calendar.png')}
                       style={{width: 18, height: 20, marginLeft: 10}}/>
            </TouchableOpacity>

        let headerTitle =
            <Text style={{
                textAlign: 'center',
                fontFamily: 'IRANSansWeb',
                width: width / 1.4,
                fontSize: 16
            }}>پروفایل
            </Text>
        let rightBtn =
            <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
            <Image
                source={require('../../assets/png/settings3x.png')}
                style={{width: 20, height: 20, marginRight: 10, tintColor: '#C8992E'}}/>
        </TouchableOpacity>
        return {
            headerLeft: () => {
                return leftBtn
            },
            headerTitle: () => {
                return headerTitle
            },
            headerRight: () => {
                return rightBtn;
            }
        };
    };

    _onSettingPressed = () => {

    }

    render() {
        return (
            <View>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <View style={{
                        height: height / 4,
                        width: width / 2,
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        alignSelf: 'flex-end',
                        marginLeft: 25,
                    }}>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('ProfileSetting')}>
                            <Image
                                source={require('../../assets/png/brownHairGirl.png')}
                                style={{width: width / 4, height: width / 4, borderRadius: 50}}
                            />
                        </TouchableOpacity>
                        <Text style={styles.txt}>سارا رضایی</Text>
                    </View>

                    <View style={[styles.everyItem, {justifyContent: 'space-between'}]}>
                        <View style={{flexDirection: 'row-reverse'}}>
                            <Image
                                source={require('../../assets/png/wallet.png')}
                                style={styles.icon}/>
                            <Text style={styles.txt}>کیف پول</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row-reverse',
                            justifyContent: 'space-between',
                            width: width / 4.3,
                            height: 25,
                            borderRadius: 25,
                            borderWidth: 1,
                            borderColor: 'rgba(0,0,0,0.26)',
                            marginRight: 15
                        }}>
                            <Text style={[styles.txt, {fontSize: 12}]}> اعتبار ۰ تومان</Text>
                            <Image
                                source={require('../../assets/png/plus2.png')}
                                style={{
                                    width: 15,
                                    height: 15,
                                    marginTop: 4,
                                    marginLeft: 5,
                                    tintColor: 'rgba(0,0,0,0.6)'
                                }}/>
                        </View>
                    </View>
                    <View style={styles.everyItem}>
                        <Image
                            source={require('../../assets/png/heart-1.png')}
                            style={styles.icon}/>
                        <Text style={styles.txt}>سالن مورد علاقه من</Text>
                    </View>
                    <View style={styles.everyItem}>
                        <Image
                            source={require('../../assets/png/edit.png')}
                            style={styles.icon}/>
                        <Text style={styles.txt}>نظرات من</Text>
                    </View>
                    <View style={styles.everyItem}>
                        <Image
                            source={require('../../assets/png/share.png')}
                            style={styles.icon}/>
                        <Text style={styles.txt}>معرفی به دوستان</Text>
                    </View>
                    <View style={styles.everyItem}>
                        <Image
                            source={require('../../assets/png/falling-star.png')}
                            style={styles.icon}/>
                        <Text style={styles.txt}>قرعه کشی</Text>
                    </View>
                </View>
            </View>
        )
    }
}


const {width, height} = Dimensions.get("window");

const styles = StyleSheet.create({
    everyItem: {
        flexDirection: 'row-reverse',
        width: width,
        height: height / 14,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.26)',
        alignItems: 'center'
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 10,
        marginLeft: 5,
        tintColor: 'rgba(0,0,0,0.26)'
    },
    txt: {
        fontSize: 16,
        fontFamily: 'IRANSansFaNum',
        color: '#323232'
    }
})
