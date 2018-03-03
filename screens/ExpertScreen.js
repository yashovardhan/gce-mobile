import React, { Component } from 'react';
import { ScrollView, View, Platform } from 'react-native';
import { Icon, List, ListItem, Header } from 'react-native-elements';

const experts = require('../data/experts.json');

class ExpertScreen extends Component {
  static navigationOptions = {
    title: 'Experts List',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="view-list" size={30} color={tintColor} />;
    },
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          leftComponent={
            <Icon
              name="keyboard-arrow-left"
              color="#fff"
              size={27}
              onPress={() => {
                this.props.navigation.navigate('home');
              }}
            />
          }
          centerComponent={{
            text: 'GitHub Campus Experts',
            style: {
              color: '#fff',
              fontSize: 18,
            },
          }}
          outerContainerStyles={{
            backgroundColor: '#D71E3C',
            height: Platform.OS === 'ios' ? 70 : 70 + 10,
          }}
          innerContainerStyles={{ justifyContent: 'space-around' }}
        />
        <ScrollView>
          <List>
            {experts.map(expert => (
              <ListItem
                roundAvatar
                avatar={{ uri: expert.avatar }}
                key={expert.github}
                title={expert.name ? expert.name : expert.shortname}
                subtitle={expert.university}
              />
            ))}
          </List>
        </ScrollView>
      </View>
    );
  }
}

export default ExpertScreen;
