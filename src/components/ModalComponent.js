import React, { Component } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';

class StatusModal extends Component {

    constructor(props) {
        super(props)
        // set state with passed in props
        this.state = {
            message: props.error,
            hide: props.hide,
        }
        // bind functions
        this.dismissModal = this.dismissModal.bind(this)
    }

    dismissModal() {
        this.setState({ hide: true });
    }

    // show or hide Modal based on 'hide' prop
    render() {
        if (this.state.hide) {
            return (
                <View>
                </View>
            );
        } else {
            return (
                <TouchableHighlight style={styles.mainContainer} onPress={this.dismissModal}>
                    <Text style={styles.text}>{this.state.message}</Text>
                </TouchableHighlight>
            );
        }
    }
}

const styles = {
    mainContainer: {
        flex: 1,
        height: 20
    },
    text: {
        fontSize: 15,
        alignSelf: 'center'
    }
}

export default StatusModal;