/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';
import Row from './gameScreen/Row'

export default class GameScreen extends Component {
  constructor() {
    super()
    this.state = {
      rows: {
        one: [21, 22, 23, 24, 25],
        two: [20, 19, 18, 17, 16],
        three: [11, 12, 13, 14, 15],
        four: [10, 9, 8, 7, 6],
        five: [1, 2, 3, 4, 5],
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {
          Object.keys(this.state.rows).map(function (r, index) {
            return (
              <Row rowNumber={r} />
            )
          })
        }
        <View style={styles.Footer}>
          <Button
            title="Roll Dice!"
            onPress={() => alert(Math.floor(Math.random() * 6) + 1  )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  footer: {
    borderWidth: 2,
    borderColor: 'black',
    flex: 1,
    alignItems: 'center'
  }
});
