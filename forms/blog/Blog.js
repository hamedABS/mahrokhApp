import React from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';


export default class Blog extends React.Component{


    render() {
        return(


            <ScrollView>

            </ScrollView>
        )
    }
}




const mockData = [
    {
        id:1,
        imageSource:'',
        title:'چگونه پوستی جذاب داشته باشیم؟',
        likeCount:'250',
        publishedDate:'دهم شهریور',
        isSaved:true
    },{
        id:2,
        imageSource:'',
        title:'چگونه مویی جذاب داشته باشیم؟',
        likeCount:'',
        publishedDate:'یازدهم شهریور',
        isSaved:true
    },{
        id:3,
        imageSource:'',
        title:'من حیث المجموع چگونه جذاب باشیم؟',
        likeCount:'200',
        publishedDate:'',
        isSaved:true
    }, {
        id: 4,
        imageSource: '',
        title: 'اصن چرا باید جذاب باشیم؟؟',
        likeCount: '100',
        publishedDate: 'بیست مهر',
        isSaved: true
    },
]
