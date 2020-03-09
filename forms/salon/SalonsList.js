import React from 'react';
import {
    Dimensions,
    I18nManager,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import StarRating from "react-native-star-rating";
import Modal from "react-native-modal";

I18nManager.allowRTL(false);

export default class SalonsList extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: () => <Search data={navigation}/>,
            headerStyle: {
                height: height / 6.5
            }
        }
    }

    constructor() {
        super();
        this.state = {
            salonImageSource: require('../../assets/png/brownHairGirl.png')
        }
    }

    _onSalonPress = () => {
        this.props.navigation.navigate('Salon')
    }

    render() {
        return (
            <ScrollView>
                {
                    salonsMock.map((salon, index) => {
                        let verifiedLabel = require("../../assets/png/sale_filled.png")
                        let discountLabel = require("../../assets/png/verifed.png")
                        return (
                            <TouchableOpacity key={index} style={styles.salonItem} onPress={this._onSalonPress}>
                                <Image
                                    source={require('../../assets/png/jhfjhg.png')}
                                    style={styles.salonImage}
                                />
                                <View style={{
                                    flexDirection: 'row-reverse',
                                    justifyContent: 'space-between',
                                    width: width
                                }}>
                                    <View style={{width: width / 2, height: height / 8, margin: 15}}>
                                        <Text style={[styles.titlesBaseStyle, {
                                            fontFamily: 'IRANSansWebMedium',
                                            fontSize: 20
                                        }]}>{salon.name}</Text>
                                        <Text style={[styles.titlesBaseStyle, {fontSize: 15}]}>{salon.address}</Text>
                                    </View>
                                    <View style={{
                                        margin: 10,
                                        width: width / 4,
                                        height: height / 16,
                                        marginLeft: 30,
                                        alignItems: 'center',
                                        justifyContent: "center",
                                    }}>
                                        <View style={{flexDirection: 'row',}}>
                                            <StarRating
                                                disabled={true}
                                                starSize={13}
                                                emptyStarColor='#707070'
                                                fullStarColor='#FAC917'
                                                maxStars={5}
                                                rating={salon.score}
                                            />
                                            <Text style={[styles.titlesBaseStyle, {
                                                fontSize: 12,
                                                marginLeft: 10,
                                                marginBottom: 10
                                            }]}>#تخفیف
                                                دار</Text>
                                        </View>
                                        <Text style={{
                                            alignSelf: 'flex-start',
                                            fontSize: 10,
                                            fontFamily: 'IRANSansFaNum',
                                            color: '#00000099'
                                        }}>{salon.commentCount} نظر </Text>
                                    </View>
                                </View>
                                <Image source={index % 2 == 0 ? verifiedLabel : discountLabel}
                                       style={{
                                           width: 40,
                                           height: 40,
                                           marginTop: -15,
                                           zIndex: 1,
                                           position: 'absolute',
                                           marginRight: 15,
                                           alignSelf: 'flex-end'
                                       }}/>

                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        )
    }
}

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            city: '',
            townModalIsVisible: false
        }
    }

    render() {
        let navigation = this.props.data;
        return (
            <View style={{
                width: width,
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'flex-end',
            }}>
                <View style={styles.filterWrapper}>
                    <View style={styles.filter}>
                        <Image
                            source={require('../../assets/png/search.png')}
                            style={{
                                width: 15,
                                height: 15,
                                tintColor: '#0000004C',
                                marginRight: 30,
                                marginLeft: 5,
                                margin: 10
                            }}
                        />
                        <TextInput
                            style={{
                                padding: 2,
                                width: width / 2,
                                fontFamily: 'IRANSansFaNum',
                                textAlign: 'right',
                                writingDirection: 'rtl',
                            }}
                            returnKeyType={'search'}
                            placeholder='دنبال چی میگردی؟'/>
                    </View>
                </View>

                <Modal isVisible={this.state.townModalIsVisible}>
                    <View style={styles.modalView}>
                        {
                            cities.map((city, index) => {
                                return (
                                    <TouchableOpacity key={index}
                                                      style={[styles.modalTile, this.state.city == city ? {backgroundColor: '#F7DDA4'} : null]}
                                                      onPress={() => this.setState({
                                                          townModalIsVisible: false,
                                                          city: city
                                                      })}>
                                        <Text style={styles.txt}>{city}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                        <TouchableOpacity style={[styles.modalTile, {backgroundColor: '#f75841', width: width / 1.1}]}
                                          onPress={() => this.setState({
                                              townModalIsVisible: false,
                                          })}>
                            <Text style={styles.txt}>انصراف</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>

                <View style={{flexDirection: 'row-reverse', alignSelf: 'flex-end', marginLeft: 20,}}>
                    <TouchableOpacity style={styles.filterTypeTile} onPress={() => navigation.navigate('Filter')}>
                        <Text style={{
                            fontFamily: 'IRANSansWeb',
                            fontSize: 14,
                            textAlign: 'center',
                            color: 'rgba(0,0,0,0.6)'
                        }}>فیلتر نتایج</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.filterTypeTile} onPress={() => this.setState({
                        townModalIsVisible: true
                    })}>
                        <Text style={{
                            fontFamily: 'IRANSansWeb',
                            fontSize: 14,
                            textAlign: 'center',
                            color: 'rgba(0,0,0,0.6)'
                        }}>محدوده</Text>

                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}

const cities = ["تهران", "شیراز", "اصفهان", "مشهد", "رشت", "کرمان",]
const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
    salonItem: {
        width: width,
        height: height / 2,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.4)',
        alignItems: 'center',
        marginTop: 20
    },
    salonImage: {
        width: width - 10,
        height: '75%',
        borderRadius: 10,
    },
    titlesBaseStyle: {
        fontSize: 22,
        fontFamily: 'IRANSansFaNum',
        marginRight: 15,
        color: '#00000099',
    },
    headerIcon: {
        width: 18,
        height: 24,
        tintColor: '#B08C3E'
    },
    filterWrapper: {
        width: width / 1.1,
        height: height / 11,
        alignItems: 'center',
        justifyContent: 'center'
    },
    filter: {
        width: width / 1.1,
        backgroundColor: '#00000008',
        borderColor: '#70707033',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row-reverse'
    },
    filterTypeTile: {
        width: 80,
        height: 35,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#70707033',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    txt: {
        fontSize: 18,
        fontFamily: 'IRANSansFaNum',
        marginRight: 15,
        color: '#00000099',
        margin: 5,
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

const salonsMock = [
    {
        id: 1,
        name: 'کایزن',
        address: 'زعفرانیه - مقدس اردبیلی',
        imageSource: "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg",
        score: 4,
        commentCount: 30
    },
    {
        id: 2,
        name: 'افشار',
        address: 'زعفرانیه - مقدس اردبیلی',
        imageSource: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
        score: 3,
        commentCount: 30
    },
    {
        id: 3,
        name: 'شریعتی',
        address: 'شریعتی -جنب مقدس اردبیلی',
        imageSource: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
        score: 5,
        commentCount: 30
    },
    {
        id: 4,
        name: 'شریعتی',
        address: 'شریعتی -جنب مقدس اردبیلی',
        imageSource: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
        score: 5,
        commentCount: 30
    },
    {
        id: 5,
        name: 'میرداماد',
        address: 'نزدیک شریعتی خیابان میرداماد',
        imageSource: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
        score: 2,
        commentCount: 30
    }
]
