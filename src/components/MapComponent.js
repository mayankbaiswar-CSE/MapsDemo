import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class MapComponent extends Component {
    render() {
        return (
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <MapView.Marker
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324
                    }}
                    title={"Custom"}
                    description={"Custom marker for test."}
                    image={require('../assets/marker_14.png')}
                    onSelect={() => console.log('marker pressed.')}
                />
            </MapView>
        );
    }
}
export default MapComponent;