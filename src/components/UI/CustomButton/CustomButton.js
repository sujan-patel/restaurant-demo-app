import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

const CustomButton = (props) => {
    return (
        <TouchableOpacity style={styles.buttonContainer}>
            <Text
                style={styles.button}
            >
            {props.children}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "#1976D2",
        height: 40,
        width: 100,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        color: "#E3F2FD",
        fontSize: 18
    }
});

export default CustomButton;
