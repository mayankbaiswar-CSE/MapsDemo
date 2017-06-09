import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { View, Text } from 'react-native';
import reducers from './reducers'
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyAjMf1aEFiBNk1gnG_JDkitbbCSWyVhekw",
            authDomain: "manager-6c6aa.firebaseapp.com",
            databaseURL: "https://manager-6c6aa.firebaseio.com",
            projectId: "manager-6c6aa",
            storageBucket: "manager-6c6aa.appspot.com",
            messagingSenderId: "1010384562506"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <View style={{ flex: 1 }}>
                    <Router />
                </View>
            </Provider>
        );
    }
}

export default App;