// Adding the provider and store 
import React from "react";
import rootReducer from '../src/reducers'

import { Provider } from 'react-redux';
import { createStore } from "redux";
import MyApp from "./component/MyApp";

const store = createStore(rootReducer); // adding reduer inside store

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <MyApp />
            </Provider>
        )
    }
}