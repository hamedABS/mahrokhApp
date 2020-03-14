import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View,KeyboardAvoidingView} from 'react-native';
import StarRating from 'react-native-star-rating'

export default class Survey extends React.Component {

    constructor() {
        super();
        this.state = {
            starCount: 0,
            questionItemIndex: '',
            isYesFocused_0: 'o',
            isYesFocused_1: 'o',
            isYesFocused_2: 'o',
            note: ''
        }
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    getStyle = (i, yesBtnRendering) => {
        if (i == 0) {
            if (this.state.isYesFocused_0 == 'o') {
                return (styles.yesNoBtn)
            }
            if (yesBtnRendering) {
                return (this.state.isYesFocused_0 ? [styles.yesNoBtn, {
                    backgroundColor: '#B08C3E',
                }] : [styles.yesNoBtn])
            } else {
                return (this.state.isYesFocused_0 ? [styles.yesNoBtn] : [styles.yesNoBtn, {
                    backgroundColor: '#B08C3E',
                }])
            }
        } else if (i == 1) {
            if (this.state.isYesFocused_1 === 'o') {
                return (styles.yesNoBtn)
            }
            if (yesBtnRendering) {
                return (this.state.isYesFocused_1 ? [styles.yesNoBtn, {
                    backgroundColor: '#B08C3E',
                }] : [styles.yesNoBtn])
            } else {
                return (this.state.isYesFocused_1 ? [styles.yesNoBtn] : [styles.yesNoBtn, {
                    backgroundColor: '#B08C3E',
                }])
            }
        } else if (i == 2) {
            if (this.state.isYesFocused_2 === 'o') {
                return (styles.yesNoBtn)
            }
            if (yesBtnRendering) {
                return (this.state.isYesFocused_2 ? [styles.yesNoBtn, {
                    backgroundColor: '#B08C3E',
                }] : [styles.yesNoBtn])
            } else {
                return (this.state.isYesFocused_2 ? [styles.yesNoBtn] : [styles.yesNoBtn, {
                    backgroundColor: '#B08C3E',
                }])
            }
        }

    }
    yesNoBtnPress = (i, isYes) => {
        if (i == 0) {
            this.setState({
                isYesFocused_0: isYes
            })
        } else if (i == 1) {
            this.setState({
                isYesFocused_1: isYes
            })
        } else if (i == 2) {
            this.setState({
                isYesFocused_2: isYes
            })
        }
    }

    render() {
        return (
            <KeyboardAvoidingView style={{flex: 1, alignItems: 'center'}}
                                  behavior={'position'}>
                <View style={[styles.itemContainer, {height: height / 4}]}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Salon')}>
                        <Image
                            source={require('../../assets/png/salon1.png')}
                            style={{width: width / 3, height: width / 3, borderRadius: 100}}
                        />
                    </TouchableOpacity>
                    <Text style={[styles.itemText, {fontSize: 18}]}>رزرو آرایشگاه کایزن</Text>
                </View>
                <View style={[styles.itemContainer, {
                    padding: 10,
                    marginTop: 25,
                    height: height / 3,
                    justifyContent: 'space-around',
                }]}>
                    {questions.map((item, i) => {
                        return (
                            <View key={i} style={styles.questionItem}>
                                <Text style={[styles.itemText, {fontSize: width / 28}]}>{item}</Text>
                                <View style={{flexDirection: 'row-reverse'}}>
                                    <TouchableOpacity
                                        onPress={() => this.yesNoBtnPress(i, true)}
                                        style={[this.getStyle(i, true), {marginLeft: 5}]}>
                                        <Text style={[styles.itemText, {fontSize: width / 25}]}>بله</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={this.getStyle(i, false)}
                                        onPress={() => this.yesNoBtnPress(i, false)}>
                                        <Text style={[styles.itemText, {fontSize: width / 25}]}>خیر</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })}
                    <View style={styles.questionItem}>
                        <Text style={[styles.itemText, {fontSize: width / 28}]}>میزان رضایت شما از آرایشگاه؟</Text>
                        <StarRating
                            disabled={false}
                            starSize={23}
                            emptyStarColor='#707070'
                            fullStarColor='#e6b618'
                            maxStars={5}
                            rating={this.state.starCount}
                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                        />
                    </View>
                </View>
                <View style={[styles.itemContainer, {height: height / 8, flexDirection: 'row-reverse'}]}>
                    <Image
                        source={require('../../assets/png/edit.png')}
                        style={styles.icon}
                    />
                    <TextInput
                        style={styles.txt_input}
                        placeholder='ایجاد یادداشت برای پرسنل و آرایشگاه موردنظر'
                        autoCapitalize='words'
                        onChangeText={(note) => this.setState({note})}
                        value={this.state.note}/>
                </View>
                <TouchableOpacity style={{marginTop: 15}} onPress={this._onPressButton}>
                    <View style={styles.btn}>
                        <Text style={styles.btn_save_txt}>ثبت نظر</Text>
                    </View>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        )
    }
}

const {width, height} = Dimensions.get("window");
const questions = ['از برخورد پرسنل راضی بودید ؟', 'کیفیت ارائه کار در سطح مطلوب بود؟', 'برای خدمات بعدی این آرایشگاه را \nانتخاب می کنید ؟']

const styles = StyleSheet.create({
    itemContainer: {
        width: width,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.26)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemText: {
        fontSize: 12,
        fontFamily: 'IRANSansFaNum',
        textAlign: 'center'
    },
    itemImage: {
        width: width / 3,
        height: height / 8,
        margin: 6,
        borderRadius: 10,
        overflow: 'hidden'
    },
    questionItem: {
        flexDirection: 'row-reverse',
        padding: 8,
        width: width,
        height: height / 6.5,
        justifyContent: 'space-between'
    },
    yesNoBtn: {
        width: 60,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#707070'
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: '#B08C3E',
        margin: 10,
        alignSelf: 'flex-start'
    },
    txt_input: {
        fontFamily: 'IRANSansFaNum',
        height: 40,
        width: width / 1.2,
        textAlign: 'right',
        writingDirection: 'rtl',
        paddingRight: 10,
        alignSelf: 'flex-start'
    },
    btn_save_txt: {
        fontFamily: 'IRANSansWeb',
        fontSize: 18,
        textAlign: 'center',
        padding: 8,
        color: 'white'
    },
    btn: {
        alignSelf:'center',
        width: width / 2,
        height: height / 13,
        alignItems: 'center',
        backgroundColor: '#B08C3E',
        borderRadius: 50,
    },
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
