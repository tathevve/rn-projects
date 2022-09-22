import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default function Map({ route }) {

    const { city, lat, lng } = route.params;

    return (
        <View style={styles.body}>
            <Text style={[
                styles.text
            ]}>
                {city}
            </Text>
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: lat,
                        longitude: lng,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        margin: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height - 100,
        flex: 1,
    }
})