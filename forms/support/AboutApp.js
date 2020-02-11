import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View,ScrollView} from 'react-native';

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
                <View style={{height: height / 2, alignItems: 'center', marginTop: 40, padding: 20}}>
                    <ScrollView>
                        <Text style={{fontFamily: 'IRANSansWebMedium', fontSize: 16, alignSelf: 'flex-end', margin: 5}}>بروزترین سامانه رزرو آنلاین خدمات زیبایی مطابق با سلیقه شما</Text>
                        <Text style={{fontFamily: 'IRANSansWebLight', fontSize: 13}}>
                            با ماهرخ سالن زیبایی مد نظرتان را در هر نقطه از شهر خود بیابید، به راحتی در هر ساعت از شبانه روز زمان مناسب خود را رزرو کنید و در وقت خود صرفه جویی کنید . با دریافت اپلیکیشن ماهرخ از این خدمات بهره مند شوید.</Text>

                        <Text style={{fontFamily: 'IRANSansWebMedium', fontSize: 16, alignSelf: 'flex-end', margin: 5}}>امکان مقایسه خدمات و قیمت سالن ها جهت سهولت در انتخاب </Text>
                        <Text style={{fontFamily: 'IRANSansWebLight', fontSize: 13}}>در این قسمت با رجوع به صفحه اصلی سالن ها از خدمات، قیمت ها و نمونه کارهای سالن ها دیدن فرمایید و با دیدن نظرات مشتریان و قیاس با دیگر سالن ها انتخابی مطمئن و هوشمندانه داشته باشید و در هر زمان سریع و راحت خدمت مورد نظر خود را رزرو کنید.</Text>

                        <Text style={{fontFamily: 'IRANSansWebMedium', fontSize: 16, alignSelf: 'flex-end', margin: 5}}>از خبرهای داغ آموزشی و آرایشی دنیا جا نمونید</Text>
                        <Text style={{fontFamily: 'IRANSansWebLight', fontSize: 13}}>ماهرخ سعی بر آن دارد که همیشه اولین خبرهای جدید و بروز در دنیای مد آرایش و زیبایی را در اختیار شما کاربران عزیز قرار دهد. در بلاگ ماهرخ شما می توانید بسیاری از آموزشهای زیبایی و مراقبتی را بطور کاملا رایگان دریافت کنید و همیشه در این زمینه بروز باشید.</Text>

                        <Text style={{fontFamily: 'IRANSansWebMedium', fontSize: 16, alignSelf: 'flex-end', margin: 5}}>پیدا کردن سالن زیبایی در کمترین زمان ممکن</Text>
                        <Text style={{fontFamily: 'IRANSansWebLight', fontSize: 13}}>همواره یکی از دغدغه های خانم ها پیدا کردن سالن زیبایی خوب و مطمئن نزدیک به محل سکونت است. با ماهرخ شما می توانید در کمترین زمان ممکن سالن مورد نظر خود را پیدا کنید و با استفاده از لوکیشن و مسیریابی از مکان دقیق سالن و انتخاب بهترین مسیر جهت رسیدن به سالن بهرهمند گردید</Text>
                    </ScrollView>
                </View>

                <View style={{height: height / 5.5, width: width, alignItems: 'center',marginTop:10}}>
                    <Image
                        source={require('../../assets/png/Logo_new.png')}
                        style={{width: width / 5, height: width / 5}}
                    />
                    <Text style={styles.txt}>version 0.0.1</Text>
                </View>
                <View>
                    <Text style={[styles.txt,{alignSelf:'center',margin:10}]}>با ما در ارتباط باشید</Text>
                    <View style={{height: height / 10, justifyContent: 'center', flexDirection: 'row-reverse'}}>
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
        width: 40,
        height: 40,
        marginRight: 10,
        marginLeft: 7,
    },
    txt: {
        fontSize: 16,
        fontFamily: 'IRANSansFaNum',
        color: '#323232'
    }
})

