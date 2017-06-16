import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux'
import LoginForm from './components/LoginForm';
import PlaceList from './components/PlaceList';
import LibraryList from './components/LibraryList';
import DetailItem from './components/DetailItem';
import MapComponent from './components/MapComponent';
import StatusModal from './components/ModalComponent';
import NavigationDrawer from './Drawer';

const TabIcon = ({ selected, title }) => {
    console.log('' + selected + ' and ' + title);
    return (
        <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
    );
}

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Please Login" />
            </Scene>
            <Scene key="drawer" component={NavigationDrawer} open={false}>
                <Scene key="myTabBar" tabs={true} hideNavBar tabBarStyle={style.tabBarStyle}>
                    <Scene
                        key="libraryList"
                        title="Libraries"
                        icon={TabIcon}
                        onPress={() => {
                            Actions.myTab_1({ type: ActionConst.REFRESH });
                        }}
                    >
                        <Scene key="myTab_1" component={LibraryList} panHandlers={null} title="Libraries" />
                        <Scene key="detail" component={DetailItem} title="" />
                    </Scene>
                    <Scene
                        key="maps"
                        title="Locate"
                        icon={TabIcon}
                        onPress={() => {
                            Actions.myTab_2({ type: ActionConst.REFRESH });
                        }}
                    >
                        <Scene key="myTab_2" component={MapComponent} title="Locate" />
                    </Scene>
                </Scene>

            </Scene>
        </Router>
    );
};

let style = StyleSheet.create({
    tabBarStyle: {
        borderTopWidth: 1,
        borderColor: '#b7b7b7',
        backgroundColor: 'white',
        opacity: 1,
        height: 60
    }
});

export default RouterComponent;