import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Input = ({ inputChange, inputValue }) => (
    <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            value={inputValue}
            placeholder="What need to be done?"
            placeholderTextColor="green"
            onChangeText={inputChange}
        />
    </View >
)

const styles = StyleSheet.create({
    inputContainer: {
        marginLeft: 20,
        marginRight: 20,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000'
    },
    input: {
        height: 60,
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10
    }
})

export default Input;