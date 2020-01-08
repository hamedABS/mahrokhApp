import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import BlogList from "./BlogList";
import BlogArticle from "./BlogArticle";
import SalonIntroList from "./SalonIntroList";


export default class Blog extends React.Component {
    static navigationOptions = {
        headerTitle: () => <Search/>
    }

    constructor() {
        super();
        this.state = {
            focusedSortType: 'theNewest'
        }
    }

    _onSortTypePress = (focusedSortType) => {
        this.setState({
            focusedSortType: focusedSortType
        })
    }
    _selectSortType = () => {
        switch (this.state.focusedSortType) {
            case "theNewest":
                return <BlogList data={this.props.navigation}/>
            case "theHottest":
                return <BlogList data={this.props.navigation}/>
            case "salonIntro":
                return <SalonIntroList data={this.props.navigation}/>;
            case "theNews":
                return <BlogList data={this.props.navigation}/>
        }
    }

    render() {
        return (
            <View>
                <View style={styles.blogSortType}>
                    <TouchableOpacity onPress={() => {
                        return this._onSortTypePress('theNewest')
                    }}
                                      style={[styles.blogSortTypeViewTxt, this.state.focusedSortType == 'theNewest' ? styles.blogSortTypeViewTxtOnFocused : null]}>
                        <Text style={[styles.sortTypeTxt]}>جدید ترین</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        return this._onSortTypePress('theHottest')
                    }}
                                      style={[styles.blogSortTypeViewTxt, this.state.focusedSortType == 'theHottest' ? styles.blogSortTypeViewTxtOnFocused : null]}>
                        <Text style={styles.sortTypeTxt}>داغ ترین</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        return this._onSortTypePress('salonIntro')
                    }}
                                      style={[styles.blogSortTypeViewTxt, this.state.focusedSortType == 'salonIntro' ? styles.blogSortTypeViewTxtOnFocused : null]}>
                        <Text style={styles.sortTypeTxt}>معرفی سالن</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        return this._onSortTypePress('theNews')
                    }}
                                      style={[styles.blogSortTypeViewTxt, this.state.focusedSortType == 'theNews' ? styles.blogSortTypeViewTxtOnFocused : null]}>
                        <Text style={styles.sortTypeTxt}>اخبار</Text>
                    </TouchableOpacity>
                </View>
                {
                    this._selectSortType()
                }
            </View>


        )
    }
}


class Search extends React.Component {

    render() {
        return (
            <View style={{flexDirection: 'row-reverse', width: width, alignItems: 'center', height: height / 12}}>
                <Image
                    source={require('../../assets/png/filter.png')}
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
                            placeholder='جستجوی مطالب'/>
                    </View>
                </View>
            </View>

        )
    }
}

const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
    blogSortType: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: width,
        height: height / 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: 'white',
        marginTop: 15
    },
    sortTypeTxt: {
        fontFamily: 'IRANSansFaNum',
        fontSize: 16,
        color: 'rgba(0,0,0,0.4)',
        textAlign: 'center',
    },
    blogSortTypeViewTxt: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: "100%",
        alignItems: 'center',
        width: width / 5,
    },
    blogSortTypeViewTxtOnFocused: {
        borderBottomWidth: 2,
        borderBottomColor: '#A537FD',
    },
    filterWrapper: {
        width: width / 1.3,
        height: height / 12,
        alignItems: 'center',
    },
    headerIcon: {
        width: 18,
        height: 24,
        marginRight: 20
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
})


const mockData = [
    {
        id: 1,
        imageSource: '',
        title: 'چگونه پوستی جذاب داشته باشیم؟',
        likeCount: '250',
        publishedDate: 'دهم شهریور',
        isSaved: true
    }, {
        id: 2,
        imageSource: '',
        title: 'چگونه مویی جذاب داشته باشیم؟',
        likeCount: '',
        publishedDate: 'یازدهم شهریور',
        isSaved: true
    }, {
        id: 3,
        imageSource: '',
        title: 'من حیث المجموع چگونه جذاب باشیم؟',
        likeCount: '200',
        publishedDate: '',
        isSaved: true
    }, {
        id: 4,
        imageSource: '',
        title: 'اصن چرا باید جذاب باشیم؟؟',
        likeCount: '100',
        publishedDate: 'بیست مهر',
        isSaved: true
    },
]
