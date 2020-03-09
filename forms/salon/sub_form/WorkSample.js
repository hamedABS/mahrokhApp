import React from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import ImageView from 'react-native-image-view';


export default class WorkSample extends React.Component {

    constructor() {
        super();
        this.state = {
            isImageViewVisible: false,
            currentImage: 0
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.sampleItem}>

                        <ImageView
                            images={images}
                            imageIndex={0}
                            isVisible={this.state.isImageViewVisible}
                            onCancel={() => this.setState({isImageViewVisible: false})}
                            onClose={() => this.setState({isImageViewVisible: false})}
                            imageIndex={this.state.currentImage}
                        />

                    <Text style={styles.sampleText}>نمونه کار مو</Text>
                    <View style={styles.imageContainer}>

                        {
                            images.map((image, index) => {
                                return (
                                    <TouchableOpacity key={index} onPress={() => this._pressImage(index)}>
                                        <Image source={{uri: image.source.uri}}
                                               style={styles.girls}
                                        />
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </View>
                <View style={styles.sampleItem}>
                    <Text style={styles.sampleText}>نمونه کار پوست و مو</Text>
                    <ScrollView horizontal>
                        {
                            images.map((image, index) => {
                                return (
                                    <TouchableOpacity key={index} onPress={() => this._pressImage(index)}>
                                        <Image source={{uri: image.source.uri}}
                                               style={styles.girls}
                                        />
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                </View>
            </View>

        );
    }

    _pressImage(index) {
        this.setState({
            isImageViewVisible: true,
            currentImage: index
        })
    }
}


const {width, height} = Dimensions.get("window");


const images = [
    {
        source:{
            uri:"https://media.glamour.com/photos/5c33735e80b8802e61d22efa/1:1/w_352/amber-heard-golden-globes-river.jpg"
        } ,

    }, {
        source:  {
            uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amber-heard-1545299423.jpg"
        },
    }, {
        source:  {
            uri:"https://cdn.gaystarnews.com/uploads/2019/01/Amber_Heard.jpg"
        },
    },
];

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height / 2,
    },
    sampleItem: {
        width: width,
        height: height / 4,
        alignItems: 'center',
    },
    sampleText: {
        fontSize: 16,
        fontFamily: 'IRANSansFaNum',
        margin: 5,
        marginRight: 30,
        color: '#00000099',
        alignSelf: 'flex-end'
    },
    girls: {
        width: width / 3.5,
        height: width / 3.5,
        borderRadius: 10,
        margin: 2
    },
    imageContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
    }
})
