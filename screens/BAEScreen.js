import React, { Component } from 'react';
import { View, Platform, Text, Linking } from 'react-native';
import { Header } from 'react-native-elements';

class BAEScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          leftComponent={{
            icon: 'arrow-back',
            color: '#fff',
            fontSize: 27,
            underlayColor: '#D71E3C',
            reverse: false,
            onPress: () => this.props.navigation.goBack(),
            containerStyle: {
              paddingTop: 20,
              paddingLeft: 20,
              paddingRight: 20,
            },
          }}
          centerComponent={{
            text: 'Become an Expert',
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
        <View style={{ flex: 0.6, justifyContent: 'space-around' }}>
          <Text style={styles.fonts}>
            To become a Campus Expert, you must complete the Campus Expert training. The training
            takes place online, and can be done at your own pace. Clicking the button below will
            allow you to join the Campus Experts GitHub organization, and access the&nbsp;
            <Text
              style={{ color: 'blue' }}
              onPress={() => Linking.openURL('https://github.com/campus-experts/training')}>
              Campus Expert training
            </Text>. By participating in the training you agree to the&nbsp;
            <Text
              style={{ color: 'blue' }}
              onPress={() => Linking.openURL('https://education.github.com/experts/terms')}>
              terms and conditions
            </Text>.
          </Text>
          <Text style={styles.fonts}>
            The Campus Experts training is currently closed. To find out when we are accepting new
            Campus Expert applicants, please subscribe to the mailing list&nbsp;
            <Text
              style={{ color: 'blue' }}
              onPress={() =>
                Linking.openURL(
                  'https://github.us11.list-manage.com/subscribe?u=9d7ced8c4bbd6c2f238673f0f&id=86ed1f31bf'
                )
              }>
              here
            </Text>.
          </Text>
        </View>
      </View>
    );
  }
}
const styles = {
  fonts: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 8,
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center',
  },
};

export default BAEScreen;
