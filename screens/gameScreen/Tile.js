/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class MyComponent extends Component {

  render() {
    return (
      <View style={styles.tile}>
        <Text>{this.props.number}</Text>
        {
          this.props.number === 1 &&
          <View>
            <View style={styles.player1}>
              <Text>1</Text>
            </View>
            <View style={styles.player2}>
              <Text>2</Text>
            </View>
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center'
  },
  player1: {
    width: 30,
    height: 30,
    margin: 3,
    backgroundColor: 'red',
    alignItems: 'center'
  },
  player2: {
    width: 30,
    height: 30,
    margin: 3,
    backgroundColor: 'blue',
    alignItems: 'center'
  },
});
