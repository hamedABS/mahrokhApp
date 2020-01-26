import React from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class BlogList extends React.Component {
    _onPress = ()=>{
        let navigation = this.props.data;
        navigation.navigate('BlogArticle')
    }
    render() {
        return (
            <ScrollView contentContainerStyle={{alignItems: 'center'}}>
                {
                    mockData.map((data, index) => {
                        return (
                            <TouchableOpacity key={index} style={styles.blogItem} onPress = {this._onPress}>
                                <Image
                                    source={data.imageSource}
                                    style={styles.blogImage}
                                />
                                <View style={{
                                    flexDirection: 'row-reverse',
                                    justifyContent: 'space-between',
                                    marginTop: 10
                                }}>
                                    <Image
                                        source={require('../../assets/png/tag-(1).png')}
                                        style={{width: 15, height: 20}}/>
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
                                        source={require('../../assets/png/heart.png')}
                                        style={{width: 16, height: 14, marginTop: 5, tintColor:'#ddac17'}}/>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
                <View style={{width: width, height: height / 10}}>
                </View>
            </ScrollView>
        )
    }
}

const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
    blogItem: {
        flex: 1,
        width: width / 1.1,
        height: height / 2.5,
        marginTop: 8,
        borderBottomColor: 'rgba(0,0,0,0.4)',
        borderBottomWidth: 1
    },
    blogImage: {
        width: width / 1.1,
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
        isSaved: true
    }, {
        id: 2,
        imageSource: require('../../assets/png/brownHairGirl.png'),
        title: 'چگونه مویی جذاب داشته باشیم؟',
        likeCount: '167',
        publishedDate: 'یازدهم شهریور',
        isSaved: true
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
        isSaved: true
    },
]