import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import PlaceList from './components/PlaceList';
import { Actions, DefaultRenderer } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { openDrawer, closeDrawer } from './actions';

class NavigationDrawer extends Component {
    render() {
        const state = this.props.navigationState;
        const children = state.children;
        return (
            <Drawer
                ref="navigation"
                open={this.props.drawer.open}
                type="overlay"
                content={<PlaceList />}
                tapToClose={true}
                relativeDrag={false}
                openDrawerOffset={0.2}
                closedDrawerOffset={-3}
                styles={drawerStyles}
                panOpenMask={.1}
                panCloseMask={0.2}
                negotiatePan={false}
                tweenEasing="linear"
                side="left"
                tweenHandler={(ratio) => ({
                    main: { opacity: (2 - ratio) / 2 }
                })}>
                <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
            </Drawer>
        );
    }
}

const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
    main: { paddingLeft: 3 },
}

const mapStateToProps = (state) => {
    const { drawer } = state;
    return { drawer };
}

export default connect(mapStateToProps, {
    openDrawer, closeDrawer
})(NavigationDrawer);