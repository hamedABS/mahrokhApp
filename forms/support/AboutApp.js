import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView} from 'react-native';


export default class AboutApp extends React.Component {
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
            }}>درباره ماهرخ</Text>
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

            <View style={{flex: 1, justifyContent: 'space-around'}}>
                <View style={{height: height / 2.5, alignItems: 'center', marginTop: 30, padding: 20}}>
                    <Text style={{fontFamily: 'IRANSansWebMedium', fontSize: 16, alignSelf: 'flex-end'}}>درباره
                        ماهرخ</Text>
                    <Text style={{fontFamily: 'IRANSansWebLight', fontSize: 13, marginTop: 15}}>لورم ایپسوم متن ساختگی
                        با تولید سادگی
                        نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
                        ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                        ابزارهای کاربردی می باشد</Text>
                </View>
                <View style={{height: height / 3, width: width, alignItems: 'center'}}>
                    <Image
                        source={require('../../assets/png/Group-2102.png')}
                        style={{width: width / 4, height: width / 4}}
                    />
                    <Text style={styles.txt}>version 0.0.1</Text>
                </View>
                <View style={{marginTop:20}}>
                    <Text style={[styles.txt,{alignSelf:'center', margin:20}]}>با ما در ارتباط باشید</Text>
                    <View style={{height: height / 3, justifyContent: 'center', flexDirection: 'row-reverse'}}>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/png/youtube.png')}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/png/whatsapp.png')}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/png/instagram.png')}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </View>
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
        width: 50,
        height: 50,
        marginRight: 10,
        marginLeft: 7,
    },
    txt: {
        fontSize: 16,
        fontFamily: 'IRANSansFaNum',
        color: '#323232'
    }
})

