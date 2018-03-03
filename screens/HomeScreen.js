import React, { Component } from 'react';
import { View, Dimensions, Image } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#D71E3C' }}>
        <Image
          style={{ width: SCREEN_WIDTH }}
          source={require('../data/gce.png')}
          resizeMode="contain"
        />
        <View style={{ justifyContent: 'space-around' }}>
          <Button
            title="BECOME AN EXPERT"
            textStyle={{ fontWeight: '700' }}
            buttonStyle={{
              backgroundColor: '#7d1223',
              borderColor: 'transparent',
              borderWidth: 2,
              borderRadius: 20,
              marginTop: 10,
              marginBottom: 10,
            }}
            containerStyle={{ marginTop: 20 }}
            onPress={() => this.props.navigation.navigate('join')}
          />
          <Button
            title="FIND AN EXPERT"
            textStyle={{ fontWeight: '700' }}
            buttonStyle={{
              backgroundColor: '#7d1223',
              borderColor: 'transparent',
              borderWidth: 2,
              borderRadius: 20,
              marginTop: 10,
              marginBottom: 10,
            }}
            containerStyle={{ marginTop: 20 }}
            onPress={() => this.props.navigation.navigate('find')}
          />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
