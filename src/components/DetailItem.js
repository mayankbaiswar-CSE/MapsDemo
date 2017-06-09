import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from './common';

class DetailItem extends Component {
    render() {
        const { selectedLibraryId } = this.props;
        return (
            <Card>
                <CardSection>
                    <Text>{selectedLibraryId.description}</Text>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { selectedLibraryId } = state;
    return { selectedLibraryId };
}

export default connect(mapStateToProps)(DetailItem);