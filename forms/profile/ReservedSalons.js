import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView} from 'react-native';


export default class ReservedSalons extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <View style={{
                    width: width,
                    height: height / 2.5,
                    borderBottomColor: 'rgba(0,0,0,0.46)',
                    borderBottomWidth: 1,
                    paddingBottom: 20
                }}>
                    <ScrollView contentContainerStyle={{alignItems: 'center'}}
                                style={{width: width, height: height / 2.5}}>
                        {
                            mockData.map((item, index) => {
                                return <SalonReservedItem key={index} data={item} btnText={1}
                                                          parentProps={this.props}/>
                            })
                        }
                        <View style={{height: 10, width: width}}></View>
                    </ScrollView>
                </View>
                <Text style={[styles.itemText, {fontSize: 18, marginTop: 5}]}>انجام شده</Text>
                <ScrollView contentContainerStyle={{alignItems: 'center'}}
                            style={{width: width, height: height / 3,}}>

                    {
                        mockData.map((item, index) => {
                            return <SalonReservedItem key={index} data={item} btnText={2}
                                                      parentProps={this.props}/>
                        })
                    }
                    <View style={{height: 5}}></View>
                </ScrollView>
            </View>
        )
    }
}


export class SalonReservedItem extends React.Component {

    render() {
        let data = [this.props.data];
        let btnText = this.props.btnText;
        let parentProps = this.props.parentProps;
        return (
            data.map((item, i) => {
                return (
                    <TouchableOpacity key={i} style={styles.itemContainer}
                                      onPress={() => parentProps.navigation.navigate('ReserveDetails')}>
                        <Image
                            source={require('../../assets/png/salon1.png')}
                            style={styles.itemImage}/>
                        <View>
                            <Text style={styles.itemText}>{item.salonName}</Text>
                            <Text style={styles.itemText}>{item.service}</Text>
                            <Text style={styles.itemText}>{item.date}</Text>
                        </View>
                        <TouchableOpacity style={styles.details}
                                          onPress={() => btnText == 1 ? parentProps.navigation.navigate('ReserveDetails') :
                                              parentProps.navigation.navigate('Survey')}>
                            <Text style={[styles.itemText, {textAlign: 'center'}]}>{btnText == 1 ? 'جزییات' : 'نظرسنجی'}</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                )
            })
        )
    }
}

const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row-reverse',
        width: width / 1.15,
        height: height / 7,
        borderRadius: 7,
        backgroundColor: 'white',
        marginTop: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    itemText: {
        fontSize: 12,
        fontFamily: 'IRANSansFaNum',
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
    }
})

const mockData = [
    {
        id: 1,
        salonName: 'سالن کایزن',
        service: 'کاشت ناخن',
        salonImageSource: '../../assets/png/salon1.png',
        date: '۱۲ شهریور ساعت ۱۰ صبح'
    },
    {
        id: 2,
        salonName: 'سالن کایزن',
        service: 'کاشت ناخن',
        salonImageSource: '../../assets/png/salon1.png',
        date: '۱۲ شهریور ساعت ۱۰ صبح'
    }, {
        id: 3,
        salonName: 'سالن کایزن',
        service: 'کاشت ناخن',
        salonImageSource: '../../assets/png/salon1.png',
        date: '۱۲ شهریور ساعت ۱۰ صبح'
    },
    {
        id: 43,
        salonName: 'سالن کایزن',
        service: 'کاشت ناخن',
        salonImageSource: '../../assets/png/salon1.png',
        date: '۱۲ شهریور ساعت ۱۰ صبح'
    },
    {
        id: 43,
        salonName: 'سالن کایزن',
        service: 'کاشت ناخن',
        salonImageSource: '../../assets/png/salon1.png',
        date: '۱۲ شهریور ساعت ۱۰ صبح'
    },
]
