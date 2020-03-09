import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView} from 'react-native';
import {Video} from "expo-av";

export default class BlogArticle extends React.Component {
    static navigationOptions = {
        headerShown: false,
    };

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'space-between'}}>
                <View style={styles.headerTitle}>
                    <View style={{
                        position: 'absolute',
                        flexDirection: 'row',
                        zIndex: 1,
                        justifyContent: 'space-between',
                        width: width,
                        marginTop: 35,
                    }}>
                        <TouchableOpacity style={styles.backBtn} onPress={() => this.props.navigation.goBack()}>
                            <Image
                                source={require('../../assets/png/left.png')}
                                style={{
                                    backgroundColor: 'transparent',
                                    width: 20,
                                    height: 15,
                                    margin: 5,
                                    marginLeft: 2
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <Video
                        source={{uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="cover"
                        shouldPlay={true}
                        isLooping={false}
                        style={styles.blogImage}
                    />
                    <View style={styles.title}>
                        <Text style={{
                            fontSize: 16,
                            fontFamily: 'IRANSansFaNum',
                            color: '#323232'
                        }}>چگونه پوستی جذاب داشته باشیم؟</Text>
                        <Image
                            source={require('../../assets/png/bookmark.png')}
                            style={{width: 10, height: 20}}/>
                    </View>


                </View>
                <View style={{width: width, height: height / 2, paddingRight: 10, paddingLeft: 15}}>
                    <Text style={{
                        fontFamily: 'IRANSansFaNum',
                        fontSize: 14,
                        color: '#323232',
                        textAlign: 'right'
                    }}>
                        پروتئین های سالم و مواد مغذی میوه ها و سبزیجات به داشتن پوستی درخشان کمک می کنند.این مواد را
                        به
                        رژیم غذایی تان اضافه کنید تا نتایج را به سرعت مشاهده کنید: اسید های چرب امگا ۳.این ماده در
                        ماهی
                        و گردو پیدا میشود و مخصوصا برای پوستتان مفید است. ویتامین C.این ماده به بهبود جوش ها کمک
                        میکند
                        پس خوردن چند وعده مرکبات و اسفناج در روز سودمند است. غذاهای غنی از فیبر.سبزیجات تازه،آجیل و
                        میوه
                        های فرآوری نشده به تعادل،نظم و کُند نبودن دستگاه گوارش کمک می کنند.اگر در روز یکبار یا بیشتر
                        دفع
                        مدفوع نداشته باشید،ممکن است به نظر خسته و مریض(سردرد و مشکلات معدوی) بیایید پروتئین های سالم
                        و
                        مواد مغذی میوه ها و سبزیجات به داشتن پوستی درخشان کمک می کنند.این مواد را به رژیم غذایی تان
                        اضافه کنید تا نتایج را به سرعت مشاهده کنید: اسید های چرب امگا ۳.این ماده در ماهی و گردو پیدا
                        میشود و مخصوصا برای پوستتان مفید است. ویتامین C.این ماده به بهبود جوش ها کمک میکند پس خوردن
                        چند
                        وعده مرکبات و اسفناج در روز سودمند است.
                    </Text>
                </View>

                <View style={styles.footer}>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: 'IRANSansFaNum',
                        color: '#323232'
                    }}>مطلب بنظرتون مفید بود ؟</Text>
                    <Image
                        source={require('../../assets/png/heartRedGold.png')}
                        style={{width: 20, height: 16}}/>
                </View>
            </View>
        )
    }
}

const {width, height} = Dimensions.get("window");

const styles = StyleSheet.create({
    headerTitle: {
        width: width,
        height: height / 2.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: 'white',
    },
    title: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        marginTop: 15,
        alignItems: 'center',
    }, backBtn: {
        height: 25,
        width: 25,
        marginLeft: 10,
        backgroundColor: 'white',
        borderRadius: 50,
    },
    footer: {
        width: width / 1.2,
        height: height / 12,
        borderTopColor: '#70707080',
        borderTopWidth: 1.5,
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'flex-end',
        alignSelf: 'center'
    },
    blogImage: {
        width: width / 1.1,
        height: height / 4
    }
})
