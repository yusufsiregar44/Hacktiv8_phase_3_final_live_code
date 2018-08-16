/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking,
  Button
} from 'react-native';
import { Card } from 'react-native-elements'


export default class NewsCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card
          title={String(this.props.data.headline)}
        >
        </Card>
        <Button title="Read Full News" onPress={ ()=>{ Linking.openURL(this.props.data.url)}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headline: {
    fontSize: 15,
  },
});
