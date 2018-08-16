/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Ular Tangga!</Text>
        <Button
          title="Let's Play!"
          onPress={() => this.props.navigation.navigate('Game')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
