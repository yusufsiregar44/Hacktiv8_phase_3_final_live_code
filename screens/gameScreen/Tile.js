/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'

class Tile extends Component {

  render() {
    console.log(this.props);
    return (
      <View style={styles.tile}>
        <Text>{this.props.number}</Text>
        <View>
          {
            this.props.number === this.props.playerOnePosition &&
            <View style={styles.player1}>
              <Text>1</Text>
            </View>
          }
          {
            this.props.number === this.props.playerTwoPosition &&
            <View style={styles.player2}>
              <Text>2</Text>
            </View>
          }
        </View>
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

const mapStateToProps = state => {
  return {
    playerOnePosition: state.game.playerOnePosition,
    playerTwoPosition: state.game.playerTwoPosition,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    movePlayerOne: () => dispatch(movePlayerOne()),
    movePlayerTwo: () => dispatch(movePlayerTwo()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tile)
