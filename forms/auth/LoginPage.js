import React, {Component} from 'react';
import {
    StyleSheet, Text, TextInput, View, Image,
    Dimensions, KeyboardAvoidingView, TouchableOpacity
} from 'react-native';
import authStyles from "./AuthStyles";


export default class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            phoneNumber: '',
            password: '',
            checked: false
        }
    }

    _onPressButton = () => {
        this.props.navigation.navigate('Tab');
    }

    render() {
        return (
            <KeyboardAvoidingView style={authStyles.container}
                                  behavior="padding" enabled>
                <View style={styles.content}>
                    <View style={styles.txt_input_container}>
                        <Image
                            style={authStyles.txt_input_img}
                            source={require('../../assets/png/telephone.png')}
                        />
                        <TextInput
                            style={authStyles.txt_input}
                            placeholder="شماره تلفن همراه"
                            keyboardType="phone-pad"
                            onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                            value={this.state.phoneNumber}/>

                    </View>
                    <View style={styles.txt_input_container}>
                        <Image
                            style={authStyles.txt_input_img}
                            source={require('../../assets/png/locked.png')}
                        />
                        <TextInput
                            style={authStyles.txt_input}
                            placeholder='رمز عبور'
                            secureTextEntry={true}
                            autoCompleteType='off'
                            onChangeText={(password) => this.setState({password})}
                            value={this.state.password}/>

                    </View>
                </View>
                <View style={authStyles.footer}>
                    <TouchableOpacity style={authStyles.btn_register} onPress={this._onPressButton}>
                        <Text style={authStyles.btn_register_txt}>وارد شدن</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={authStyles.rules_chk}
                                      onPress={() => this.props.navigation.navigate("ForgotPasswordPage")}>
                        <Text style={authStyles.rules_txt}>رمز عبور را فراموش کردم</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
    content: {
        height: height / 3,
    },
    txt_input_container: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        height: 40,
        marginTop: 20,
    },
});
