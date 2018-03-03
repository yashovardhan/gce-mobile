import React, { Component } from 'react';
import { View, ActivityIndicator, Dimensions } from 'react-native';
import { MapView } from 'expo';
import { Icon, Text } from 'react-native-elements';

import MapStyle from '../components/MapStyle';

const markers = require('../data/experts.json');
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 92.2;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class MapScreen extends Component {
  static navigationOptions = {
    title: 'Map',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="person-pin-circle" size={30} color={tintColor} />;
    },
  };

  state = {
    mapLoaded: false,
    region: {
      longitude: LONGITUDE,
      latitude: LATITUDE,
      longitudeDelta: LATITUDE_DELTA,
      latitudeDelta: LONGITUDE_DELTA,
    },
    markers,
  };

  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  onRegionChangeComplete = region => {
    this.setState({ region });
  };

  onButtonPress(expert) {
    this.props.navigation.navigate('profile', { expert });
  }

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <MapView
          region={this.state.region}
          style={{ flex: 1 }}
          provider={MapView.PROVIDER_GOOGLE}
          customMapStyle={MapStyle}
          onRegionChangeComplete={this.onRegionChangeComplete}>
          {this.state.markers.map(marker => {
            return (
              <MapView.Marker
                key={marker.github}
                coordinate={marker.pin}
                title={marker.name ? marker.name : marker.shortname}
                description={marker.university + ', ' + marker.city}
                image={require('../data/pin.png')}>
                <MapView.Callout onPress={() => this.onButtonPress(marker)}>
                  <View>
                    <Text style={{ fontSize: 18, fontWeight: '700' }}>
                      {marker.name ? marker.name : marker.shortname}
                    </Text>
                    <Text>{marker.university + ', ' + marker.city}</Text>
                  </View>
                </MapView.Callout>
              </MapView.Marker>
            );
          })}
        </MapView>
      </View>
    );
  }
}

export default MapScreen;
