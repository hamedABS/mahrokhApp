import React from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import moment from 'moment-jalali';
import Moment from 'moment';
import ServiceOptions from "./sub_form/ServiceOptions";


export default class ReserveNew extends React.Component {

    constructor() {
        super();
        this.state = {
            note: '',
            modalIsVisible: false,
            reservedServices: '',
            focusedService: '',
            isServiceOptionsVisible: false,

        }

        this._onEditBtnPress = this._onEditBtnPress.bind(this)
        this._onDeleteBtnPress = this._onDeleteBtnPress.bind(this)
        this._setServiceOptionsVisibleFalse = this._setServiceOptionsVisibleFalse.bind(this)
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
            }}> رزرو جدید</Text>
        return {
            headerBackImage: () => {
                return headerBackImage
            },
            headerTitle: () => {
                return headerTitle
            },
        };
    };

    _setServiceOptionsVisibleFalse = () => {
        this.setState({
            isServiceOptionsVisible: false
        })
    }

    _onEditBtnPress = (i) => {
        console.log("in edit")
        this.setState({
            isServiceOptionsVisible: true,
            focusedService: i
        })
    }

    _onDeleteBtnPress = (service) => {
        try {
            let servicesTmp = this.props.navigation.getParam("services");
            let start = servicesTmp.findIndex((e) => e.id == service.id);
            console.log(start)
            servicesTmp.splice(start, 1)
            console.log("in delete");
            console.log(service)
            console.log(servicesTmp)
            this.setState({
                reservedServices: servicesTmp,
                isServiceOptionsVisible: false,
            })

            this.props.navigation.state.params.updateParentStates(servicesTmp);
        } catch (e) {
            console.log(e.stack)
        }

    }

    _calculateWholePrice = () => {
        let services = this.props.navigation.getParam('services')
        let wholePrice = 0;
        services.forEach(function (service) {
            wholePrice += service.price
        })
        return wholePrice;
    }

    setReservedServices = (service) => {
        let tmp = this.props.navigation.getParam("services");
        console.log(service)
        console.log("length: " + this.state.reservedServices.length)
        let index = tmp.findIndex(item => item.id == service.id)
        console.log(index)

        if (index >= 0) {
            console.log("contains")
            tmp[index] = service;
        }

        this.setState({
            reservedServices: tmp,
            isServiceOptionsVisible: false,
        })
        this.props.navigation.state.params.updateParentStates(tmp);
        tmp = this.props.navigation.getParam("services");

        console.log(tmp)

        console.log(this.state.reservedServices)
        console.log("**********")
    }

    _renderModal() {
        let i = this.state.focusedService;
        let reservedServices = this.props.navigation.getParam("services");
        let service = reservedServices.find(({id}) => id == i)
        return this.state.isServiceOptionsVisible ?
            <ServiceOptions cancel={this._setServiceOptionsVisibleFalse} service={service}
                            setService={this.setReservedServices}/> : null;
    }

    render() {
        let services = this.props.navigation.getParam('services');
        console.log("int top render");
        console.log(services)
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between', padding: 10}}>
                <View>
                    <View style={{height: height / 2.5}}>
                        <ScrollView contentContainerStyle={{alignItems: 'center'}}
                                    showsHorizontalScrollIndicator={false}>
                            {this._renderModal()}
                            {
                                services.map((item, index) => {
                                    return (
                                        <ServiceRow key={index} service={item}
                                                    delete={this._onDeleteBtnPress}
                                                    edit={this._onEditBtnPress}/>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>

                    <View style={[styles.itemContainer, {
                        height: height / 8, flexDirection: 'row-reverse', borderTopWidth: 1,
                        borderTopColor: 'rgba(0,0,0,0.26)'
                    }]}>
                        <Image
                            source={require('../../assets/png/edit.png')}
                            style={styles.icon}
                        />
                        <TextInput
                            style={styles.txt_input}
                            placeholder='ایجاد یادداشت برای پرسنل و آرایشگاه موردنظر'
                            autoCapitalize='words'
                            onChangeText={(note) => this.setState({note})}
                            value={this.state.note}/>

                    </View>
                </View>
                <TouchableOpacity style={styles.pay_btn}
                                  onPress={() => this.props.navigation.navigate('FinalizeReserve', {
                                      wholePrice: this._calculateWholePrice(),
                                  })}>
                    <Text style={styles.btn_pay_txt}>پرداخت و ثبت</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export class ServiceRow extends React.Component {
    constructor() {
        super();
        this.state = {
            service: '',
        }
    }

    render() {
        let service = this.props.service;
        let m = moment(Moment(service.startDate).format('YYYY/MM/jDD'), 'YYYY/MM/DD')
        m.add(-1, 'day')
        let date = m.format('jYYYY/jMM/jDD')

        console.log("render service: ")
        console.log(service)
        return (
            <View style={styles.itemContainer}>
                <Image
                    source={require('../../assets/png/brownHairGirl.png')}
                    style={{width: 70, height: 70, borderRadius: 50, marginRight: 5}}
                />
                <View>
                    <Text
                        style={styles.itemText}>{"" + service.name + " - " + date + "\nساعت - " + service.time}</Text>
                    <Text style={styles.itemText}>پرسنل مورد نظر:‌ {service.personnelName} </Text>
                </View>
                <View>
                    <View style={{flexDirection: 'row-reverse'}}>
                        <TouchableOpacity onPress={() => this.props.edit(service.id)} style={{marginLeft: 15}}>
                            <Image
                                source={require('../../assets/png/edit.png')}
                                style={styles.icon}

                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.delete(service)}>
                            <Image
                                source={require('../../assets/png/bin.png')}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={[styles.itemText, {marginTop: 5}]}>{service.price} تومان </Text>

                </View>
            </View>
        )
    }
}

const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
    itemContainer: {
        width: width,
        height: height / 8,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        alignContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.26)',
        justifyContent: 'space-around',
    },
    itemText: {
        fontSize: 14,
        fontFamily: 'IRANSansFaNum',
        textAlign: 'center',
        color: 'rgba(0,0,0,0.5)',
    },
    itemImage: {
        width: width / 3,
        height: height / 8,
        margin: 6,
        borderRadius: 10,
        overflow: 'hidden'
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
    timeItem: {
        width: width / 4.5,
        height: height / 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    timeItemWhenFocused: {
        backgroundColor: '#A537FD4D'
    },
    personnelImage: {
        width: width / 7,
        height: width / 7,
        borderRadius: 50
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: '#e6b618',
    },
    txt_input: {
        fontFamily: 'IRANSansFaNum',
        height: 40,
        width: width / 1.2,
        textAlign: 'right',
        writingDirection: 'rtl',
        paddingRight: 10,
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
        marginTop: 20,
    },
    iconStyle: {}
})
