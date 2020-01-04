import React from 'react';
import {
    Dimensions,
    Image,
    ImageBackground,
    Linking,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native';

export default class Home extends React.Component {
    static navigationOptions = {
        headerTitle: () => <LogoTitle/>
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.filterWrapper}>
                        <View style={styles.filter}>
                            <Image
                                source={require('../../assets/png/search.png')}
                                style={{
                                    width: 15,
                                    height: 15,
                                    tintColor: '#0000004C',
                                    marginRight: 30,
                                    marginLeft: 5,
                                    margin: 10
                                }}
                            />
                            <TextInput
                                style={{padding: 2, width: width / 2.5, fontFamily: 'IRANSansFaNum'}}
                                placeholder='دنبال چه چیزی هستید؟'/>
                        </View>
                    </View>
                    <View style={styles.discountSlider}>
                        <ScrollView horizontal>
                            <DiscountTile/>
                            <DiscountTile/>
                        </ScrollView>
                    </View>
                    <View style={styles.bestSalonsSlider}>
                        <Text style={{margin: 5, marginBottom: 10, marginTop: 0, fontFamily: 'IRANSansWeb'}}>برترین سالن
                            ها</Text>
                        <ScrollView horizontal>
                            <SalonTile data={this.props}/>
                            <SalonTile data={this.props}/>
                            <SalonTile data={this.props}/>
                            <SalonTile data={this.props}/>
                            <SalonTile data={this.props}/>
                            <SalonTile data={this.props}/>
                        </ScrollView>
                    </View>
                    <View style={styles.aroundSalonsSlider}>
                        <Text style={{margin: 5, marginBottom: 10, fontFamily: 'IRANSansWeb'}}>سالن های اطراف من</Text>
                        <ScrollView horizontal>
                            <AroundSalonTile data={this.props}/>
                            <AroundSalonTile data={this.props}/>
                            <AroundSalonTile data={this.props}/>
                        </ScrollView>
                    </View>
                    <View style={styles.bePrettyBlogSlider}>
                        <Text style={{marginRight: 20, fontFamily: 'IRANSansWeb'}}>بلاگ زیبا شو</Text>
                        <ScrollView horizontal>
                            <Blog/>
                            <Blog/>
                            <Blog/>
                            <Blog/>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        )
    }
}


class LogoTitle extends React.Component {
    render() {
        return (
            <View style={styles.headerLogo}>
                <View></View>
                <Image
                    source={require('../../assets/png/Group-2102.png')}
                    style={{width: 60, height: 60}}
                />
                <TouchableHighlight style={{paddingRight: 10}}>
                    <View>
                        <Image
                            source={require('../../assets/png/calendar.png')}
                            style={{width: 30, height: 35}}
                        />
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

class DiscountTile extends React.Component {
    _onPressButton = () => {
        let url = "https://varzesh3.com";
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
                            style={{textAlign: 'center', marginTop: 5, marginLeft: 8, fontFamily: 'IRANSansFaNum'}}>تخفیف
                            ویژه کایزن</Text>
                        <Image source={require('../../assets/png/right.png')}
                               style={{width: 20, height: 15, marginTop: 7}}/>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

class SalonTile extends React.Component {

    _onPress = () => {
        let parentProps = this.props.data;
        parentProps.navigation.navigate('Salon')
    }

    render() {
        return (
            <TouchableHighlight onPress={this._onPress}>
                <Image
                    source={require('../../assets/png/salon1.png')}
                    style={{
                        width: 75,
                        height: 75,
                        margin: 6,
                        borderRadius: 50,
                        overflow: 'hidden'
                    }}
                />
            </TouchableHighlight>
        );
    }
}

class AroundSalonTile extends React.Component {

    _onPress = () => {
        let parentProps = this.props.data;
        parentProps.navigation.navigate('Salon')
    }

    render() {
        return (
            <TouchableHighlight onPress={this._onPress} style={{marginRight: 10, marginLeft: 10}}>
                <View style={styles.aroundSalonsSliderTile}>
                    <Image
                        source={require('../../assets/png/salon1.png')}
                        style={{
                            width: '100%',
                            height: '60%',
                            overflow: 'hidden'
                        }}
                    />
                    <View>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={require('../../assets/png/star3x_gold.png')} style={styles.star}/>
                            <Image source={require('../../assets/png/star3x_gold.png')} style={styles.star}/>
                            <Image source={require('../../assets/png/star3x_gold.png')} style={styles.star}/>
                            <Image source={require('../../assets/png/star3x_gold.png')} style={styles.star}/>
                            <Image source={require('../../assets/png/star3x.png')} style={styles.star}/>
                        </View>
                        <Text style={{fontSize: 5, alignSelf: 'flex-start', fontFamily: 'IRANSansFaNum'}}>۳۰ نظر</Text>
                        <Text style={{fontSize: 14, fontFamily: 'IRANSansFaNum', color: '#00000099'}}> کایزن</Text>
                        <Text style={{fontSize: 9, marginRight: 5, fontFamily: 'IRANSansFaNum', color: '#00000099'}}>زعفرانیه
                            مقدس اردبیلی</Text>
                        <View style={{alignSelf: 'flex-start', flexDirection: 'row', width: 50, height: 26}}>
                            <Image
                                source={require('../../assets/png/heart2x.png')}
                                style={{
                                    width: 14,
                                    height: 12,
                                    marginLeft: 8,
                                }}
                            />
                            <Text style={{
                                fontSize: 12,
                                marginBottom: 10,
                                marginLeft: 3,
                                alignSelf: 'flex-end',
                                fontFamily: 'IRANSansFaNum'
                            }}>250</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

class Blog extends React.Component {
    _onPressButton = () => {
        let url = "https://varzesh3.com";
        //Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    }

    render() {
        return (
            <ImageBackground
                source={require('../../assets/png/brownHairGirl.png')}
                style={{
                    width: width / 2,
                    height: height / 6,
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
                            style={{textAlign: 'center', marginTop: 5, marginLeft: 5, fontSize: 8}}>سشوار حرفه ای</Text>
                        <Image source={require('../../assets/png/right.png')}
                               style={{width: 15, height: 10, marginTop: 7}}/>

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
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between'
    },
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    filterWrapper: {
        width: width,
        height: height / 12,
        // backgroundColor: 'pink',
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
        //backgroundColor: 'red'
    },
    linkInDiscount: {
        width: 130,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 20,
        margin: 47,
        marginRight: 5,
        flexDirection: 'row'
    },
    bestSalonsSlider: {
        width: width,
        height: height / 5,
        marginTop: 20,
        // backgroundColor: 'cyan'
    },
    aroundSalonsSlider: {
        width: width,
        height: height / 2.8,
        // backgroundColor: 'pink'

    },
    aroundSalonsSliderTile: {
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5,
        borderColor: '#00000029',
        borderWidth: 1,
        width: width / 2.7,
        height: '100%',
        backgroundColor: 'white',
        shadowOffset: {
            height: 100,
            width: 100
        },
        shadowOpacity: 1.0,
        shadowColor: '#000000'
    },
    bePrettyBlogSlider: {
        width: width,
        height: height / 4,
        // backgroundColor: 'red'
    },
    star: {
        width: 8,
        height: 8,
        // tintColor:'#FAC917',
    },

    blogTouchable: {
        width: width / 6,
        height: height / 30,
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom: 10,
        margin: 5,
        flexDirection: 'row'
        // marginRight: 25
    }
});
