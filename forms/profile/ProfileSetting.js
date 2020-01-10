import React from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    ScrollView,
    TouchableHighlight
} from 'react-native';

export default class ProfileSetting extends React.Component {
    static navigationOptions = ({navigation}) => {
        let headerBackImage = <Image source={require('../../assets/png/left.png')}
                                     style={{width: 20, height: 20}}
        />;
        let headerTitle = <Text style={{
            textAlign: 'center',
            fontFamily: 'IRANSansWeb',
            width: width / 1.3,
            fontSize: 16
        }}>پروفایل شخصی</Text>
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
            password: '',
            repeatPassword: '',
            checked: false
        }
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <View style={[styles.itemContainer, {height: height / 4}]}>
                    <View onPress={() => this.props.navigation.navigate('Salon')}>
                        <Image
                            source={require('../../assets/png/brownHairGirl.png')}
                            style={{width: width / 4, height: width / 4, borderRadius: 50}}
                        />
                        <TouchableOpacity style={{width: 15, height: 15, position:'absolute', marginTop: 80, marginLeft: 12}}>
                            <Image
                                source={require('../../assets/png/plus.png')}
                                style={{width: 15, height: 15}}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.everyItem}>
                    <Image
                        source={require('../../assets/png/woman.png')}
                        style={styles.icon}/>
                    <TextInput
                        style={styles.txt_input}
                        defaultValue='سارا رضایی'
                        placeholder='نام و نام خانوادگی'
                        autoCapitalize='words'
                        onChangeText={(name) => this.setState({name})}
                        value={this.state.name}/>
                </View>
                <View style={styles.everyItem}>
                    <Image
                        style={styles.icon}
                        source={require('../../assets/png/call.png')}
                    />
                    <TextInput
                        style={styles.txt_input}
                        defaultValue='09385136659'
                        placeholder="شماره تلفن همراه"
                        keyboardType="phone-pad"
                        onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                        value={this.state.phoneNumber}/>
                </View>
                <View style={styles.everyItem}>
                    <Image
                        source={require('../../assets/png/edit.png')}
                        style={styles.icon}/>
                    <TextInput
                        style={styles.txt_input}
                        defaultValue="Tehran"
                        placeholder='شهر'
                        autoCapitalize='words'
                        onChangeText={(name) => this.setState({name})}
                        value={this.state.name}/>
                </View>
                <View style={styles.everyItem}>
                    <Image
                        source={require('../../assets/png/woman.png')}
                        style={styles.icon}/>
                    <Text style={styles.txt}>sara1450</Text>
                </View>
                <TouchableHighlight style={styles.btn_register} onPress={this._onRegisterPressButton}>
                    <Text style={styles.btn_register_txt}>ذخیره</Text>
                </TouchableHighlight>
            </View>
        )
    }
}


const {width, height} = Dimensions.get("window");

const styles = StyleSheet.create({
    everyItem: {
        flexDirection: 'row-reverse',
        width: width,
        height: height / 14,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.26)',
        alignItems: 'center'
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 10,
        marginLeft: 5,
        tintColor: 'rgba(0,0,0,0.26)'
    },
    txt: {
        fontSize: 16,
        fontFamily: 'IRANSansFaNum',
        color: '#323232'
    },
    txt_input: {
        fontFamily: 'IRANSansFaNum',
        width: width,
        textAlign: 'right',
        writingDirection: 'rtl',
        paddingRight: 10
    },
    btn_register_txt: {
        fontFamily: 'IRANSansWeb',
        fontSize: width / 23,
        textAlign: 'center',
        color: 'white'
    },
    btn_register: {
        margin: 10,
        width: width / 3,
        height: height / 18,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A537FD',
        borderRadius: 50,
        marginTop: 50
    },
    itemContainer: {
        width: width,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

