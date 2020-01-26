import React from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import StarRating from "react-native-star-rating";

export default class SalonsList extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: () => <Search data={navigation}/>,
        }
    }

    constructor() {
        super();
        this.state = {
            salonImageSource: require('../../assets/png/brownHairGirl.png')
        }
    }

    _onSalonPress = () => {
        this.props.navigation.navigate('Salon')
    }

    _returnStars = (score) => {
        let stars = [];
        for (let i = 0; i < score; i++) {
            stars.push(<Image key={i} source={require('../../assets/png/star3x_gold.png')}
                              style={styles.star}/>)
        }
        for (let i = score; i < 5; i++) {
            stars.push(<Image key={i} source={require('../../assets/png/star3x.png')}
                              style={styles.star}/>)
        }
        return stars;
    }

    render() {
        return (
            <ScrollView>
                {
                    salonsMock.map((salon, index) => {
                        /*      this.setState({
                                  salonImageSource: require(salon.imageSource)
                              })*/
                        return (
                            <TouchableOpacity key={index} style={styles.salonItem} onPress={this._onSalonPress}>
                                <Image
                                    source={require('../../assets/png/jhfjhg.png')}
                                    style={styles.salonImage}
                                />
                                <View style={{
                                    flexDirection: 'row-reverse',
                                    justifyContent: 'space-between',
                                    width: width
                                }}>
                                    <View style={{width: width / 2, height: height / 8, margin: 15}}>
                                        <Text style={styles.titlesBaseStyle}>{salon.name}</Text>
                                        <Text style={[styles.titlesBaseStyle, {fontSize: 15}]}>{salon.address}</Text>
                                    </View>
                                    <View style={{margin: 10, width: width / 4, height: height / 16, marginLeft: 30}}>
                                        <View style={{flexDirection: 'row',}}>
                                            <StarRating
                                                disabled={true}
                                                starSize={13}
                                                emptyStarColor='#707070'
                                                fullStarColor='#FAC917'
                                                maxStars={5}
                                                rating={salon.score}
                                            />
                                        </View>
                                        <Text style={{
                                            alignSelf: 'flex-start',
                                            fontSize: 10,
                                            fontFamily: 'IRANSansFaNum',
                                            color: '#00000099'
                                        }}>{salon.commentCount} نظر </Text>
                                    </View>
                                </View>

                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        )
    }
}

class Search extends React.Component {

    render() {
        let navigation = this.props.data;
        return (
            <View style={{flexDirection: 'row-reverse', width: width, alignItems: 'center', height: height / 12}}>
                <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
                    <Image
                        source={require('../../assets/png/filter.png')}
                        style={styles.headerIcon}/>
                </TouchableOpacity>
                <Image
                    source={require('../../assets/png/placeholder3x.png')}
                    style={styles.headerIcon}/>

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
                            style={{padding: 2, width: width / 2, fontFamily: 'IRANSansFaNum'}}
                            placeholder='جستجوی سالن'/>
                    </View>
                </View>
            </View>

        )
    }
}


const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
    salonItem: {
        width: width,
        height: height / 3,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.4)',
        alignItems: 'center',
        marginTop: 20
    },
    salonImage: {
        width: width / 1.1,
        height: height / 5,
        borderRadius: 10,
    },
    star: {
        width: 15,
        height: 15,
    },
    titlesBaseStyle: {
        fontSize: 22,
        fontFamily: 'IRANSansFaNum',
        marginRight: 15,
        color: '#00000099',
    },
    headerIcon: {
        width: 18,
        height: 24,
        marginRight: 20
    },
    filterWrapper: {
        width: width / 1.3,
        height: height / 12,
        alignItems: 'center',
    },
    filter: {
        width: width / 1.5,
        marginTop: 12,
        backgroundColor: '#00000008',
        borderColor: '#70707033',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row-reverse'
    },
});

const salonsMock = [
    {
        id: 1,
        name: 'کایزن',
        address: 'زعفرانیه - مقدس اردبیلی',
        imageSource: "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg",
        score: 4,
        commentCount: 30
    },
    {
        id: 2,
        name: 'افشار',
        address: 'زعفرانیه - مقدس اردبیلی',
        imageSource: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
        score: 3,
        commentCount: 30
    },
    {
        id: 3,
        name: 'شریعتی',
        address: 'شریعتی -جنب مقدس اردبیلی',
        imageSource: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
        score: 5,
        commentCount: 30
    },
    {
        id: 4,
        name: 'شریعتی',
        address: 'شریعتی -جنب مقدس اردبیلی',
        imageSource: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
        score: 5,
        commentCount: 30
    },
    {
        id: 5,
        name: 'میرداماد',
        address: 'نزدیک شریعتی خیابان میرداماد',
        imageSource: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
        score: 2,
        commentCount: 30
    }
]
