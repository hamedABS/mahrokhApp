import React, {Component} from 'react';
import {
    StyleSheet, Text, TextInput, View, Image,
    Dimensions, TouchableHighlight, CheckBox, KeyboardAvoidingView,
} from 'react-native';


export default class Login extends React.Component {
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
            }}>ورود</Text>
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
            <KeyboardAvoidingView style={styles.container}
                                  behavior="padding" enabled>
                <View style={styles.content}>
                    <View style={styles.txt_input_container}>
                        <Image
                            style={styles.txt_input_img}
                            source={require('../../assets/png/telephone.png')}
                        />
                        <TextInput
                            style={styles.txt_input}
                            placeholder="شماره تلفن همراه"
                            keyboardType="phone-pad"
                            onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                            value={this.state.phoneNumber}/>

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
                            onChangeText={(password) => this.setState({password})}
                            value={this.state.password}/>

                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableHighlight onPress={this._onPressButton}>
                        <View style={styles.btn_login}>
                            <Text style={styles.btn_register_txt}>وارد شدن</Text>
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
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    content: {
        height: height / 3,
    },
    txt_input_container: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        height:40,
        marginTop: 20,
    },

    txt_input: {
        fontFamily: 'IRANSansWeb',
        height: 40,
        width: width,
        textAlign: 'right',
        writingDirection: 'rtl',
        paddingRight: 10
    },

    txt_input_img: {
        tintColor: '#e6b618',
        height: 35,
        width: 35,
        marginRight: width / 45
    },
    footer: {
        borderColor: 'rgba(0,0,0,0.4)',
        backgroundColor: '#E4DFE6',
        borderTopWidth: 1,
        height: height / 6,
        alignItems: 'center',
    },
    btn_register_txt: {
        fontFamily: 'IRANSansWeb',
        fontSize: width / 16,
        textAlign: 'center',
        padding: 8,
        color: 'white'
    },
    btn_login: {
        margin: 10,
        width: width / 2,
        height: height / 13,
        alignItems: 'center',
        backgroundColor: '#e6b618',
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
