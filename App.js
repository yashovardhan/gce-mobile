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
        lazy: true,
        initialRouteName: 'expert',
        tabBarOptions: {
          showLabel: false,
          showIcon: true,
          upperCaseLabel: false,
          labelStyle: { fontSize: 12 },
          scrollEnabled: false,
          activeTintColor: '#D71E3C',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: 'white',
          },
        },
      }
    );
    return <MainNavigator />;
  }
}

export default App;
