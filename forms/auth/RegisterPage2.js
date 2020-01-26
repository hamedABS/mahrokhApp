import React, {Component} from 'react';
import {Ionicons} from '@expo/vector-icons';
import {
    StyleSheet, Text, TextInput, View,
    Dimensions, TouchableHighlight, KeyboardAvoidingView, Image
} from 'react-native';


export default class RegisterClass2 extends Component {

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
            minute: 2,
            second: 60,
            code: ''
        }
    }
    componentDidMount() {
        let s = this.state.second;
        let m = this.state.minute;
        var inter = setInterval(() => {
            if (s == 0) {
                m--;
                if (m == 0) {
                    clearInterval(inter);
                } else {
                    s = 60;
                }
                this.setState({second: s, minute: m})

            } else {
                s--;
                this.setState({second: s})
            }
        }, 100);

    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    _onPressButton = ()=>{
        this.props.navigation.navigate('Tab');
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.containter}
                                  behavior="padding" enabled>
                <Text style={styles.txt_1}>لطفا کد ارسال شده را وارد کنید</Text>
                <Text style={styles.txt_2}>برای تایید شماره تلفن، لطفا کد ارسال شده را در کادر زیر وارد کنید در صورتی که
                    کد برایتان ارسال نشده، درخواست ارسال مجدد کد را ارسال کنید</Text>

                <View style={styles.content}>
                    <TextInput
                        style={styles.txt_input}
                        placeholder="کد"
                        keyboardType="numeric"
                        onChangeText={(code) => this.setState({code})}
                        value={this.state.code}/>
                    <TouchableHighlight>
                        <Text style={styles.code}>ارسال دوباره کد؟</Text>
                    </TouchableHighlight>
                    <Text>{this.state.minute}:{this.state.second}</Text>
                </View>

                <View style={styles.footer}>
                    <TouchableHighlight onPress={this._onPressButton}>
                        <View style={styles.btn_register}>
                            <Text style={styles.btn_register_txt}>تایید شماره تلفن</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={styles.rules_chk}>
                        <Text style={styles.rules_txt}>ویرایش اطلاعات</Text>
                    </View>

                </View>
            </KeyboardAvoidingView>
        );
    }
}

const {width, height} = Dimensions.get("window");

{
    console.log("width: " + width + " height: " + height)
}

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        justifyContent: 'space-between',
        fontFamily:'IRANSansWeb'
    },
    content: {
        height: height / 5,
        justifyContent: 'space-around',
        alignItems: "center"
    },

    txt_1: {
        paddingRight: 5,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#00000099'
    },
    txt_2: {
        paddingRight: 10,
        height: 65,
        paddingLeft: 10,
        fontSize: 16,
        color: '#00000099'

    },
    txt_resend_code: {
        fontSize: 16,
        color: '#00000099'
    },

    txt_input: {
        height: 60,
        width: width / 3,
        paddingRight: 10,
        borderWidth: 1,
        borderColor: '#B08C3E',
        borderRadius: 10,
        textAlign: "center",
        fontSize: 20
    },

    txt_input_img: {
        tintColor:'#ddac17',
        height: height / 21,
        width: width / 13,
        marginRight: width / 45
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
        height: height / 6,
        alignItems: 'center',

    },
    btn_register_txt: {
        fontFamily: 'IRANSansWeb',
        fontSize: width / 18,
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
        fontSize: 15,
        textAlign: 'center',
        marginTop: 3,
        color: '#B08C3E'
    }
});
