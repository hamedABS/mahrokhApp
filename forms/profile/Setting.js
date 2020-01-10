import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView} from 'react-native';


export default class Setting extends React.Component {
    static navigationOptions = ({navigation}) => {
        let headerBackImage = <Image source={require('../../assets/png/left.png')}
                                     style={{width: 20, height: 20}}
        />;
        let headerTitle =
            <Text style={{
                textAlign: 'center',
                fontFamily: 'IRANSansWeb',
                width: width / 1.4,
                fontSize: 16
            }}>تنظیمات</Text>
        return {
            headerBackImage: () => {
                return headerBackImage
            },
            headerTitle: () => {
                return headerTitle
            },
        };
    };

    render() {
        return (

            <View style={{flex: 1, justifyContent: 'space-between'}}>
                <View style={{flex: 1, alignItems: 'center', marginTop: 30}}>
                    <TouchableOpacity style={styles.everyItem}
                                      onPress={() => this.props.navigation.navigate('ChangePasswordPage')}>
                        <Image
                            source={require('../../assets/png/locked.png')}
                            style={styles.icon}/>
                        <Text style={styles.txt}>تغییر گذر واژه</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.everyItem}
                                      onPress={() => this.props.navigation.navigate('AboutApp')}>
                        <Image
                            source={require('../../assets/png/AJ.png')}
                            style={styles.icon}/>
                        <Text style={styles.txt}>درباره ماهرخ</Text>
                    </TouchableOpacity>
                    <View style={styles.everyItem}>
                        <Image
                            source={require('../../assets/png/call.png')}
                            style={styles.icon}/>
                        <Text style={styles.txt}>تماس با ما</Text>
                    </View>
                    <TouchableOpacity style={styles.everyItem} onPress={() => this.props.navigation.navigate('FAQ')}>
                        <Image
                            source={require('../../assets/png/Group-94.png')}
                            style={styles.icon}/>
                        <Text style={styles.txt}>سوالات متداول</Text>
                    </TouchableOpacity>
                    <View style={styles.everyItem}>
                        <Image
                            source={require('../../assets/png/exit.png')}
                            style={styles.icon}/>
                        <Text style={styles.txt}>خروج از برنامه</Text>
                    </View>
                </View>
                <View style={{width: width, marginBottom: 10, alignItems: 'center'}}>
                    <Image
                        source={require('../../assets/png/Group-2102.png')}
                        style={{width: width / 4, height: width / 4}}
                    />
                    <Text style={styles.txt}>version 0.0.1</Text>
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
        marginLeft: 7,
        tintColor: 'rgba(0,0,0,0.26)'
    },
    txt: {
        fontSize: 16,
        fontFamily: 'IRANSansFaNum',
        color: '#323232'
    }
})

