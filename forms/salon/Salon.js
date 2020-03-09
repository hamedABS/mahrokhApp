import React from 'react';
import StarRating from 'react-native-star-rating'
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import Swiper from "react-native-web-swiper";
import SalonService from "./sub_form/SalonService";
import WorkSample from "./sub_form/WorkSample";
import Comments from "./sub_form/Comments";
import ImageView from 'react-native-image-view';


export default class Salon extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "service",
            likedSalon: false,
            serviceReservedCount: 0,
            focusedStatuses: [false, false, false, false, false, false],
            isImageViewVisible: false,
            currentImage: 0
        }
    }
    static navigationOptions = {
        headerShown: false,
    };


    render() {
        let emptyHeart = require('../../assets/png/emptyHeart.png');
        let filledHeart = require('../../assets/png/heartRedGold.png')
        return (
            <View>
                <View style={styles.header}>
                    <View style={{
                        position: 'absolute',
                        flexDirection: 'row',
                        zIndex: 1,
                        justifyContent: 'space-between',
                        width: width,
                        marginTop: 40,
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

                        <TouchableOpacity style={styles.topBtn}
                                          onPress={() => this.setState({likedSalon: !this.state.likedSalon})}>
                            <Image
                                source={this.state.likedSalon ? filledHeart : emptyHeart}
                                style={styles.heart}
                            />
                        </TouchableOpacity>
                    </View>
                    <Swiper style={styles.header}
                            controlsProps={{
                                dotsTouchable: true,
                                nextTitle: '',
                                prevTitle: '',
                            }}
                            loop={true}
                            timeout={5}>
                        <TouchableWithoutFeedback
                            onPress={() => this.setState({isImageViewVisible: true, currentImage: 0})}>
                            <Image style={styles.slider_image}
                                   source={{uri: 'https://www.aroos.co/wp-content/uploads/2018/07/beauty-salon.jpg'}}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                            onPress={() => this.setState({isImageViewVisible: true, currentImage: 1})}>
                            <Image style={styles.slider_image}
                                   source={{uri: "https://www.curiouslyconscious.com/wp-content/uploads/2018/02/Le-Fix-Natural-Beauty-Bar.jpg"}}/>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                            onPress={() => this.setState({isImageViewVisible: true, currentImage: 2})}>
                            <Image style={styles.slider_image}
                                   source={{uri: "https://i2.wp.com/c2.staticflickr.com/9/8860/28279022265_b668e80d24_o.jpg"}}/>
                        </TouchableWithoutFeedback>
                    </Swiper>
                </View>
                <View style={{borderBottomWidth: 1, borderBottomColor: '#00000029'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 5}}>
                            <StarRating
                                disabled={false}
                                starSize={14}
                                emptyStarColor='#707070'
                                fullStarColor='#e6b618'
                                maxStars={5}
                                rating={5}
                                selectedStar={(rating) => this.onStarRatingPress(rating)}
                            />
                        </View>
                        <Text style={{
                            fontSize: 22,
                            fontFamily: 'IRANSansFaNum',
                            margin: 7,
                            marginRight: 15,
                            color: '#00000099'
                        }}>کایزن</Text>
                    </View>
                    <TouchableOpacity onPress={() => this._addressButtonPressed()}>
                        <View style={{flexDirection: 'row-reverse'}}>
                            <Text style={{
                                fontSize: 18,
                                fontFamily: 'IRANSansFaNum',
                                marginRight: 15,
                                color: '#00000099'
                            }}>زعفرانیه
                                - مقدس اردبیلی-کوچه رضایی-پ2</Text>
                            <Image
                                source={require('../../assets/png/left.png')}
                                style={{width: 20, height: 20, marginTop: 5}}/>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.optionsContainer}>
                    <TouchableOpacity onPress={() => this._optionsButtonPressed("service")} style={
                        this.state.name == "service" ? styles.chooseOptionFocused : styles.chooseOptionNotFocused
                    }>
                        <View>
                            <Text
                                style={this.state.name == "service" ? styles.optionsTextFocused : styles.optionsTextNoFocused}>خدمات</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._optionsButtonPressed("sample")} style={
                        this.state.name == "sample" ? styles.chooseOptionFocused : styles.chooseOptionNotFocused
                    }>
                        <View>
                            <Text
                                style={this.state.name == "sample" ? styles.optionsTextFocused : styles.optionsTextNoFocused}>نمونه
                                کارها</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._optionsButtonPressed("comment")} style={
                        this.state.name == "comment" ? styles.chooseOptionFocused : styles.chooseOptionNotFocused
                    }>
                        <View>
                            <Text
                                style={this.state.name == "comment" ? styles.optionsTextFocused : styles.optionsTextNoFocused}>نظرات</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {this._renderSubClasses()}
                {this._renderImageView()}
            </View>
        );
    }

    _optionsButtonPressed = (data) => {
        this.setState({
            name: data
        })
    }

    _addressButtonPressed = () => {
        this.props.navigation.navigate('SalonInfo');
    }

    _renderSubClasses = () => {
        switch (this.state.name) {
            case"comment":
                return <Comments/>

            case"sample":
                return <WorkSample/>
            default:
                return <SalonService data={this.props}/>
        }
    }
        _renderImageView() {
            return <ImageView
                images={images}
                imageIndex={0}
                isVisible={this.state.isImageViewVisible}
                onCancel={() => this.setState({isImageViewVisible: false})}
                onClose={() => this.setState({isImageViewVisible: false})}
                imageIndex={this.state.currentImage}
            />
        }

}
const {width, height} = Dimensions.get("window");

const images = [
    {
        source: {
            uri: "https://www.aroos.co/wp-content/uploads/2018/07/beauty-salon.jpg"
        },
        width: width,
        height: height / 1.5

    }, {
        source: {
            uri: "https://www.curiouslyconscious.com/wp-content/uploads/2018/02/Le-Fix-Natural-Beauty-Bar.jpg"
        },
        width: width,
        height: height / 1.5
    }, {
        source: {
            uri: "https://i2.wp.com/c2.staticflickr.com/9/8860/28279022265_b668e80d24_o.jpg"
        },
        width: width,
        height: height / 1.5
    },
];

const slides = [
    {
        key: 'page 1',
        image: require('../../assets/png/jhfjhg.png'),
    },
    {
        key: 'page 2',
        image: require('../../assets/png/jhfjhg.png'),

    },
    {
        key: 'page 3',
        image: require('../../assets/png/jhfjhg.png'),
    },
]

const styles = StyleSheet.create({
    header: {
        width: width,
        height: height / 4,
    },
    backBtn: {
        height: 25,
        width: 25,
        marginLeft: 25,
        backgroundColor: 'white',
        borderRadius: 50,
    },
    topBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 26,
        height: 25,
        width: 25,
        backgroundColor: 'white',
        borderRadius: 50,
    },
    footer: {},
    slider_image: {
        height: height / 3,
        width: width,
    },
    optionsContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#00000029',
        height: height / 10,
        backgroundColor: '#fcfcfc'
    },
    chooseOptionFocused: {
        width: width / 3.6,
        height: 30,
        backgroundColor: '#e6b618',
        borderRadius: 25,
    },
    chooseOptionNotFocused: {
        width: width / 3,
        height: 30,
        backgroundColor: '#fcfcfc',
        borderRadius: 10,
    },
    optionsTextNoFocused: {
        fontSize: 14,
        fontFamily: 'IRANSansFaNum',
        textAlign: 'center'
    },

    optionsTextFocused: {
        fontSize: 14,
        fontFamily: 'IRANSansFaNum',
        textAlign: 'center',
        color: 'white'
    },

    heart: {
        backgroundColor: 'transparent',
        width: 15,
        height: 12.8,
        margin: 4.5,
        marginTop: 5.5,
    }
});
