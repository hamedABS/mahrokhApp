import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView} from 'react-native';
import Modal from 'react-native-modal';


export default class Profile extends React.Component {

    constructor() {
        super();
        this.state = {
            modalIsVisible: false,
            chargeItem: '0'
        }

    }
    static navigationOptions = ({navigation}) => {
        let leftBtn =
            <TouchableOpacity onPress={() => navigation.navigate('ReservedSalons')}>
                <Image source={require('../../assets/png/calendar.png')}
                       style={{width: 21, height: 23, marginLeft: 15}}/>
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
                    style={{width: 23, height: 23, marginRight: 15, tintColor: '#C8992E'}}/>
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


    render() {
        let numbers = ['50000', '100000', '150000', '200000']
        return (
            <View>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <View style={{
                        height: height / 4,
                        width: width / 2,
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        alignContent: 'center',
                        justifyContent: 'space-around',
                        alignSelf: 'flex-end',
                        marginLeft: 25,
                    }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileSetting')}>
                            <Image
                                source={require('../../assets/png/brownHairGirl.png')}
                                style={{width: width / 4, height: width / 4, borderRadius: 50}}
                            />
                        </TouchableOpacity>
                        <Text style={styles.txt}>سارا رضایی</Text>
                    </View>
                    <View style={[styles.everyItem, {justifyContent: 'space-between'}]}>
                        <Modal isVisible={this.state.modalIsVisible}>
                            <View style={styles.modalContainer}>
                                <View style={styles.modalHeader}>
                                    <Text style={[styles.txt, styles.modalHeaderText]}>افزایش اعتبار کیف پول</Text>
                                    <TouchableOpacity
                                        onPress={() => this.setState({modalIsVisible: !this.state.modalIsVisible})}
                                        style={{marginTop:10 ,marginLeft: 20 }}>
                                        <Image
                                            source={require('../../assets/png/cancel.png')}
                                            style={{
                                                width: 30,
                                                height: 30,
                                                tintColor: 'rgb(0,0,0)',
                                            }}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={[styles.txt, {textAlign: 'center', margin: 10}]}>مبلغ خود را به تومان
                                        وارد کنید.</Text>
                                    <View style={styles.itemContainer}>
                                        <TextInput style={[styles.txt, {
                                            fontSize: 18,
                                            width: width / 1.3,
                                            textAlign: 'center'
                                        },]}
                                                   keyboardType="phone-pad"
                                                   onChangeText={(number) => this.setState({chargeItem: number})}
                                                   value={this.state.chargeItem}
                                        />
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row-reverse', marginTop: 20}}>
                                    {
                                        numbers.map((item, i) => {
                                            return (
                                                <TouchableOpacity key={i}
                                                                  onPress={() => {
                                                                      this._onItemPressed(item)
                                                                  }}
                                                                  style={this.state.chargeItem == item ? [styles.chargeItem, {borderColor: '#B08C3E'}] : styles.chargeItem}>
                                                    <Text style={[styles.txt, {textAlign: 'center'}]}>{item}</Text>
                                                </TouchableOpacity>
                                            )
                                        })
                                    }
                                </View>
                                <View style={styles.modalFooter}>
                                    <TouchableOpacity
                                        onPress={() => this.setState({modalIsVisible: !this.state.modalIsVisible})}
                                        style={{margin: 20}}>
                                        <Text
                                            style={[styles.txt, styles.modalHeaderText, {color: '#ddac17'}]}>تایید</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </Modal>
                        <TouchableOpacity style={{flexDirection: 'row-reverse'}} onPress={() => this.setState({
                            modalIsVisible: true
                        })}>
                            <Image
                                source={require('../../assets/png/wallet.png')}
                                style={styles.icon}/>
                            <Text style={styles.txt}>کیف پول</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flexDirection: 'row-reverse',
                            justifyContent: 'space-between',
                            height: 25,
                            borderRadius: 25,
                            borderWidth: 1,
                            borderColor: 'rgba(0,0,0,0.26)',
                            marginRight: 15,
                        }} onPress={() => this.setState({modalIsVisible: true})}>
                            <Text style={[styles.txt, {fontSize: 12}]}> اعتبار {this.state.chargeItem} تومان</Text>
                            <Image
                                source={require('../../assets/png/plus2.png')}
                                style={{
                                    width: 15,
                                    height: 15,
                                    marginTop: 4,
                                    marginLeft: 5,
                                    tintColor: 'rgba(0,0,0,0.6)'
                                }}/>
                        </TouchableOpacity>
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
                </View>
            </View>
        )
    }

    _onItemPressed(item) {
        console.log(item)
        this.setState({
            chargeItem: item
        })
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
        alignItems: 'center',
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 10,
        marginLeft: 5,
        tintColor: '#ddac17'
    },
    txt: {
        fontSize: 16,
        fontFamily: 'IRANSansFaNum',
        color: '#323232'
    },
    chargeItem: {
        justifyContent: 'center',
        flexDirection: 'row-reverse',
        width: width / 4 - 30,
        height: 35,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.6)',
        margin: 5
    },
    modalContainer: {
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        width: width / 1.1,
        height: height / 2,
        borderRadius: 25
    },
    modalHeader: {
        borderBottomColor: 'rgba(0,0,0,0.4)',
        height: height / 10,
        width: width / 1.1,
        padding:15,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
        flexDirection: 'row-reverse',
    },
    modalFooter: {
        borderTopColor: 'rgba(0,0,0,0.4)',
        borderTopWidth: 1,
        backgroundColor: 'white',
        height: height / 10,
        width: width / 1.1,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    modalHeaderText: {
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center',
        width: width / 1.3,
        alignContent: 'center'
    },
    itemContainer: {
        width: width / 1.3,
        height: 40,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.6)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    }
})
