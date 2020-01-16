import React from "react";
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Switch,
    TextInput,
    TouchableHighlight
} from "react-native";
import Modal from 'react-native-modal';

export default class Filter extends React.Component {

    static navigationOptions = ({navigation}) => {
        let headerBackImage = <Image source={require('../../assets/png/left.png')}
                                     style={{width: 20, height: 20}}
        />;
        return {
            headerBackImage: ()=> {return headerBackImage}
        }
    }


    constructor() {
        super();
        this.state = {
            serviceKind: '',
            serviceKindModalIsVisible: false,
            favoriteSwitch: false,
            newSwitch: false,
            hasDiscountSwitch: false
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.filterItem}>
                    <Text style={styles.txt}>نوع خدمت</Text>
                    <Text style={[styles.txt,{fontSize:16}]}>{this.state.serviceKind}</Text>
                    <TouchableOpacity onPress={() => this.setState({serviceKindModalIsVisible: true})}>
                        <Image
                            source={require('../../assets/png/leftCircle.png')}
                            style={{width: 20, height: 20}}/>
                    </TouchableOpacity>

                    <Modal isVisible={this.state.serviceKindModalIsVisible}>
                        <View style={{
                            backgroundColor: 'white',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            alignSelf: 'center',
                            width: width / 1.1,
                            borderRadius: 25
                        }}>
                            <TouchableOpacity onPress={() => this.setState({
                                serviceKindModalIsVisible: false,
                                serviceKind: 'خدمات مو'
                            })}>
                                <Text style={styles.txt}>خدمات مو</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({
                                serviceKindModalIsVisible: false,
                                serviceKind: 'خدمات پوست'
                            })}>
                                <Text style={styles.txt}> خدمات پوست</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({
                                serviceKindModalIsVisible: false,
                                serviceKind: 'خدمات ناخن'
                            })}>
                                <Text style={styles.txt}>خدمات ناخن</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
                <View style={styles.filterItem}>
                    <Text style={styles.txt}>رنج قیمت</Text>
                    <View style={{
                        flexDirection: 'row-reverse',
                        alignContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={styles.txt}>از</Text>
                        <TextInput style={styles.txtInput}/>
                        <Text style={styles.txt}>تا</Text>
                        <TextInput style={styles.txtInput}/>
                    </View>
                </View>
                <View style={styles.filterItem}>
                    <Text style={styles.txt}>جدید</Text>
                    <Switch onValueChange={(value) => this.setState({newSwitch: value})}
                            value={this.state.newSwitch}
                            thumbColor='#B08C3E'
                            trackColor={{false: 'rgba(145,145,145,0.44)', true: '#F7DDA4'}}/>
                </View>
                <View style={styles.filterItem}>
                    <Text style={styles.txt}>تخفیف دار</Text>
                    <Switch onValueChange={(value) => this.setState({hasDiscountSwitch: value})}
                            value={this.state.hasDiscountSwitch}
                            thumbColor='#B08C3E'
                            trackColor={{false: 'rgba(145,145,145,0.44)', true: '#F7DDA4'}}/>
                </View>
                <View style={styles.filterItem}>
                    <Text style={styles.txt}>سالن برگزیده</Text>
                    <Switch onValueChange={(value) => this.setState({favoriteSwitch: value})}
                            value={this.state.favoriteSwitch}
                            thumbColor='#B08C3E'
                            trackColor={{false: 'rgba(145,145,145,0.44)', true: '#F7DDA4'}}/>
                </View>
                <TouchableHighlight style={styles.btn_save} onPress={()=> this.props.navigation.goBack()}>
                    <Text style={styles.btn_save_txt}>ذخیره</Text>
                </TouchableHighlight>
            </View>
        )
    }
}


const {width, height} = Dimensions.get("window");

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        padding: 20
    },

    filterItem: {
        flexDirection: 'row-reverse',
        width: width / 1.1,
        height: height / 15,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between'
    },

    txtInput: {
        fontFamily: 'IRANSansFaNum',
        textAlign: 'center',
        borderRadius: 10,
        padding: 5,
        height: 30,
        width: 60,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.6)'
    },
    txt: {
        fontSize: 18,
        fontFamily: 'IRANSansFaNum',
        marginRight: 15,
        color: '#00000099',
        margin: 5,
    },
    headerIcon: {
        width: 18,
        height: 24,
        marginRight: 20
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
        backgroundColor: '#A537FD',
        borderRadius: 50,
        marginTop: 50
    },
});
