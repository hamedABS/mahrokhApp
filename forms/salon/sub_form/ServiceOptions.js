import React from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ScrollView,
} from 'react-native';

import Modal from 'react-native-modal';
import Moment from 'moment';
import moment from 'moment-jalali';
import {Service} from './Service'
import PersianCalendarPicker from "react-native-persian-calendar-picker";


export default class ServiceOptions extends React.Component {

    constructor() {
        super();
        this.state = {
            selectedReservedTime: '',
            selectedStartDate: 'تاریخ را انتخاب کنید.',
            selectedPersonnel: '',
            service: {},
            propsLoaded: false
        }

        console.log("hey from there");
    }

    onDateChange(date) {
        console.log("date changing ");
        let m = moment(Moment(date).format('YYYY/MM/jDD'), 'YYYY/MM/DD')
        m.add(1, 'day')
        let service = this.state.service;
        service.startDate = m;
        this.setState({
            selectedStartDate: m,
        });
    }

    _selectedReservedTime = (number) => {
        let service = this.state.service;
        service.time = number;
        this.setState({
            selectedReservedTime: number,
            service: service
        })
    }

    _selectPersonnel = (personnel) => {
        console.log("personnel setting")
        let service = this.state.service;
        service.personnelName = personnel;
        this.setState({
            selectedPersonnel: personnel,
        })
    }
    _renderWhenPersonnelSelected = () => {
        console.log("personnel renderring");
        if (this.state.selectedPersonnel === '') {
            return (
                <TouchableOpacity style={{
                    zIndex: 1,
                    position: 'absolute',
                    width: width,
                    height: height / 1.5,
                    backgroundColor: 'rgba(255,255,255,0.69)',
                    opacity: 0.9,
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignContent: 'center',
                    marginTop: 125
                }}>
                    <View>
                        <Text style={styles.titlesBaseStyle}>ابتدا پرسنل را مشخص کنید</Text>
                    </View>
                </TouchableOpacity>
            )
        }

    }
    _confirmPress = () => {
        let service = this.state.service;
        service.startDate = this.state.selectedStartDate;
        service.time = this.state.selectedReservedTime;
        service.personnelName = this.state.selectedPersonnel;
        console.log(service)

        this.props.setService(service)
    }

    componentDidMount() {
        let service = this.props.service;
        console.log(service)
        if (service != null) {
            service = new Service(service.id, service.name, service.startDate, service.time, service.personnelName, service.price)
            this.setState({
                selectedReservedTime: service.time != null ? service.time : '',
                selectedStartDate: service.startDate != null ? service.startDate : 'تاریخ را انتخاب کنید.',
                selectedPersonnel: service.personnelName != null ? service.personnelName : '',
                service: service,
                propsLoaded: true
            })
        }
    }

    render() {
        let times = ['10:00', '10:15', '10:30', '13:30', '13:45', '15:00', '15:15', '15:30', '18:00', '18:15', '18:30'];
        let personnel = ['پریسا رضایی', 'پریسیما رضایی', 'سیما رضایی', 'اسماء رضایی', 'سما رضایی']
        times = times.reverse();
        console.log(this.state.propsLoaded)
        if (this.state.propsLoaded) {
            return (
                <Modal isVisible={true} style={{flexDirection: 'row'}}>
                    <View style={{
                        backgroundColor: 'white',
                        alignItems: 'center',
                        alignSelf: 'flex-end',
                        width: width,
                        height: height / 1.2,
                        borderTopEndRadius: 25,
                        borderTopStartRadius: 25,
                        marginBottom: -20
                    }}>
                        <View style={[styles.itemContainer, {padding: 10, height: height / 5}]}>
                            <View style={{width: width, flexDirection: 'row-reverse', justifyContent: 'space-around'}}>
                                <Text style={[styles.itemText, {marginRight: 75}]}>پرسنل مورد نظر را انتخاب کنید.</Text>
                                <TouchableOpacity
                                    onPress={this.props.cancel}
                                    style={{marginRight: 30, marginTop: 5}}>
                                    <Image
                                        source={require('../../../assets/png/cancel.png')}
                                        style={{
                                            width: 35,
                                            height: 35,
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <ScrollView horizontal
                                        style={{backgroundColor: 'rgba(0,0,0,0.1)', width: width / 1.5, borderRadius: 5}}
                                        showsHorizontalScrollIndicator={false}
                                        contentContainerStyle={{alignItems: 'center'}}>
                                {personnel.map((item, index) => {
                                    return (
                                        <TouchableOpacity
                                            style={styles.personnelTile} key={index} onPress={() => this._selectPersonnel(item)}>
                                            <Image
                                                source={require('../../../assets/png/brownHairGirl.png')}
                                                style={[styles.personnelImage, this.state.selectedPersonnel != item ? {opacity: 0.5} : null]}
                                            />
                                            <Text style={[styles.titlesBaseStyle, {fontSize: 12}]}>{item}</Text>
                                        </TouchableOpacity>
                                    )
                                })}
                            </ScrollView>

                        </View>
                        <View style={[styles.itemContainer, {marginTop: 5, height: height / 2.3}]}>
                            <View style={{height: height / 2.5}}>
                                <Text style={styles.itemText}>تاریخ و زمان خود را انتخاب کنید.</Text>
                                <PersianCalendarPicker
                                    style={{opacity: 0.5}}
                                    enableDateChange={true}
                                    selectedStartDate={this.state.service.startDate}
                                    selectedDayColor='#e6b618'
                                    isRTL={true}
                                    onDateChange={(date) => this.onDateChange(date)}
                                    width={350}
                                />
                            </View>
                        </View>
                        <View style={[styles.itemContainer, {padding: 10, height: height / 10}]}>
                            <ScrollView horizontal
                                        showsHorizontalScrollIndicator={false}
                                        contentContainerStyle={{alignItems: 'center'}}>
                                {times.map((number, index) => {
                                    return (
                                        <TouchableOpacity key={index}
                                                          onPress={() => this._selectedReservedTime(number)}
                                                          style={this.state.selectedReservedTime == number ? [styles.timeItem, styles.timeItemWhenFocused] : styles.timeItem}>
                                            <Text styles={styles.itemText}>{number}</Text>
                                        </TouchableOpacity>
                                    )
                                })}
                            </ScrollView>
                        </View>

                        <TouchableOpacity style={styles.confirm}
                                          onPress={() => this._confirmPress()}>
                            <Text style={{
                                color: 'white',
                                fontFamily: 'IRANSansFaNum',
                                textAlign: 'center',
                            }}>ثبت رزرو</Text>
                        </TouchableOpacity>

                        {this._renderWhenPersonnelSelected()}
                    </View>
                </Modal>
            )
        } else {
            return null;
        }

    }
}

const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
    itemContainer: {
        width: width,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.26)',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    confirm: {
        padding: 5,
        backgroundColor: '#B08C3E',
        borderRadius: 15,
        marginTop: 15,
        width: width / 3,
        alignItems: 'center',
        alignContent: 'center'
    },
    itemText: {
        fontSize: 16,
        fontFamily: 'IRANSansFaNum',
        textAlign: 'center',
        color: 'rgba(0,0,0,0.79)',
        marginBottom: 5,
    },
    timeItem: {
        width: width / 5,
        height: height / 18,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    timeItemWhenFocused: {
        backgroundColor: '#B08C3E'
    },
    personnelTile: {
        marginTop: 2,
        marginBottom: 2,
        alignItems: 'center',
    },
    personnelImage: {
        width: width / 6.7,
        height: width / 6.7,
        borderRadius: 50,
    },
    titlesBaseStyle: {
        fontSize: 20,
        fontFamily: 'IRANSansFaNum',
        marginRight: 15,
        color: 'black',
    }
})
