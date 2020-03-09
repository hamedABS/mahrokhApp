import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, Linking} from 'react-native';

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
        let phoneNumber = '09178187580' ;
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <Image
                    source={require('../../assets/png/logo.png')}
                    style={{width: width / 2, height: width / 2}}
                />
                <TouchableOpacity style={styles.everyItem} onPress={()=> this.props.navigation.navigate('AboutApp')}>
                    <Image
                        source={require('../../assets/png/info.png')}
                        style={styles.icon}/>
                    <Text style={styles.txt}>درباره ماهرخ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.everyItem} onPress={()=>Linking.openURL(`tel:${phoneNumber}`)}>
                    <Image
                        source={require('../../assets/png/call.png')}
                        style={styles.icon}/>
                    <Text style={styles.txt}>تماس با ماهرخ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.everyItem} onPress={()=>Linking.openURL(`tel:${phoneNumber}`)}>
                    <Image
                        source={require('../../assets/png/edit.png')}
                        style={styles.icon}/>
                    <Text style={styles.txt}>گزارش مشکل</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.everyItem} onPress={() => this.props.navigation.navigate('FAQ')}>
                    <Image
                        source={require('../../assets/png/Group-94.png')}
                        style={styles.icon}/>
                    <Text style={styles.txt}>سوالات متداول</Text>
                </TouchableOpacity>
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
        tintColor: '#B08C3E'
    },
    txt: {
        fontSize: 16,
        fontFamily: 'IRANSansFaNum',
        color: '#323232'
    }
})

