/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Tile from './Tile'

export default class MyComponent extends Component {
  constructor() {
    super()
    this.state = {
      rows: {
        five: [21, 22, 23, 24, 25],
        four: [20, 19, 18, 17, 16],
        three: [11, 12, 13, 14, 15],
        two: [10, 9, 8, 7, 6],
        one: [1, 2, 3, 4, 5],
      }
    }
  }

  render() {
    return (
      <View style={styles.row}>
        {
          this.state.rows[this.props.rowNumber].map(function (n, index) {
            return (
              <Tile number={n} />
            );
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    borderWidth: 2,
    borderColor: 'black',
    flex: 1,
    flexDirection: 'row'
  },
});
