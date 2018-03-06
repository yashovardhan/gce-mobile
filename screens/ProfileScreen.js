import React, { Component } from 'react';
import { View, Text, Platform, Dimensions, ScrollView, Image, Linking } from 'react-native';
import { Header, Icon, Divider } from 'react-native-elements';
import Markdown from 'react-native-simple-markdown';

const SCREEN_WIDTH = Dimensions.get('window').width;
const IMAGE_SIZE = SCREEN_WIDTH - 80;

class ProfileScreen extends Component {
  state = {
    expert: this.props.navigation.state.params.expert,
  };

  static navigationOptions = {
    title: 'Experts List',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="account-circle" size={30} color={tintColor} />;
    },
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          leftComponent={{
            icon: 'arrow-back',
            color: '#fff',
            fontSize: 27,
            reverse: false,
            underlayColor: '#D71E3C',
            onPress: () => this.props.navigation.goBack(),
            containerStyle: {
              paddingTop: 20,
              paddingLeft: 20,
              paddingRight: 20,
            },
          }}
          centerComponent={
            <Text style={{ color: '#fff', fontSize: 18 }}>{this.state.expert.github}</Text>
          }
          outerContainerStyles={{
            backgroundColor: '#D71E3C',
            height: Platform.OS === 'ios' ? 70 : 70 + 10,
          }}
          innerContainerStyles={{ justifyContent: 'space-around' }}
        />

        <ScrollView style={{ flex: 1, marginTop: 10, marginBottom: 10 }}>
          <View key={this.state.expert.github}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={{ uri: this.state.expert.avatar }}
                style={{ width: IMAGE_SIZE, height: IMAGE_SIZE, borderRadius: 10 }}
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 20,
                marginHorizontal: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{ flex: 1, fontSize: 26, color: '#D71E3C', textAlign: 'center' }}
                onPress={() =>
                  Linking.openURL(`https://www.github.com/${this.state.expert.github}`)
                }>
                {this.state.expert.name ? this.state.expert.name : this.state.expert.shortname}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 10,
                marginHorizontal: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ flex: 1, fontSize: 17, color: 'gray', textAlign: 'center' }}>
                {this.state.expert.role}
              </Text>
            </View>
            <Divider
              style={{
                backgroundColor: '#D3D3D3',
                marginTop: 20,
                marginHorizontal: 20,
              }}
            />
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 10,
                marginHorizontal: 40,
              }}>
              <Icon name="school" size={15} color="black" />
              <Text style={{ fontSize: 15, color: 'black', marginLeft: 15 }}>
                {this.state.expert.university}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 10,
                marginHorizontal: 40,
              }}>
              <Icon name="pin-drop" size={15} color="black" />
              <Text style={{ fontSize: 15, color: 'black', marginLeft: 15 }}>
                {this.state.expert.city}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 10,
                marginHorizontal: 40,
              }}>
              <Icon name="mail" size={15} color="black" />
              <Text style={{ fontSize: 15, color: 'black', marginLeft: 15 }}>
                {this.state.expert.contact}
              </Text>
            </View>
            <Divider
              style={{
                backgroundColor: '#D3D3D3',
                marginTop: 10,
                marginHorizontal: 20,
              }}
            />
            <View style={{ flex: 1, marginTop: 20, width: SCREEN_WIDTH - 80, marginLeft: 40 }}>
              <Markdown style={{ flex: 1, fontSize: 17, color: 'black', textAlign: 'center' }}>
                {this.state.expert.about}
              </Markdown>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ProfileScreen;
