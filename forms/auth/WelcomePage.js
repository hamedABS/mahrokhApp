import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions, TouchableHighlight} from 'react-native';

export default class WelcomePage extends Component {

    static navigationOptions = {
        headerShown: false,
    };

    constructor() {
        super()
        console.log("some thing happenning!!!!")
    }

    _onRegisterPressButton = () => {
        this.props.navigation.navigate('RegisterPage');
    }

    _onLoginButtonPress = () => {
        this.props.navigation.navigate('Login');
    }

    render() {
        console.log("rendering... ")
        var image = require('../../assets/png/Logo_new.png')
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={image}
                />
                <TouchableHighlight onPress={this._onRegisterPressButton} underlayColor="white">
                    <View style={styles.btn_register}>
                        <Text style={styles.btn_register_txt}>ثبت نام</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._onLoginButtonPress} underlayColor="white">
                    <View style={styles.btn_login}>
                        <Text style={styles.btn_login_txt}>وارد شوید</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
        console.log("rendred ...")
    }
}

const {width, height} = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        height: height,
        width,
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    title_text: {
        fontSize: width / 15,
        fontWeight: 'bold',
        padding: 30,
        paddingBottom: 10
    },
    main_text: {
        fontSize: width / 20,
        paddingLeft: 10,
        paddingRight: 10
    },
    image: {
        padding: 5,
        marginTop: height / 7,
        height: height / 2.7,
        width: width / 1.6
    },
    btn_register: {
        margin: 15,
        width: width / 2,
        height: height / 13,
        alignItems: 'center',
        alignContent:'center',
        backgroundColor: '#ddac17',
        borderRadius: 50,
    },
    btn_register_txt: {
        fontSize: width / 15,
        textAlign: 'center',
        marginTop: 5,
        color: 'white',
        fontFamily: 'IRANSansWeb'
    },
    btn_login: {
        width: width / 2,
        height: height / 13,
        alignItems: 'center',
        borderRadius: 50,
    },
    btn_login_txt: {
        fontSize: width / 17,
        textAlign: 'center',
        padding: 8,
        color: 'black',
        fontFamily:'IRANSansWeb'
    }
});
