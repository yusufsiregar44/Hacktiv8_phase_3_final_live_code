/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { createSwitchNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { configureStore } from './store'

import HomeScreen from './screens/HomeScreen'
import GameScreen from './screens/GameScreen'
import FinishScreen from './screens/FinishScreen'

const RootStack = createSwitchNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Game: {
      screen: GameScreen,
    },
    Finish: {
      screen: FinishScreen,
    },
  },
  {
    initialRouteName: 'Home'
  }
)

export default class App extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}
