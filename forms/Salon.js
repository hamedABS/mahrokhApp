import {Component} from 'react';
import {
    Dimensions,
    Image,
    ImageBackground,
    Linking,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native';



export class Salon extends Component{


    render() {
        return (
            <View style={styles.container}>
                <ScrollView styl={styles.header}>
                    <ImageBackground
                        source={require('../assets/png/jhfjhg.png')}
                        style={{
                            width: '00%',
                            height: '100%',
                            borderRadius: 10,
                            overflow: 'hidden',
                            marginLeft: 20,
                            marginRight: 15,
                            // justifyContent: 'center',
                            flexDirection: 'row-reverse'
                        }}/>
                </ScrollView>
                <View>

                </View>
                <View></View>
                <View style={styles.footer}></View>
            </View>

        );
    }
}

const styles = StyleSheet.create({

});
