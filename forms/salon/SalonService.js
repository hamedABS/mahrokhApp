import React from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default class SalonService extends React.Component {
    render() {
        let parentProps = this.props.data;
        return (
            <View style={styles.container}>
                <View style={styles.serviceItem}>
                    <Text style={styles.serviceText}>کاشت ناخن</Text>
                    <Image source={require('../../assets/png/plus.png')}
                           style={styles.plus}
                    />
                </View>
                <View style={styles.serviceItem}>
                    <Text style={styles.serviceText}>کلوپ</Text>
                    <Image source={require('../../assets/png/plus.png')}
                           style={styles.plus}
                    />
                </View>
                <View style={styles.serviceItem}>
                    <Text style={styles.serviceText}>کرلی</Text>
                    <Image source={require('../../assets/png/plus.png')}
                           style={styles.plus}
                    />
                </View>
                <View style={styles.serviceItem}>
                    <Text style={styles.serviceText}>رنگ شیشه</Text>
                    <Image source={require('../../assets/png/plus.png')}
                           style={styles.plus}
                    />
                </View>
                <View style={styles.serviceItem}>
                    <Text style={styles.serviceText}>بافت</Text>
                    <Image source={require('../../assets/png/plus.png')}
                           style={styles.plus}
                    />
                </View>
                <TouchableOpacity style={{borderTopColor: '#70707080', borderTopWidth: 1}}
                onPress={()=>parentProps.navigation.navigate('NewReserve')}>
                    <View style={{
                        width: width / 2.9,
                        height: height / 17,
                        backgroundColor: '#A537FD',
                        borderRadius: 25,
                        marginTop: 15
                    }}>
                        <Text style={{color: 'white', fontFamily: 'IRANSansWeb', textAlign: 'center', marginTop: 8}}>خدمت
                            آماده رزرو</Text>
                    </View>
                </TouchableOpacity>
            </View>

        );
    }
}

const {width, height} = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height / 4,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    serviceItem: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "90%",
        height: height / 12,
        borderBottomColor: '#70707080',
        borderBottomWidth: 0.75,
    },
    serviceText: {
        fontSize: 16,
        fontFamily: 'IRANSansFaNum',
        margin: 5
    },
    plus: {
        width: 20,
        height: 20
    }
})


