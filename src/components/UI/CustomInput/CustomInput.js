import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const CustomInput = (props) => {
  return (
    <View>
      <TextInput 
          style={styles.input}
          placeholder={props.placeholder}
          secureTextEntry={props.secureTextEntry ? true : false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        width: 300,
        height: 40,
        backgroundColor: "#E3F2FD",
        borderRadius: 3,
        margin: 10,
        padding: 10
    }
});

export default CustomInput;
