import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView} from 'react-native';
import PersianCalendarPicker from 'react-native-persian-calendar-picker';
import Modal from 'react-native-modal';
import Moment from 'moment';
import moment from 'moment-jalali';


export default class ReserveDetails extends React.Component {

    constructor() {
        super();
        this.state = {
            selectedReservedTime: '',
            selectedStartDate: 'تاریخ را انتخاب کنید.',
            note: '',
            modalIsVisible: false,
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

    _selectedReservedTime = (number) => {
        this.setState({
            selectedReservedTime: number
        })
    }

    onDateChange(date) {
        let m = moment(Moment(date).format('YYYY/MM/jDD'), 'YYYY/MM/DD')
        date = m.format('jYYYY/jMM/jDD')
        this.setState({selectedStartDate: date});
    }

    render() {
        let times = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];
        let services = this.props.navigation.getParam('services');
        console.log(services)
        times = times.reverse();
        const {selectedStartDate} = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <View style={[styles.itemContainer, {height: height / 8}]}>
                    <TouchableOpacity
                        style={{flexDirection: 'row-reverse', alignContent: 'center', alignItems: 'center'}}
                        onPress={() => this.setState(this.setState({modalIsVisible: true}))}>
                        <Image
                            source={require('../../assets/png/scheduling.png')}
                            style={{
                                width: 30,
                                height: 30,
                                margin: 10,
                                alignSelf: 'flex-start'
                            }}/>

                        <Text style={{
                            fontFamily: 'IRANSansFaNum',
                            marginRight:10,
                            fontSize:14,
                            color:'rgba(0,0,0,0.9)'
                        }}> {this.state.selectedStartDate}</Text>
                    </TouchableOpacity>
                </View>
                <Modal isVisible={this.state.modalIsVisible}>
                    <View style={{
                        backgroundColor: 'white',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        alignSelf: 'center',
                        width: width / 1.1,
                        height: height / 2,
                        borderRadius: 25
                    }}>
                        <PersianCalendarPicker
                            isRTL={true}
                            onDateChange={(date) => this.onDateChange(date)}
                            width={300}
                        />
                        <TouchableOpacity onPress={() => this.setState({modalIsVisible: false})}>
                            <Text style={[styles.itemText, {fontSize: 18, color: 'green'}]}>تایید</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>

                <View style={[styles.itemContainer, {padding: 10, height: height / 5}]}>
                    <Text style={styles.itemText}>زمان خود را انتخاب کنید.</Text>
                    <ScrollView horizontal>
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
                <View style={[styles.itemContainer, {height: height / 5}]}>
                    <View style={{
                        flexDirection: 'row-reverse',
                        justifyContent: 'space-between',
                        alignContent: 'center',
                        alignItems: 'center',
                        width: width / 2,
                        height: '35%',
                        borderBottomWidth: 1,
                        borderBottomColor: 'rgba(0,0,0,0.4)'
                    }}>
                        <Text style={styles.itemText}>کرلی مو</Text>
                        <Text style={styles.itemText}>۵۰ هزار تومان</Text>
                    </View>
                    <View style={{
                        width: width,
                        height: '65%',
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        justifyContent: 'space-around'
                    }}>
                        <Image
                            source={require('../../assets/png/brownHairGirl.png')}
                            style={styles.personnelImage}
                        />
                        <Text style={[styles.itemText]}>پریسا رضایی</Text>
                        <TouchableOpacity style={styles.routingBtn}>
                            <Text style={[styles.itemText, {fontSize: 13}]}>ویرایش پرسنل</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.itemContainer, {height: height / 8, flexDirection: 'row-reverse'}]}>
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
                <View>
                    <TouchableOpacity style={styles.pay_btn}
                                      onPress={() => this.props.navigation.navigate('FinalizeReserve')}>
                        <Text style={styles.btn_pay_txt}>مرحله بعد</Text>
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
        fontSize: 16,
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
        tintColor: '#ddac17',
        margin: 10,
        alignSelf: 'flex-start'
    },
    txt_input: {
        fontFamily: 'IRANSansFaNum',
        height: 40,
        width: width / 1.2,
        textAlign: 'right',
        writingDirection: 'rtl',
        paddingRight: 10,
        alignSelf: 'flex-start'
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
        backgroundColor: '#ddac17',
        borderRadius: 50,
        marginTop: 20
    },
})
