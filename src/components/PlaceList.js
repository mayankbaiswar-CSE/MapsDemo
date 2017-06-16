import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Button, CardSection } from '../components/common';
import { selectLibrary, openDrawer, closeDrawer } from '../actions';

class PlaceList extends Component {

    static navigationOptions = {
        title: 'Place List',
    };

    navigateTo(index) {
        console.log('navigation to = ', index);
        console.log('navigateTo', this.props);
        this.props.closeDrawer(false);
    }

    render() {
        return (
            <ScrollView style={styles.drawer}>
                <View style={styles.header}>
                    <View style={styles.headerInfo} key={1}>
                        <Text style={styles.headerTitle} key={0}>
                            Mayank Baiswar
                        </Text>
                        <Text style={styles.headerEmail} key={1}>
                            mayank.baiswar@daffodilsw.com
                        </Text>
                    </View>
                </View>
                <View style={styles.content} key={1}>
                    <View>
                        {this.props.libraries.map((item, idx) => (
                            <TouchableOpacity
                                key={idx}
                                style={styles.listItem}
                                onPress={this.navigateTo.bind(this, item.id)}
                            >
                                <Text style={styles.listItemTitle}>{item.title}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    const { libraries, drawer } = state;
    return { libraries, drawer };
};

const styles = StyleSheet.create({
    drawer: {
        flex: 1,
    },
    header: {
        height: 180,
        flex: 1,
        padding: 16,
        backgroundColor: '#1565C0'
    },
    content: {
        flex: 3,
        padding: 16,
        backgroundColor: '#1E88E5'
    },
    headerInfo: {
        height: 56
    },
    headerIcon: {
        width: 70,
        height: 70,
        borderRadius: 45,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2196F3'
    },
    headerTitle: {
        color: '#fff',
        fontSize: 20
    },
    headerEmail: {
        color: '#fff',
        fontSize: 16
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: 80,
        marginBottom: 10
    },
    listItemTitle: {
        fontSize: 18,
        flexShrink: 1,
        color: '#fff'
    },
    listItemImage: {
        width: 80,
        height: 80,
        borderRadius: 7,
        marginRight: 10,
    }
});

export default connect(mapStateToProps, { selectLibrary, openDrawer, closeDrawer })(PlaceList);