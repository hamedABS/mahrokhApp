import React, {Component} from 'react';
import {
    CheckBox,
    Dimensions,
    Image,
    KeyboardAvoidingView,
    Text,
    TextInput,
    TouchableHighlight,
    View,
    Picker,
    StyleSheet
} from 'react-native';
import authStyles from './AuthStyles';


export default class RegisterClass extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            phoneNumber: '',
            email: '',
            password: '',
            repeatPassword: '',
            checked: false,
            dayOfBirth: '',
            monthOfBirth: '',
            yearOfBirth: ''
        }
    }

    _onRegisterPressButton = () => {
        this.props.navigation.navigate('RegisterPage2');
    }

    render() {
        return (
            <KeyboardAvoidingView style={authStyles.container}
                                  behavior="padding" enabled>
                <View style={authStyles.content}>
                    <View style={authStyles.txt_input_container}>
                        <Image
                            style={authStyles.txt_input_img}
                            source={require('../../assets/png/woman.png')}
                        />
                        <TextInput
                            style={authStyles.txt_input}
                            placeholder='نام و نام خانوادگی'
                            autoCapitalize='words'
                            onChangeText={(name) => this.setState({name})}
                            value={this.state.name}/>
                    </View>
                    <View style={authStyles.txt_input_container}>
                        <Image
                            style={authStyles.txt_input_img}
                            source={require('../../assets/png/call.png')}
                        />
                        <TextInput
                            style={authStyles.txt_input}
                            placeholder="شماره تلفن همراه"
                            keyboardType="phone-pad"
                            onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                            value={this.state.phoneNumber}/>

                    </View>
                    <View style={authStyles.txt_input_container}>
                        <Image
                            style={authStyles.txt_input_img}
                            source={require('../../assets/png/mail.png')}
                        />
                        <TextInput
                            style={authStyles.txt_input}
                            placeholder='ایمیل'
                            autoCapitalize='words'
                            onChangeText={(email) => this.setState({email})}
                            value={this.state.email}/>
                    </View>
                    {this.renderBirthDayPicker()}
                    <View style={authStyles.txt_input_container}>
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
                    <View style={authStyles.txt_input_container}>
                        <Image
                            style={authStyles.txt_input_img}
                            source={require('../../assets/png/locked.png')}
                        />
                        <TextInput
                            style={authStyles.txt_input}
                            placeholder='تکرار رمز عبور'
                            secureTextEntry={true}
                            onChangeText={(repeatPassword) => this.setState({repeatPassword})}
                            value={this.state.repeatPassword}/>
                    </View>
                </View>
                <View style={authStyles.footer}>
                    <TouchableHighlight style={authStyles.btn_register} onPress={this._onRegisterPressButton}>
                        <Text style={authStyles.btn_register_txt}>ساخت حساب کاربری</Text>
                    </TouchableHighlight>
                    <Text style={[authStyles.rules_txt, {fontSize: 13}]}> * لطفا قبل از استفاده از ماهرخ حتما شرایط و
                        قوانین
                        مطالعه شود.</Text>
                    <View style={authStyles.rules_chk}>
                        <CheckBox
                            value={this.state.checked}
                            onChange={() => this.setState({checked: !this.state.checked})}/>
                        <Text style={authStyles.rules_txt}>شرایط و قوانین را می پذریم.</Text>
                    </View>

                </View>
            </KeyboardAvoidingView>
        );
    }

    renderBirthDayPicker() {
        let dayPickerItem = []
        for (let i = 1; i <= 31; i++) {
            dayPickerItem.push(<Picker.Item label={"" + i} value={i}/>)
        }

        let mothPickerItem = []
        for (let i = 1; i <= 12; i++) {
            mothPickerItem.push(<Picker.Item label={"" + i} value={i}/>)
        }

        let yearPickerItem = []
        for (let i = 1340; i <= 1396; i++) {
            yearPickerItem.push(<Picker.Item label={"" + i} value={i}/>)
        }

        return (
            <View style={[authStyles.txt_input_container]}>
                <Image
                    style={[authStyles.txt_input_img,{marginBottom:4}]}
                    source={require('../../assets/png/birthday.png')}
                />
                <View style={{
                    flexDirection: 'row-reverse',
                    width: width/1.25,
                    justifyContent: 'space-between',
                    alignSelf:'center',
                    marginRight:10,
                }}>
                    <View style={styles.pickerView}>
                        <Text style={styles.pickerText}>روز</Text>
                        <Picker style={{height: 50, width: 100}}
                                mode={'dropdown'}
                                selectedValue={this.state.dayOfBirth}
                                onValueChange={(itemValue) => this.setState({dayOfBirth: itemValue})}>
                            {
                                dayPickerItem
                            }
                        </Picker>
                    </View>
                    <View style={styles.pickerView}>
                        <Text style={styles.pickerText}>ماه</Text>
                        <Picker style={{height: 50, width: 100}}
                                mode={'dropdown'}
                                selectedValue={this.state.monthOfBirth}
                                onValueChange={(itemValue) => this.setState({monthOfBirth: itemValue})}>
                            {
                                mothPickerItem
                            }
                        </Picker>
                    </View>
                    <View style={styles.pickerView}>
                        <Text style={[styles.pickerText]}>سال</Text>
                        <Picker style={{height: 50, width: 100}}
                                mode={'dropdown'}
                                selectedValue={this.state.yearOfBirth}
                                onValueChange={(itemValue) => this.setState({yearOfBirth: itemValue})}>
                            {
                                yearPickerItem
                            }
                        </Picker>
                    </View>
                </View>

            </View>
        )
    }
}


const {width, height} = Dimensions.get("window");

{
    console.log("width: " + width + " height: " + height)
}

const styles = StyleSheet.create({
    pickerView: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        width: 100,
        height: 30,
        borderRadius: 5,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    pickerText: {
        position: 'absolute',
        fontSize: 15,
        fontFamily: 'IRANSansFaNum',
        alignSelf: 'center',
        margin: 20
    }
})
