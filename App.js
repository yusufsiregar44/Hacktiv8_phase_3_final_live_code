/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { globalStyles } from './stylesheet'
import { Provider } from 'react-redux'
import { configureStore } from './store'

import HomeStack from './screens/HomeStack'
import MarketScreen from './screens/MarketScreen'

const store = configureStore()

const BottomStack = createBottomTabNavigator(
  {
    Home: HomeStack,
    News: MarketScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home'
        } else if (routeName === 'News') {
          iconName = 'file-invoice-dollar'
        }
        return <FontAwesome5 name={iconName} solid size={20} color={tintColor}/>;
      }
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'rgb(198, 191, 191)',
    },
  }
)

const RootStack = createStackNavigator(
  {
    Route: {screen: BottomStack}
  },
  {
    navigationOptions: () => ({
      headerTitle: () => (
        <View style={styles.header}>
          <FontAwesome5 name='cannabis' solid size={20} style={styles.icon}/>
          <Text style={styles.title}>
            marq.
          </Text>
        </View>
      ),
      headerStyle:{backgroundColor:'yellow'},
    })
  }
)

export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <RootStack />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  icon: {
    marginRight: 5,
  },
  header: {
    margin: 10,
    flexDirection: 'row'
  }
})
