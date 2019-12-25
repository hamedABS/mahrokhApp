import React, { Component } from 'react';
//import * as Font from 'expo-font';
import {
    StyleSheet, Text, TextInput, View, Image,
    Dimensions, TouchableHighlight, CheckBox, KeyboardAvoidingView,
} from 'react-native';




export default class Login extends React.Component{
    static navigationOptions = {
        title:'ورود',
        headerTitleStyle: {
            textAlign: 'center',
            flexGrow:1,
            alignSelf:'center',
        },
    };
    constructor() {
        super()
        this.state = {
            phoneNumber: '',
            password: '',
            checked: false
        }
    }

    _onPressButton = ()=>{
        this.props.navigation.navigate('Tab');
    }


    render(){
        return(
            <KeyboardAvoidingView style={styles.containter}
                                  behavior="padding" enabled>
                <View style={styles.content}>
                    <View style={styles.txt_input_container}>
                        <Image
                            style={styles.txt_input_img}
                            source={require('../assets/png/telephone.png')}
                        />
                        <TextInput
                            style={styles.txt_input}
                            placeholder="شماره تلفن همراه"
                            keyboardType="phone-pad"
                            onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
                            value={this.state.phoneNumber} />

                    </View>
                    <View style={styles.txt_input_container}>
                        <Image
                            style={styles.txt_input_img}
                            source={require('../assets/png/locked.png')}
                        />
                        <TextInput
                            style={styles.txt_input}
                            placeholder='رمز عبور'
                            secureTextEntry={true}
                            autoCompleteType='off'
                            onChangeText={(password) => this.setState({ password })}
                            value={this.state.password} />

                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableHighlight onPress={this._onPressButton}>
                        <View style={styles.btn_login}>
                            <Text style={styles.btn_register_txt} >وارد شدن</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={styles.rules_chk}>
                        <Text style={styles.rules_txt}>رمز عبور را فراموش کردم</Text>
                    </View>

                </View>
            </KeyboardAvoidingView>
        );
    }
}

const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
    containter: {
        flex: 1,
        justifyContent: 'space-between',
    },
    content: {
        height: height / 3,
        justifyContent: 'space-around',
    },
    txt_input_container: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        paddingRight: width
    },

    txt_input: {
        //fontFamily:'MyAwesomeFont',
        height: 40,
        width: width,
        textAlign: 'right',
        writingDirection: 'rtl',
        paddingRight: width / 4
    },

    txt_input_img: {
        height: height / 21,
        width: width / 13,
        marginRight: width / 45
    },
    footer: {
        borderColor: 'grey',
        backgroundColor: '#E4DFE6',
        borderTopWidth: 1,
        height: height / 6,
        alignItems: 'center',

    },
    btn_register_txt: {
        fontSize: width / 18,
        textAlign: 'center',
        padding: 8,
        color: 'white'
    },
    btn_login: {
        margin: 10,
        width: width / 2,
        height: height / 13,
        alignItems: 'center',
        backgroundColor: '#A537FD',
        borderRadius: 50,
    },
    rules_chk: {
        flexDirection: 'row-reverse',
        width: width / 2,
        height: height / 13,
        justifyContent: 'center'
    },
    rules_txt: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 3
    }
});