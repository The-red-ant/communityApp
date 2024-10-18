import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';

const AdvancedMarkersDemo = () => {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 1.3521,
        longitude: 103.8198,
        latitudeDelta: 15,
        longitudeDelta: 15,
      }}
    >
      <Marker
        coordinate={{ latitude: 1.3521, longitude: 103.8198 }} // Singapore
      >
        {/* Custom View for Marker */}
        <View style={styles.markerView}>
          <Text style={styles.markerText}>Hello!</Text>
        </View>
      </Marker>

      <Marker
        coordinate={{ latitude: 3.1390, longitude: 101.6869 }} // Kuala Lumpur
        pinColor="magenta" // Custom pin color
      />

      <Marker
        coordinate={{ latitude: -6.2088, longitude: 106.8456 }} // Jakarta
        pinColor="blue" // Custom pin color
      />

      <Marker
        coordinate={{ latitude: 13.7563, longitude: 100.5018 }} // Bangkok
      >
        {/* Custom glyph marker */}
        <View style={styles.glyphMarker}>
          <Text style={styles.glyphText}>A</Text>
        </View>
      </Marker>

      <Marker
        coordinate={{ latitude: 14.5995, longitude: 120.9842 }} // Manila
        opacity={0.5} // Transparent marker
      />

      <Marker
        coordinate={{ latitude: 10.7769, longitude: 106.7009 }} // Ho Chi Minh City
        stopPropagation={true} // Simulating collision behavior, not natively supported
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  markerView: {
    backgroundColor: 'magenta',
    padding: 5,
    borderRadius: 10,
  },
  markerText: {
    color: 'white',
  },
  glyphMarker: {
    backgroundColor: 'green',
    borderRadius: 20,
    padding: 10,
  },
  glyphText: {
    color: 'white',
    fontWeight: 'bold',
  },
});




export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
}