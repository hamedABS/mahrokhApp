import React from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import ServiceOptions from "./ServiceOptions";
import {Service} from "./Service";

export default class SalonService extends React.Component {

    constructor() {
        super();
        this.setReservedServices = this.setReservedServices.bind(this)
        this._setServiceOptionsVisibleFalse = this._setServiceOptionsVisibleFalse.bind(this)
        this._setReservedServicesAndRelatedStates = this._setReservedServicesAndRelatedStates.bind(this);

        let tmp = services.map((value, index) => {
            return new Service(index, value.name, null, null, null, value.price, value.serviceTime)
        })

        this.state = {
            serviceReservedCount: 0,
            chosenServices: [false, false, false, false, false, false],
            reservedServices: [],
            toBeReserved: tmp,
            isServiceOptionsVisible: false,
            focusedService: ''
        }
    }

    _onAddBtnPress = (i, item) => {
        this.setState({
            isServiceOptionsVisible: true,
            focusedService: i
        })
    }

    _setServiceOptionsVisibleFalse = () => {
        this.setState({
            isServiceOptionsVisible: false
        })
    }


    _setReservedServicesAndRelatedStates = (reservedServices) => {
        try {
            console.log("hey i'm fired");
            console.log(reservedServices)
            let chosenServices = [false, false, false, false, false, false];
            for (let i = 0; i < reservedServices.length; i++) {
                let service = reservedServices[i];
                console.log("in for")
                console.log(service)
                chosenServices[service.id] = true
            }
            console.log(chosenServices)

            this.setState({
                reservedServices: reservedServices,
                serviceReservedCount: reservedServices.length,
                chosenServices: chosenServices,
            })
        } catch (e) {
            console.log("fuck")
            console.log(e.stack)
        }
    }


    setReservedServices = (service) => {
        let tmp = this.state.reservedServices;
        console.log("///////////")
        console.log(service)
        console.log("length: " + this.state.reservedServices.length)
        let index = tmp.findIndex(item => item.id == service.id)
        console.log(index)

        if (index >= 0) {
            console.log("contains")
            tmp[index] = service;
        } else {
            tmp.push(service)
        }


        this._setReservedServicesAndRelatedStates(tmp)
        this._setServiceOptionsVisibleFalse()
        console.log(this.state.reservedServices)
        console.log("///////////")
    }

    _renderModal() {
        let i = this.state.focusedService;
        let service = this.state.reservedServices.find(({id}) => id == i)
        if (service == null) {
            service = this.state.toBeReserved[i];
        }
        // console.log(service)

        return this.state.isServiceOptionsVisible ?
            <ServiceOptions cancel={this._setServiceOptionsVisibleFalse} service={service}
                            setService={this.setReservedServices}/> : null;
    }

    _navigateToPage = () => {
        let parentProps = this.props.data;
        if (this.state.serviceReservedCount != 0){
            parentProps.navigation.navigate('ReserveNew', {
                services: this.state.reservedServices,
                updateParentStates: (reservedServices) => this._setReservedServicesAndRelatedStates(reservedServices)
            })
        }
    }

    render() {
        let plus = require('../../../assets/png/plus.png');
        let checked = require('../../../assets/png/checked.png')
        return (
            <View style={styles.container}>
                {this._renderModal()}
                {
                    this.state.toBeReserved.map((item, i) => {
                        console.log(item)
                        return (
                            <View key={i} style={styles.serviceItem}>
                                <Text style={styles.serviceText}>{item.name}</Text>
                                <View style={{
                                    flexDirection: 'row-reverse',
                                    alignContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <View style={{marginLeft: 20}}>
                                        <Text style={{
                                            fontSize: 14,
                                            fontFamily: 'IRANSansFaNum',
                                            color: 'rgba(0,0,0,0.5)'
                                        }}>{item.price} تومان </Text>
                                        <Text style={{
                                            fontSize: 14,
                                            fontFamily: 'IRANSansFaNum',
                                            color: 'rgba(0,0,0,0.5)'
                                        }}>{item.serviceTime} دقیقه </Text>
                                    </View>
                                    <TouchableOpacity onPress={() => this._onAddBtnPress(i, item)}>
                                        <Image source={this.state.chosenServices[i] ? checked : plus}
                                               style={this.state.chosenServices[i] ? styles.plus : [styles.plus, {opacity: 0.5}]}
                                        />
                                    </TouchableOpacity>
                                </View>

                            </View>
                        )
                    })
                }
                <TouchableOpacity onPress={() => this._navigateToPage()}>
                    <View style={{
                        padding: 5,
                        backgroundColor: '#e6b618',
                        borderRadius: 25,
                        marginTop: 15,
                        alignItems: 'center',
                        alignContent: 'center'
                    }}>
                        <Text style={{
                            color: 'white',
                            fontFamily: 'IRANSansFaNum',
                            textAlign: 'center',
                        }}>{this.state.serviceReservedCount} خدمت آماده رزرو</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const services = [
    {
        name: 'کاشت ناخن',
        price: 50000,
        serviceTime: '90'
    },
    {
        name: 'کلوپ',
        price: 50000,
        serviceTime: '45'
    },
    {
        name: 'کرلی',
        price: 60000,
        serviceTime: '60'
    },
    {
        name: 'رنگ شیشه',
        price: 60000,
        serviceTime: '45'
    },
    {
        name: 'بافت',
        price: 100000,
        serviceTime: '90'
    }]


const {width, height} = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height / 4,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    serviceItem: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "90%",
        height: height / 12,
        borderBottomColor: '#70707080',
        borderBottomWidth: 0.75,
    },
    serviceText: {
        fontSize: 16,
        fontFamily: 'IRANSansFaNum',
        margin: 5
    },
    plus: {
        width: 23,
        height: 23,
    }
})
