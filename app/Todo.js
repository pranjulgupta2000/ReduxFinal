import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoButton from './TodoButton';

const Todo = ({ todo, toggleComplete, deleteTodo }) => (
    <View style={styles.todoContainer}>
        <Text style={styles.todoText}>
            {todo.title}
        </Text>
        <View style={styles.buttons}>
            <TodoButton name='Done' complete={todo.complete} onPress={() => toggleComplete(todo.todoIndex)} />
            <TodoButton name='Delete' onPress={() => deleteTodo(todo.todoIndex)} />
        </View>
    </View>
)

const styles = StyleSheet.create({
    todoContainer: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: 'orange',
        borderTopWidth: 1
    },
    todoText: {
        fontSize: 22
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})

export default Todo;