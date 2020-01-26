import React from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default class SalonService extends React.Component {

    constructor() {
        super();
        this.state = {
            serviceReservedCount: 0,
            focusedStatuses: [false, false, false, false, false, false],
            reservedServices: []
        }
    }

    _onPress = (i, item) => {
        let tmp = this.state.focusedStatuses;
        let count = this.state.serviceReservedCount;
        tmp[i] = !this.state.focusedStatuses[i]
        this.state.focusedStatuses[i] ? count++ : count--
        this.setState({
            focusedStatuses: tmp,
            serviceReservedCount: count
        })
        this.state.reservedServices.push(item)
    }

    render() {
        let parentProps = this.props.data;
        return (
            <View style={styles.container}>
                {
                    services.map((item, i) => {
                        return (
                            <View key={i} style={styles.serviceItem}>
                                <Text style={styles.serviceText}>{item.name}</Text>
                                <TouchableOpacity onPress={() => this._onPress(i, item)}>
                                    <Image source={require('../../assets/png/plus.png')}
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
                        padding:5,
                        backgroundColor: '#ddac17',
                        borderRadius: 25,
                        marginTop: 15,
                        alignItems:'center',
                        alignContent:'center'
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


