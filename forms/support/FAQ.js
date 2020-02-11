import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Accordion from "react-native-collapsible/Accordion";

export default class FAQ extends React.Component {
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
            }}>سوالات متداول</Text>
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
        super();
        this.state = {
            activeSections: []
        }
    }

    _renderHeader = (section, index, activeSection) => {
        return (
            <View style={styles.everyItem}>
                <Text style={[styles.txt, {marginRight: 10}]}>{section.title}</Text>
                <Image
                    source={require('../../assets/png/left.png')}
                    style={index == activeSection ? [styles.icon, {rotation: -90}] : styles.icon}/>
            </View>
        );
    };

    _renderContent = section => {
        return (
            <View>
                <Text style={[styles.txt, {marginRight: 10}]}>{section.content}</Text>
            </View>
        );
    };

    _updateSections = activeSections => {
        this.setState({activeSections});
    };

    render() {
        return (

            <View style={{flex: 1, justifyContent: 'space-between'}}>
                <Accordion
                    containerStyle={{alignItems: 'center', marginTop: 30}}
                    sections={SECTIONS}
                    activeSections={this.state.activeSections}
                    renderHeader={(section, isActive) => this._renderHeader(section, isActive, this.state.activeSections[0])}
                    renderContent={this._renderContent}
                    onChange={this._updateSections}
                    touchableComponent={TouchableOpacity}
                />
                <View style={{marginTop: 20}}>
                    <View style={{width: width, marginBottom: 10, alignItems: 'center'}}>
                        <Image
                            source={require('../../assets/png/Logo_new.png')}
                            style={{width: width / 4, height: width / 4}}
                        />
                        <Text style={styles.txt}>version 0.0.1</Text>
                    </View>
                    <Text style={[styles.txt, {alignSelf: 'center', margin: 20}]}>با ما در ارتباط باشید</Text>
                    <View style={{height: height / 3, justifyContent: 'center', flexDirection: 'row-reverse'}}>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/png/youtube.png')}
                                style={styles.socialIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/png/whatsapp.png')}
                                style={styles.socialIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/png/instagram.png')}
                                style={styles.socialIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        )
    }
}


const SECTIONS = [
    {
        title: 'کاشت ناخن',
        content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
    },
    {
        title: 'خدمات مو',
        content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
    },
    {
        title: 'خدمات پوست',
        content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
    },
];


const {width, height} = Dimensions.get("window");

const styles = StyleSheet.create({
    everyItem: {
        flexDirection: 'row-reverse',
        borderRadius: 10,
        width: width / 1.04,
        height: height / 14,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.26)',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 3,
        alignSelf: 'center'
    },
    socialIcon: {
        width: 50,
        height: 50,
        marginRight: 10,
        marginLeft: 7,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
        marginLeft: 7,
        tintColor: '#e6b618',
    },
    txt: {
        fontSize: 16,
        fontFamily: 'IRANSansFaNum',
        color: '#323232'
    }
})

