import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import PlaceList from './components/PlaceList';
import LibraryList from './components/LibraryList';
import DetailItem from './components/DetailItem';
import MapComponent from './components/MapComponent';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Please Login" />
            </Scene>
            <Scene key="main">
                <Scene key="libraryList" component={LibraryList} title="Libraries" />
                <Scene key="detail" component={DetailItem} title="Detail" />
                <Scene key="maps" component={MapComponent} title="Locate" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;