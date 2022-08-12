import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const Button = ({ submitTodo }) => (
    <View style={styles.buttonContainer}>
        <TouchableHighlight onPress={submitTodo} style={styles.button}>
            <Text style={styles.submit}>Submit</Text>
        </TouchableHighlight>
    </View>
)

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'flex-end'
    },
    button: {
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'blue',
        width: 200,
        marginRight: 20,
        marginTop: 15,
        borderWidth: 1,
        borderColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    submit: {
        color: 'orange',
        fontWeight: '600'
    }
})

export default Button;