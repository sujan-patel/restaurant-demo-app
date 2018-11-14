import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ToolbarAndroid } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
const mapIcon = (<Icon name="map" size={30} color="#900" />);

import CustomInput from '../../components/UI/CustomInput/CustomInput';
import CustomButton from '../../components/UI/CustomButton/CustomButton';

export default class LoginPage extends Component {

    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    navigationButtonPressed({ buttonId }) {
        if (buttonId === "mapToggle")
            alert("Called");
    }
    onActionSelected = (position) => {
        if (position === 0) {
            showSettings();
        }
    }

    changeScreen = () => {
        Icon.getImageSource("map", 30)
        .then((map) => {
            Navigation.setRoot({
                root: {
                    stack: {
                        children: [{
                            component: {
                            name: 'DemoApp.DetailScreen',
                            options: {
                                topBar: {
                                    title: {
                                        text: 'Restaurant Details',
                                        fontFamily: 'Helvetica',
                                        alignment: 'center'
                                    },
                                    rightButtons: [{
                                            icon: map,
                                            id: "mapToggle"
                                    }]
                                }
                            }
                            }
                        }]
                    }
                }
            });
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to India Restaurant</Text>
                <View>
                    <View style={styles.loginContainer}>
                        <CustomInput placeholder="Username" />
                        <CustomInput
                            placeholder="Password"
                            secureTextEntry={true}
                        />
                        <CustomButton title="Login">
                            Login
                        </CustomButton>
                        <TouchableOpacity style={styles.skipContainer}>
                            <Text 
                                style={styles.skip}
                                onPress={this.changeScreen}
                            >
                            Skip Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        
        )
    }
}

const styles = StyleSheet.create({
    loginContainer: {
        alignItems: 'center'
    },
    skipContainer: {
        margin: 8
    },
    skip: {
        color: 'black'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2196F3',
    },
    welcome: {
        color: "#eee",
        fontSize: 24,
        width: 200,
        justifyContent: 'center',
        marginBottom: 20,
    }
});
