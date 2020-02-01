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

        let tmp = services.map((value, index) => {
            return new Service(index, value.name)
        })

        this.state = {
            serviceReservedCount: 0,
            focusedStatuses: [false, false, false, false, false, false],
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

        let focusedStatuses = this.state.focusedStatuses;
        focusedStatuses[service.id] = true

        this.setState({
            reservedServices: tmp,
            serviceReservedCount: tmp.length,
            focusedStatuses:focusedStatuses,
            isServiceOptionsVisible: false,
        })
        console.log(this.state.reservedServices)
        console.log("///////////")
    }

    _renderModal() {
        let i = this.state.focusedService;
        let service = this.state.reservedServices.find(({id}) => id == i)
        if (service == null) {
            service = this.state.toBeReserved[i];
        }
        console.log(service)

        return this.state.isServiceOptionsVisible ?
            <ServiceOptions service={service}
                            setService={this.setReservedServices}/> : null;
    }

    render() {
        let parentProps = this.props.data;
        let plus = require('../../../assets/png/plus.png');
        let checked = require('../../../assets/png/checked.png')
        return (
            <View style={styles.container}>
                {this._renderModal()}
                {
                    this.state.toBeReserved.map((item, i) => {
                        return (
                            <View key={i} style={styles.serviceItem}>
                                <Text style={styles.serviceText}>{item.name}</Text>
                                <TouchableOpacity onPress={() => this._onAddBtnPress(i, item)}>
                                    <Image source={this.state.focusedStatuses[i] ? checked : plus}
                                           style={this.state.focusedStatuses[i] ? styles.plus : [styles.plus, {opacity: 0.5}]}
                                    />
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
                <TouchableOpacity style={{borderTopColor: '#70707080', borderTopWidth: 1}}
                                  onPress={() => parentProps.navigation.navigate('NewReserve', {services: this.state.reservedServices})}>
                    <View style={{
                        padding: 5,
                        backgroundColor: '#ddac17',
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
        price: 50
    },
    {
        name: 'کلوپ',
        price: 50
    },
    {
        name: 'کرلی',
        price: 60
    },
    {
        name: 'رنگ شیشه',
        price: 60
    },
    {
        name: 'بافت',
        price: 100
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
        width: 20,
        height: 20,
    }
})

