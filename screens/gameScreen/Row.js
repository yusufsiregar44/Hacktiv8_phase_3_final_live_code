/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Tile from './Tile'
import { connect } from 'react-redux'

class Row extends Component {
  render() {
    return (
      <View style={styles.row}>
        {
          this.props.rows[this.props.rowNumber].map(function (n, index) {
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

const mapStateToProps = state => {
  return {
    rows: state.game.rows,
  };
}

export default connect(mapStateToProps, null)(Row)
