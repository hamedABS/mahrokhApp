import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView} from 'react-native';

export default class Support extends React.Component {
    static navigationOptions = ({navigation}) => {
        let headerBackImage = <Image source={require('../../assets/png/left.png')}
                                     style={{width: 20, height: 20}}
        />;
        let headerTitle = <Text style={{
            textAlign: 'center',
            fontFamily: 'IRANSansWeb',
            width:width,
            fontSize: 16
        }}>پشتیبانی</Text>
        let rightBtn = <TouchableOpacity>
            <Image
                source={require('../../assets/png/call.png')}
                style={{width: 25, height: 25, marginRight: 10, tintColor: '#C8992E'}}/>
        </TouchableOpacity>
        return {
            headerBackImage: () => {
                return headerBackImage
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
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <Image
                    source={require('../../assets/png/Group-2102.png')}
                    style={{width: width / 2, height: width / 2}}
                />
                <TouchableOpacity style={styles.everyItem} onPress={()=> this.props.navigation.navigate('AboutApp')}>
                    <Image
                        source={require('../../assets/png/wallet.png')}
                        style={styles.icon}/>
                    <Text style={styles.txt}>درباره ماهرخ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.everyItem}>
                    <Image
                        source={require('../../assets/png/document.png')}
                        style={styles.icon}/>
                    <Text style={styles.txt}>تماس با ماهرخ</Text>
                </TouchableOpacity>
                <View style={styles.everyItem}>
                    <Image
                        source={require('../../assets/png/edit.png')}
                        style={styles.icon}/>
                    <Text style={styles.txt}>گزارش مشکل</Text>
                </View>
                <View style={styles.everyItem}>
                    <Image
                        source={require('../../assets/png/share.png')}
                        style={styles.icon}/>
                    <Text style={styles.txt}>معرفی به دوستان</Text>
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

