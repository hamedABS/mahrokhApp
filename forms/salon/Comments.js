import React from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';


export default class Comments extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {commentsMock.map((item, i) => {
                    return (
                        <View key={i} style={styles.commentContainer}>
                            <Text style={styles.commentText} key={i}> {item} </Text>
                            <View style={{flexDirection: 'row', marginLeft:10}}>
                                <Image source={require('../../assets/png/star3x_gold.png')} style={styles.star}/>
                                <Image source={require('../../assets/png/star3x_gold.png')} style={styles.star}/>
                                <Image source={require('../../assets/png/star3x_gold.png')} style={styles.star}/>
                                <Image source={require('../../assets/png/star3x_gold.png')} style={styles.star}/>
                                <Image source={require('../../assets/png/star3x.png')} style={styles.star}/>
                            </View>
                        </View>
                    )
                })}
            </View>
        )
    }
}
const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        width: width,
        height: height / 4,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    commentContainer: {
        width: width / 1.1,
        height: height / 8,
        borderRadius:7,
        backgroundColor:'white',
        margin: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    star: {
        width: 16,
        height: 16,
    },
    commentText: {
        fontSize: 14,
        fontFamily: 'IRANSansFaNum',
        margin: 5
    }
})
const commentsMock = [
    'بنظرم می تونست حرفه ای تر باشه فرایند اما در کل خوب بود خیلی ممنون',
    'خیلی ممنون از سالن آرایشی و حرفه ای کایزن بابت کار حرفه ای و خوب',
    'بنظرم می تونست حرفه ای تر باشه فرایند اما در کل خوب بود خیلی ممنون',
]
