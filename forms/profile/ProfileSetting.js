import React from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class ProfileSetting extends React.Component {

    constructor() {
        super()
        this.state = {
            name: '',
            town: '',
            phoneNumber: '',
            password: '',
            repeatPassword: '',
            checked: false,
            photoUri: null
        }
    }

    componentDidMount() {
        this.getPermissionAsync();
        let photoUri = this.props.navigation.getParam("photoUri");
        this.setState({
            photoUri: photoUri
        })

    }

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


    render() {
        let {photoUri} = this.state;
        let photo = photoUri == null ? require("../../assets/png/woman_prof.png") : {uri: photoUri}
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <View style={[styles.itemContainer, {height: height / 4}]}>
                    <TouchableOpacity onPress={this._pickImage}>
                        <Image
                            source={photo}
                            style={{width: width / 4, height: width / 4, borderRadius: 50}}
                        />
                        <Image
                            source={require('../../assets/png/plus.png')}
                            style={{position: 'absolute', marginTop: 80, marginLeft: 12, width: 20, height: 20}}
                        />
                    </TouchableOpacity>
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
                        onChangeText={(town) => this.setState({town})}
                        value={this.state.town}/>
                </View>
                <View style={styles.everyItem}>
                    <Image
                        source={require('../../assets/png/woman.png')}
                        style={styles.icon}/>
                    <Text style={styles.txt}>sara1450</Text>
                </View>
                <TouchableHighlight style={styles.btn_save} onPress={this._onRegisterPressButton}>
                    <Text style={styles.btn_save_txt}>ذخیره</Text>
                </TouchableHighlight>
            </View>
        )
    }


    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        if (!result.cancelled) {
            this.props.navigation.state.params.updateProfilePhoto(result.uri);
            this.setState({photoUri: result.uri});
        }
    };

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    _onRegisterPressButton = () => {
        this.props.navigation.state.params.updateName(this.state.name);
        this.props.navigation.goBack();
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
        tintColor: '#B08C3E'
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
    btn_save_txt: {
        fontFamily: 'IRANSansWeb',
        fontSize: width / 23,
        textAlign: 'center',
        color: 'white'
    },
    btn_save: {
        margin: 10,
        width: width / 3,
        height: height / 18,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B08C3E',
        borderRadius: 50,
        marginTop: 50
    },
    itemContainer: {
        width: width,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

