// import React, { Component } from 'react';
// import { View, ScrollView, StyleSheet } from 'react-native';
// import Heading from './Heading';
// import Input from './Input';
// import Button from './Button';
// import TodoList from './TodoList';

// let todoIndex = 0;

// class App extends Component {

//     constructor() { // class method, oop
//         super();
//         this.state = {
//             inputValue: '',
//             todos: [],
//             type: 'All'
//         }
//         console.log('App is running');
//     }

//     inputChange = (inputValue) => {
//         this.setState({ inputValue }); // In class component, we use this.setState to update state
//     }

//     submitTodo = () => {
//         if (this.state.inputValue.match(/^\s*$/)) { // inputValue is empty or only contains whitespace
//             return
//         }
//         const todo = { title: this.state.inputValue, todoIndex: todoIndex, complete: false }
//         todoIndex++;
//         this.state.todos.push(todo);
//         this.setState({ todos: this.state.todos, inputValue: '' }, () => {
//             console.log('state', this.state);
//         })
//     }

//     toggleComplete = (todoIndex) => {
//         let { todos } = this.state;
//         todos.forEach((todo) => {
//             if (todo.todoIndex === todoIndex) {
//                 todo.complete = !todo.complete
//             }
//         })
//         this.setState({ todos });
//         console.log('state', this.state);
//     }

//     deleteTodo = (todoIndex) => {
//         let { todos } = this.state;
//         todos = this.state.todos.filter((todo) => {
//             return todo.todoIndex !== todoIndex
//         })
//         this.setState({ todos });
//         console.log('state', this.state);
//     }

//     render() {
//         const { todos, inputValue, type } = this.state;
//         return (
//             <View style={styles.container} styles={{ marginLeft: 20, marginRight: 20 }}>
//                 <ScrollView style={styles.content}>
//                     <Heading />
//                     <Input
//                         inputValue={inputValue}
//                         inputChange={(text) => this.inputChange(text)}
//                     />
//                     <Button
//                         submitTodo={this.submitTodo} />

//                     <TodoList
//                         type={type}
//                         toggleComplete={this.toggleComplete}
//                         deleteTodo={this.deleteTodo}
//                         todos={todos}
//                     />
//                 </ScrollView>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "pink"
//     },
//     content: {
//         flex: 1,
//         paddingTop: 60
//     }
// })

// export default App;

import React from "react";
import { View } from 'react-native';
import TimeTable from "./src/TimeTable";

export default function App() {
    return (
        <TimeTable />
    )
}
