/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';
import Row from './gameScreen/Row'
import { connect } from 'react-redux'

class GameScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        {
          Object.keys(this.props.rows).map(function (r, index) {
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

const mapStateToProps = state => {
  return {
    rows: state.game.rows,
    currentPlayer: state.game.currentPlayer
  };
}

const mapDispatchToProps = dispatch => {
  return {
    movePlayerOne: () => dispatch(movePlayerOne()),
    movePlayerTwo: () => dispatch(movePlayerTwo()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen)
