import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';

import MapScreen from './screens/MapScreen';
import ExpertScreen from './screens/ExpertScreen';

class App extends Component {
  render() {
    const MainNavigator = TabNavigator(
      {
        map: { screen: MapScreen },
        expert: { screen: ExpertScreen },
      },
      {
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        tabBarOptions: {
          labelStyle: { fontSize: 10 },
        },
      }
    );
    return <MainNavigator />;
  }
}

export default App;
