import React from 'react';
import {
    Dimensions,
    Image,
    ImageBackground,
    Linking,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import StarRating from 'react-native-star-rating'
import Swiper from "react-native-web-swiper";

export default class Home extends React.Component {

    static navigationOptions = ({navigation}) => {
        let rightBtn =
            <TouchableOpacity onPress={() => navigation.navigate('ReservedSalons')}>
                <Image source={require('../../assets/png/list.png')}
                       style={{width: 26, height: 26, marginRight: 15, tintColor: '#B08C3E'}}/>
            </TouchableOpacity>

        let headerTitle =
            <Image
                source={require('../../assets/png/logo.png')}
                style={{width: 60, height: 60, alignSelf: 'center', marginLeft: width / 2.4}}
            />
        return {
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
            <View style={styles.container}>
                <ScrollView showsHorizontalScrollIndicator={false}>
                    <View style={styles.discountSlider}>
                        <Swiper style={styles.discountSlider}
                                controlsProps={{
                                    dotsTouchable: true,
                                    nextTitle: '',
                                    prevTitle: '',
                                }}
                                loop={true}
                                timeout={5}>
                            <DiscountTile/>
                            <DiscountTile/>
                        </Swiper>
                    </View>
                    <View style={styles.bestSalonsSlider}>
                        <Text style={{
                            margin: 5,
                            marginRight: 20,
                            marginTop: 0,
                            fontFamily: 'IRANSansWeb'
                        }}>برترین سالن
                            ها</Text>
                        <ScrollView horizontal
                                    showsHorizontalScrollIndicator={false}>
                            {
                                [1, 2, 3, 4, 5, 6].map(value => {
                                    return (
                                        <SalonTile key={value} data={this.props}/>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                    <View style={styles.aroundSalonsSlider}>
                        <Text style={{marginRight: 20, marginBottom: 10, fontFamily: 'IRANSansWeb'}}>سالن های
                            زیبایی</Text>
                        <ScrollView horizontal
                                    showsHorizontalScrollIndicator={false}>
                            {
                                [1, 2, 3, 4, 5, 6].map(value => {
                                    return (
                                        <AroundSalonTile key={value} data={this.props}/>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                    <View style={styles.blogSlider}>
                        <Text style={{marginRight: 20, marginTop: 10, fontFamily: 'IRANSansWeb'}}>بلاگ</Text>
                        <ScrollView horizontal
                                    showsHorizontalScrollIndicator={false}>
                            {
                                [1, 2, 3, 4, 5, 6].map(value => {
                                    return (
                                        <Blog key={value} data={this.props}/>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export class DiscountTile extends React.Component {
    _onPressButton = () => {
        let url = "https://mahrokhApp.ir";
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    }

    render() {
        return (
            <ImageBackground
                source={require('../../assets/jpg/makupThings.jpg')}
                style={{
                    width: width / 1.1,
                    height: '100%',
                    borderRadius: 10,
                    overflow: 'hidden',
                    marginLeft: 20,
                    marginRight: 15,
                    flexDirection: 'row-reverse'
                }}>
                <TouchableOpacity onPress={this._onPressButton}>
                    <View style={styles.linkInDiscount}>
                        <Text
                            style={{textAlign: 'center', fontFamily: 'IRANSansFaNum', marginLeft: 5}}>تخفیف
                            ویژه کایزن</Text>
                        <Image source={require('../../assets/png/right.png')}
                               style={{width: 20, height: 15, marginRight: 2}}/>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

export class SalonTile extends React.Component {

    _onPress = () => {
        let parentProps = this.props.data;
        parentProps.navigation.navigate('Salon')
    }

    render() {
        return (
            <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}} onPress={this._onPress}>
                <Image
                    source={require('../../assets/png/salon1.png')}
                    style={{
                        width: width / 3.8,
                        height: width / 3.8,
                        marginLeft: 5,
                        marginRight: 5,
                        borderRadius: 50,
                        overflow: 'hidden'
                    }}
                />
            </TouchableOpacity>
        );
    }
}

export class AroundSalonTile extends React.Component {

    _onPress = () => {
        let parentProps = this.props.data;
        parentProps.navigation.navigate('Salon')
    }

    render() {
        return (
            <TouchableOpacity onPress={this._onPress} style={{marginRight: 7, marginLeft: 7}}>
                <View style={styles.aroundSalonsSliderTile}>
                    <Image
                        source={require('../../assets/png/salon1.png')}
                        style={{
                            width: '100%',
                            height: '60%',
                            overflow: 'hidden'
                        }}
                    />
                    <View style={{marginBottom: 10, marginLeft: 8}}>
                        <View style={{flexDirection: 'row', marginTop: 2}}>
                            <StarRating
                                disabled={true}
                                starSize={13}
                                emptyStarColor='#707070'
                                fullStarColor='#FAC917'
                                maxStars={5}
                                rating={4}
                            />
                        </View>
                        <Text
                            style={{fontSize: 8, alignSelf: 'flex-start', fontFamily: 'IRANSansFaNum'}}>۳۰
                            نظر</Text>
                        <Text style={{fontSize: 14, fontFamily: 'IRANSansFaNum', color: '#00000099'}}> کایزن</Text>
                        <Text style={{fontSize: 9, marginRight: 5, fontFamily: 'IRANSansFaNum', color: '#00000099'}}>زعفرانیه
                            مقدس اردبیلی</Text>
                        <View style={{
                            alignSelf: 'flex-start',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 10
                        }}>
                            <Image
                                source={require('../../assets/png/heartRedGold.png')}
                                style={{
                                    width: 14,
                                    height: 12,
                                    marginBottom: 10
                                }}
                            />
                            <Text style={{
                                fontSize: 12,
                                marginLeft: 3, marginBottom: 10,
                                fontFamily: 'IRANSansFaNum'
                            }}>250</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export class Blog extends React.Component {
    _onPressButton = () => {
        let data = this.props.data;
        data.navigation.navigate('Blog')
    }

    render() {
        return (
            <ImageBackground
                source={require('../../assets/png/brownHairGirl.png')}
                style={{
                    width: width / 1.7,
                    height: height / 5.8,
                    borderRadius: 10,
                    overflow: 'hidden',
                    margin: 10,
                    marginRight: 10,
                    flexDirection: 'column-reverse',
                    alignItems: 'flex-end'
                }}>
                <TouchableOpacity onPress={this._onPressButton}>
                    <View style={styles.blogTouchable}>
                        <Text
                            style={{textAlign: 'center', fontSize: 8, fontFamily: 'IRANSansFaNum'}}>سشوار حرفه ای</Text>
                        <Image source={require('../../assets/png/right.png')}
                               style={{width: 15, height: 10}}/>

                    </View>
                </TouchableOpacity>

            </ImageBackground>
        )
    }
}

const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
    headerLogo: {
        flex: 1,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between'
    },
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    filterWrapper: {
        width: width,
        height: height / 12,
        alignItems: 'center',

    },
    filter: {
        width: width / 1.5,
        margin: 5,
        marginTop: 15,
        backgroundColor: '#00000008',
        borderColor: '#70707033',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row-reverse'
    },
    discountSlider: {
        width: width,
        height: height / 8,
        marginTop: 10
    },
    linkInDiscount: {
        height: 30,
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 20,
        margin: height / 8 - 40,
        alignSelf: 'flex-start',
        marginRight: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    bestSalonsSlider: {
        width: width,
        height: height / 5,
        marginTop: 20,
    },
    aroundSalonsSlider: {
        width: width,
        height: height / 2.8,
    },
    aroundSalonsSliderTile: {
        paddingBottom: 10,
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5,
        borderColor: '#00000029',
        borderWidth: 1,
        width: width / 2.3,
        height: '100%',
        backgroundColor: 'white',
        shadowOffset: {
            height: 100,
            width: 100
        },
        shadowOpacity: 1.0,
        shadowColor: '#000000'
    },
    blogSlider: {
        width: width,
        height: height / 4,
        marginTop: 10
    },
    star: {
        width: 10,
        height: 10,
    },

    blogTouchable: {
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom: 10,
        margin: 5,
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        padding: 5,
    }
});
