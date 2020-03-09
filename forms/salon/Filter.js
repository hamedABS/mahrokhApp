import React from "react";
import {
    Dimensions,
    Image,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    View
} from "react-native";
import Modal from 'react-native-modal';

export default class Filter extends React.Component {
    constructor() {
        super();
        this.state = {
            serviceType: 'همه',
            serviceTypeModalIsVisible: false,
            favoriteSwitch: false,
            isClinic: false,
            hasDiscountSwitch: false,
            newest: false,
            mostCheap: false,
            mostExpensive: false,
            mostRated: true,
            closest: false,
            region1: ''
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.filterItem}>
                    <Text style={styles.txt}>نوع خدمت</Text>
                    <Text style={[styles.txt, {fontSize: 16}]}>{this.state.serviceType}</Text>
                    <TouchableOpacity onPress={() => this.setState({serviceTypeModalIsVisible: true})}>
                        <Image
                            source={require('../../assets/png/leftCircle.png')}
                            style={{width: 20, height: 20}}/>
                    </TouchableOpacity>

                    <Modal isVisible={this.state.serviceTypeModalIsVisible}>
                        <View style={styles.modalView}>
                            {
                                serviceTypes.map((serviceType, index) => {
                                    return (
                                        <TouchableOpacity key={index}
                                                          style={[styles.modalTile, this.state.serviceType == serviceType ? {backgroundColor: '#F7DDA4'} : null]}
                                                          onPress={() => this.setState({
                                                              serviceTypeModalIsVisible: false,
                                                              serviceType: serviceType
                                                          })}>
                                            <Text style={styles.txt}>{serviceType}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                            <TouchableOpacity
                                style={[styles.modalTile, {backgroundColor: '#f75841', width: width / 1.1}]}
                                onPress={() => this.setState({
                                    serviceTypeModalIsVisible: false,
                                })}>
                                <Text style={styles.txt}>انصراف</Text>
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
                    <Text style={styles.txt}>تخفیف دار</Text>
                    <Switch onValueChange={(value) => this.setState({hasDiscountSwitch: value})}
                            value={this.state.hasDiscountSwitch}
                            thumbColor='#B08C3E'
                            trackColor={{false: 'rgba(145,145,145,0.44)', true: '#F7DDA4'}}/>
                </View>
                <View style={styles.filterItem}>
                    <Text style={styles.txt}>سالن های برگزیده</Text>
                    <Switch onValueChange={(value) => this.setState({favoriteSwitch: value})}
                            value={this.state.favoriteSwitch}
                            thumbColor='#B08C3E'
                            trackColor={{false: 'rgba(145,145,145,0.44)', true: '#F7DDA4'}}/>
                </View>

                <View style={styles.filterItem}>
                    <Text style={styles.txt}>کلینیک ها</Text>
                    <Switch onValueChange={(value) => this.setState({isClinic: value})}
                            value={this.state.isClinic}
                            thumbColor='#B08C3E'
                            trackColor={{false: 'rgba(145,145,145,0.44)', true: '#F7DDA4'}}/>
                </View>

                <Text style={[styles.txt, {fontSize: 20}]}>مرتب سازی بر اساس</Text>

                <View style={styles.filterItem}>
                    <Text style={styles.txt}>بیشترین امتیاز</Text>
                    <Switch onValueChange={(value) => this.setState({
                        mostRated: value,
                        newest: !value,
                        mostExpensive: !value,
                        mostCheap: !value,
                        closest: !value
                    })}
                            value={this.state.mostRated}
                            thumbColor='#B08C3E'
                            trackColor={{false: 'rgba(145,145,145,0.44)', true: '#F7DDA4'}}/>
                </View>

                <View style={styles.filterItem}>
                    <Text style={styles.txt}>جدید ترین</Text>
                    <Switch onValueChange={(value) => this.setState({
                        newest: value,
                        mostRated: !value,
                        mostExpensive: !value,
                        mostCheap: !value,
                        closest: !value
                    })}
                            value={this.state.newest}
                            thumbColor='#B08C3E'
                            trackColor={{false: 'rgba(145,145,145,0.44)', true: '#F7DDA4'}}/>
                </View>

                <View style={styles.filterItem}>
                    <Text style={styles.txt}>ارزان ترین</Text>
                    <Switch onValueChange={(value) => this.setState({
                        mostCheap: value,
                        mostRated: !value,
                        mostExpensive: !value,
                        newest: !value,
                        closest: !value
                    })}
                            value={this.state.mostCheap}
                            thumbColor='#B08C3E'
                            trackColor={{false: 'rgba(145,145,145,0.44)', true: '#F7DDA4'}}/>
                </View>

                <View style={styles.filterItem}>
                    <Text style={styles.txt}>گران ترین</Text>
                    <Switch onValueChange={(value) => this.setState({
                        mostExpensive: value,
                        mostRated: !value,
                        mostCheap: !value,
                        newest: !value,
                        closest: !value
                    })}
                            value={this.state.mostExpensive}
                            thumbColor='#B08C3E'
                            trackColor={{false: 'rgba(145,145,145,0.44)', true: '#F7DDA4'}}/>
                </View>

                <View style={styles.filterItem}>
                    <Text style={styles.txt}>نزدیک ترین</Text>
                    <Switch onValueChange={(value) => this.setState({
                        closest: value,
                        mostExpensive: !value,
                        mostRated: !value,
                        mostCheap: !value,
                        newest: !value
                    })}
                            value={this.state.closest}
                            thumbColor='#B08C3E'
                            trackColor={{false: 'rgba(145,145,145,0.44)', true: '#F7DDA4'}}/>
                </View>

                <TouchableHighlight style={[styles.btn_save,]} onPress={() => this.props.navigation.goBack()}>
                    <Text style={styles.btn_save_txt}>ذخیره</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const serviceTypes = ['خدمات عروس', 'خدمات پوست', 'جوان سازی و زیبایی', 'خدمات صورت', 'خدمات مو', 'خدمات ناخن', 'خدمات لیزر', 'خدمات بدن', 'ماساژ و اسپا',]

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
    },

    modalTile: {
        width: width / 1.1 - 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.4)',
        borderRadius: 10
    },
    modalView: {
        backgroundColor: 'white',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'center',
        width: width / 1.1,
        borderRadius: 10
    }
});
