import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import BAEScreen from './screens/BAEScreen';
import ProfileScreen from './screens/ProfileScreen';
import ExpertScreen from './screens/ExpertScreen';

class App extends Component {
  render() {
    const MainNavigator = StackNavigator(
      {
        join: { screen: BAEScreen },
        home: { screen: HomeScreen },
        find: {
          screen: TabNavigator(
            {
              map: { screen: MapScreen },
              expert: {
                screen: StackNavigator(
                  {
                    list: { screen: ExpertScreen },
                    profile: { screen: ProfileScreen },
                  },
                  {
                    headerMode: 'none',
                    lazy: false,
                  }
                ),
              },
            },
            {
              tabBarPosition: 'bottom',
              swipeEnabled: true,
              lazy: false,
              animationEnabled: false,
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
          ),
        },
      },
      {
        headerMode: 'none',
        initialRouteName: 'home',
        lazy: false,
        animationEnabled: true,
      }
    );

    return <MainNavigator />;
  }
}

export default App;
