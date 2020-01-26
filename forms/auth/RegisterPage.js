import React, { Component } from 'react';
import {
    StyleSheet, Text, TextInput, View, Image,
    Dimensions, TouchableHighlight, CheckBox, KeyboardAvoidingView,
} from 'react-native';


export default class RegisterClass extends Component {
    static navigationOptions = ({navigation}) => {
        let headerBackImage = <Image source={require('../../assets/png/left.png')}
                                     style={{width: 20, height: 20}}
        />;
        let headerTitle =
            <Text style={{
                textAlign: 'center',
                fontFamily: 'IRANSansWeb',
                width: width / 1.4,
                fontSize: 16
            }}>عضویت</Text>
        return {
            headerBackImage: () => {
                return headerBackImage
            },
            headerTitle: () => {
                return headerTitle
            },
        };
    };
    constructor() {
        super()
        this.state = {
            name: '',
            phoneNumber: '',
            email:'',
            password: '',
            repeatPassword: '',
            checked: false
        }
    }

    _onRegisterPressButton = () => {
        this.props.navigation.navigate('RegisterPage2');
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.containter}
                behavior="padding" enabled>
                <View style={styles.content}>
                    <View style={styles.txt_input_container}>
                        <Image
                            style={styles.txt_input_img}
                            source={require('../../assets/png/woman.png')}
                        />
                        <TextInput
                            style={styles.txt_input}
                            placeholder='نام و نام خانوادگی'
                            autoCapitalize='words'
                            onChangeText={(name) => this.setState({ name })}
                            value={this.state.name} />
                    </View>
                    <View style={styles.txt_input_container}>
                        <Image
                            style={styles.txt_input_img}
                            source={require('../../assets/png/call.png')}
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
                            source={require('../../assets/png/mail.png')}
                        />
                        <TextInput
                            style={styles.txt_input}
                            placeholder='ایمیل'
                            autoCapitalize='words'
                            onChangeText={(email) => this.setState({ email })}
                            value={this.state.email} />
                    </View>
                    <View style={styles.txt_input_container}>
                        <Image
                            style={styles.txt_input_img}
                            source={require('../../assets/png/locked.png')}
                        />
                        <TextInput
                            style={styles.txt_input}
                            placeholder='رمز عبور'
                            secureTextEntry={true}
                            autoCompleteType='off'
                            onChangeText={(password) => this.setState({ password })}
                            value={this.state.password} />

                    </View>
                    <View style={styles.txt_input_container}>
                        <Image
                            style={styles.txt_input_img}
                            source={require('../../assets/png/locked.png')}
                        />
                        <TextInput
                            style={styles.txt_input}
                            placeholder='تکرار رمز عبور'
                            secureTextEntry={true}
                            onChangeText={(repeatPassword) => this.setState({ repeatPassword })}
                            value={this.state.repeatPassword} />
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableHighlight onPress={this._onRegisterPressButton}>
                        <View style={styles.btn_register}>
                            <Text style={styles.btn_register_txt} >ساخت حساب کاربری</Text>
                        </View>
                    </TouchableHighlight>
                    <Text style={[styles.rules_txt,{fontSize:13}]} > * لطفا قبل از استفاده از ماهرخ حتما  شرایط و قوانین مطالعه شود.</Text>
                    <View style={styles.rules_chk}>
                        <CheckBox
                            value={this.state.checked}
                            onChange={() => this.setState({ checked: !this.state.checked })} />
                        <Text style={styles.rules_txt}>شرایط و قوانین را می پذریم.</Text>
                    </View>

                </View>
            </KeyboardAvoidingView>
        );
    }
}


const { width, height } = Dimensions.get("window");

{
    console.log("width: " + width + " height: " + height)
}

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
        borderColor: 'rgba(0,0,0,0.5)',
        paddingRight: width
    },

    txt_input: {
        fontFamily:'IRANSansFaNum',
        height: 40,
        width: width,
        textAlign: 'right',
        writingDirection: 'rtl',
        paddingRight: 10
    },

    txt_input_img: {
        height: 35,
        width: 35,
        marginRight: width / 45,
        tintColor:'#ddac17',
    },
    header: {
        height: height / 14,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: 'grey',
        backgroundColor: '#E4DFE6',
        justifyContent: 'center',
        marginTop: 24
    },
    footer: {
        borderColor: 'grey',
        backgroundColor: '#E4DFE6',
        borderTopWidth: 1,
        height: height / 5,
        alignItems: 'center',
    },
    btn_register_txt: {
        fontFamily: 'IRANSansWeb',
        fontSize: 18,
        textAlign: 'center',
        padding: 8,
        color: 'white'
    },
    btn_register: {
        margin: 10,
        width: width / 2,
        height: height / 13,
        alignItems: 'center',
        backgroundColor: '#ddac17',
        borderRadius: 50,
    },
    rules_chk: {
        flexDirection: 'row-reverse',
        width: width / 2,
        height: height / 13,
        justifyContent: 'center'
    },
    rules_txt: {
        fontFamily: 'IRANSansWeb',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 3
    }
});
