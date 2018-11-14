import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

class ImagePickerScreen extends Component {

    state = {
        imagePath: null
    };

    uploadImage = () => {
        let options = {
            title: 'Select Image',
        };
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                alert('User cancelled image picker');
              } else if (response.error) {
                alert(response.error);
              } else if (response.customButton) {
                alert(response.customButton);
              } else {
                const source = { uri: response.uri };            
                this.setState({
                    imagePath: source,
                });
              }
        });
    }

    render() {
        return (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={this.uploadImage}>
                <Text style={styles.btn}>Upload Image</Text>
            </TouchableOpacity>
            <View style={styles.imgContainer}>
            <Image style={styles.image} source={this.state.imagePath}/>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 5,
        width: "100%"
    },
    btn: {
        backgroundColor: "#1976D2",
        padding: 10,
        width: 116,
        borderRadius: 3,
        color: "#fff",
        textAlign: 'center'
    },
    imgContainer: {
        width: 350,
        margin: 4
    },
    image: {
        width: "100%",
        height: "70%"
    }
})


export default ImagePickerScreen;