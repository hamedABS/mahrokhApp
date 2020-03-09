import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView} from 'react-native';
import ConfirmationDialog from "../ConfirmationDialog";


export default class Setting extends React.Component {

    state = {
        exitModalIsVisible: false
    }

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
            }}>تنظیمات</Text>
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
        return (

            <View style={{flex: 1, justifyContent: 'space-between'}}>
                <View style={{flex: 1, alignItems: 'center', marginTop: 30}}>
                    <TouchableOpacity style={styles.everyItem}
                                      onPress={() => this.props.navigation.navigate('ChangePasswordPage')}>
                        <Image
                            source={require('../../assets/png/locked.png')}
                            style={styles.icon}/>
                        <Text style={styles.txt}>تغییر گذر واژه</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.everyItem} onPress={() => this.setState({exitModalIsVisible: true})}>
                        <Image
                            source={require('../../assets/png/exit.png')}
                            style={styles.icon}/>
                        <Text style={styles.txt}>خروج از برنامه</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width: width, marginBottom: 10, alignItems: 'center'}}>
                    <Image
                        source={require('../../assets/png/logo.png')}
                        style={{width: width / 4, height: width / 4}}
                    />
                    <Text style={styles.txt}>version 0.0.1</Text>
                </View>
                {
                    this.state.exitModalIsVisible ?
                        <ConfirmationDialog message={'آیا مطمئن هستید می خواهید خارج شوید؟'}
                                            doOnCancel={this._closeModal}
                                            donOnConfirmation={() => this.props.navigation.navigate("Auth")}/>
                        : null
                }
            </View>


        )
    }
    _closeModal = () => {
        this.setState({exitModalIsVisible: false})
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
        marginLeft: 7,
        tintColor: '#B08C3E'
    },
    txt: {
        fontSize: 16,
        fontFamily: 'IRANSansFaNum',
        color: '#323232'
    }
})

