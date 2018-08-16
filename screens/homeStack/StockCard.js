/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Card } from 'react-native-elements'


export default class StockCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card
          title={this.props.data.symbol}
        >
          <Text>
            Price: {String(this.props.data.latestPrice)}
          </Text>
          <Text>
            Change: {String(this.props.data.change)}
          </Text>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
