import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import restaurantInfo from '../../../restaurantInfo.json';

class MapScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.mapContainer}>
                <MapView
                    style={styles.map}
                    region={{
                        latitude: parseFloat(restaurantInfo.restaurantInfo.map.latitude),
                        longitude: parseFloat(restaurantInfo.restaurantInfo.map.longitude),
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: parseFloat(restaurantInfo.restaurantInfo.map.latitude),
                            longitude: parseFloat(restaurantInfo.restaurantInfo.map.longitude)
                        }}
                        title={restaurantInfo.restaurantInfo.city}
                        />
                </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mapContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
})


export default  MapScreen;