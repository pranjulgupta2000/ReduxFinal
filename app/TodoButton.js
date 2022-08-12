import React from 'react';
import { Text, StyleSheet, TouchableHighlight } from 'react-native';

const TodoButton = ({ onPress, complete, name }) => (
    <TouchableHighlight onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{name}{complete}</Text>
    </TouchableHighlight>
)

const styles = StyleSheet.create({
    button: {
        alignSelf: 'flex-end',
        padding: 7,
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 4,
        marginRight: 5
    },
    text: {
        color: 'purple'
    },
    complete: {
        color: 'green',
        fontWeight: 'bold'
    },
    deleteButton: {
        color: 'yellow'
    }
})

export default TodoButton;