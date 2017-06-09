import React, { Component } from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation
} from 'react-native';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import { selectLibrary, goToMaps } from '../actions';

class ListItem extends Component {

    // componentWillUpdate() {
    //     LayoutAnimation.spring();
    // }

    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text>{library.description}</Text>
                </CardSection>
            );
        }
    }

    openMaps() {
        console.log('opening maps');
        this.props.goToMaps();
    }

    render() {
        const { titleStyle, textStyle, buttonStyle } = styles;
        const { id, title } = this.props.library;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <Card>
                        <CardSection>
                            <View style={textStyle}>
                                <Text style={titleStyle}>
                                    {title}
                                </Text>
                            </View>
                            <View style={buttonStyle}>
                                <Button
                                    onPress={this.openMaps.bind(this)}
                                >
                                    map
                                </Button>
                            </View>
                        </CardSection>
                    </Card>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    textStyle: {
        flex: 3
    },
    buttonStyle: {
        flex: 1
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
}

export default connect(mapStateToProps, { selectLibrary, goToMaps })(ListItem);