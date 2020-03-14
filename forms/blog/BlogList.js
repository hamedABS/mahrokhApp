import React from 'react';
import {Dimensions, Image, ScrollView, Share, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class BlogList extends React.Component {

    constructor() {
        super();
        let bookmarked = []
        mockData.forEach((item, index) => {
            bookmarked.push(item.isSaved)
        })
        this.state = {
            bookmarked: bookmarked
        }
    }

    render() {
        let blackBookmark = require('../../assets/png/bookmark_black.png')
        let goldBookmark = require('../../assets/png/bookmark.png')
        return (
            <View style={{width: width, height: height}}>
                <ScrollView contentContainerStyle={{alignItems: 'center',paddingBottom:100}}>
                    {
                        mockData.map((data, index) => {
                            return (
                                <TouchableOpacity key={index} style={styles.blogItem} onPress={this._onPress}>
                                    <Image
                                        source={data.imageSource}
                                        style={styles.blogImage}
                                    />

                                    <View style={{marginRight: 10}}>
                                        <View style={{
                                            flexDirection: 'row-reverse',
                                            marginTop: 10
                                        }}>

                                            <TouchableOpacity
                                                onPress={() => {
                                                    let tmp = this.state.bookmarked;
                                                    tmp[index] = !tmp[index];
                                                    this.setState({bookmarked: tmp})
                                                }}>
                                                <Image
                                                    source={this.state.bookmarked[index] ? goldBookmark : blackBookmark}
                                                    style={{width: 15, height: 20, marginLeft: 10}}/>
                                            </TouchableOpacity>

                                            <TouchableOpacity onPress={() => this._onShare()}>
                                                <Image source={require('../../assets/png/send.png')}
                                                       style={{width: 20, height: 20}}/>
                                            </TouchableOpacity>
                                        </View>
                                        <Text style={{
                                            fontSize: 16,
                                            fontFamily: 'IRANSansFaNum',
                                            color: '#323232'
                                        }}>{data.title}</Text>
                                        <View style={{flexDirection: 'row-reverse'}}>
                                            <Text style={{
                                                fontSize: 12,
                                                fontFamily: 'IRANSansFaNum',
                                                color: 'rgba(0,0,0,0.4)',
                                                marginLeft: 10
                                            }}>{data.publishedDate}</Text>
                                            <Text style={{
                                                marginLeft: 5,
                                                fontFamily: 'IRANSansFaNum',
                                                fontSize: 12,
                                                marginRight: 15,
                                                color: 'rgba(0,0,0,0.4)'
                                            }}>{data.likeCount}</Text>
                                            <Image
                                                source={require('../../assets/png/heartRedGold.png')}
                                                style={{width: 16, height: 14, marginTop: 5, tintColor: '#B08C3E'}}/>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                    <View style={{width: width, height: height / 8}}>
                    </View>
                </ScrollView>
            </View>

        )
    }

    _onPress = () => {
        let navigation = this.props.data;
        navigation.navigate('BlogArticle')
    }

    _onShare = async () => {
        try {
            await Share.share({
                message:
                    'www.mahrokh.ir',
            });
        } catch (error) {
            alert(error.message);
        }
    }
}

const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
    blogItem: {
        flex: 1,
        width: width - 10,
        height: height / 2.5,
        borderBottomColor: 'rgba(0,0,0,0.4)',
        borderBottomWidth: 1
    },
    blogImage: {
        width: width - 10,
        height: height / 4
    }
})
const mockData = [
    {
        id: 1,
        imageSource: require('../../assets/png/3553x.png'),
        title: 'چگونه پوستی جذاب داشته باشیم؟',
        likeCount: '250',
        publishedDate: 'دهم شهریور',
        isSaved: false
    }, {
        id: 2,
        imageSource: require('../../assets/png/brownHairGirl.png'),
        title: 'چگونه مویی جذاب داشته باشیم؟',
        likeCount: '167',
        publishedDate: 'یازدهم شهریور',
        isSaved: false
    }, {
        id: 3,
        imageSource: require('../../assets/png/5373x.png'),
        title: 'من حیث المجموع چگونه جذاب باشیم؟',
        likeCount: '200',
        publishedDate: 'بیست مهر',
        isSaved: true
    }, {
        id: 4,
        imageSource: require('../../assets/png/young-brunette-hair_2x.png'),
        title: 'اصن چرا باید جذاب باشیم؟؟',
        likeCount: '100',
        publishedDate: 'بیست مهر',
        isSaved: false
    },
]
