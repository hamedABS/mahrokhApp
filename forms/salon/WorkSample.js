import React from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';




export default class WorkSample extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.sampleItem}>
                    <Text style={styles.sampleText}>نمونه کار مو</Text>
                    <View style={styles.imageContainer}>
                        <Image source={require('../../assets/png/young-brunette-hair_2x.png')}
                               style={styles.girls}
                        />
                        <Image source={require('../../assets/png/young-female-model-posing-2x.png')}
                               style={styles.girls}
                        />
                        <Image source={require('../../assets/png/closeUp-portrait-woman112x.png')}
                               style={styles.girls}
                        />
                    </View>
                </View>
                <View style={styles.sampleItem}>
                    <Text style={styles.sampleText}>نمونه کار پوست و مو</Text>
                    <View style={styles.imageContainer}>
                        <Image source={require('../../assets/png/young-brunette-hair_2x.png')}
                               style={styles.girls}
                        />
                        <Image source={require('../../assets/png/young-female-model-posing-2x.png')}
                               style={styles.girls}
                        />
                        <Image source={require('../../assets/png/closeUp-portrait-woman112x.png')}
                               style={styles.girls}
                        />
                    </View>
                </View>

            </View>

        );
    }
}





const {width, height} = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height / 2,
        //alignItems:'center'
    },
    sampleItem: {
        width: width,
        height: height/4,
        alignItems:'center',
    },
    sampleText:{
        fontSize:16,
        fontFamily:'IRANSansFaNum',
        margin:5,
        marginRight:30,
        color:'#00000099',
        alignSelf:'flex-end'
    },
    girls: {
        width:width/3.5,
        height: width/3.5,
        borderRadius:10,
        margin:2
    },
    imageContainer:{
        flexDirection: 'row-reverse',
        alignItems:'center',
        //marginLeft:5
    }
})
