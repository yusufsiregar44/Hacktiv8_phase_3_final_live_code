/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
import { globalStyles } from '../stylesheet'
import { connect } from 'react-redux'
import { loadHomeDataAsync } from '../store/FinancialModellingPrep'
import { destroyHomeData } from '../store/FinancialModellingPrep'
import { loadHomeData } from '../store/FinancialModellingPrep'
import StockCard from './homeStack/StockCard'

class HomeStack extends Component {
  componentDidMount() {
    this.props.loadHomeDataAsync()
  }

  componentWillUnmount() {
    this.props.destroyHomeData()
  }

  render() {
    // console.log(this.props.homeData)
    return (
      <View style={globalStyles.container}>
        <View style={styles.view}>
          <Text style={styles.title}>Top dsknknsad</Text>
          {
            this.props.homeData === null &&
            <Text>Loading...</Text>
          }
          {
            this.props.homeData !== null &&
            <FlatList
              data={this.props.homeData.topGainers}
              renderItem={({item, index}) => <StockCard data={item}/>}
              keyExtractor={ (item) =>  item.symbol}
              horizontal={true}
            />
          }
        </View>
        <View style={styles.view}>
          <Text style={styles.title}>Top Losers</Text>
          {
            this.props.homeData === null &&
            <Text>Loading...</Text>
          }
          {
            this.props.homeData !== null &&
            <FlatList
              data={this.props.homeData.topLosers}
              renderItem={({item, index}) => <StockCard data={item}/>}
              keyExtractor={ (item) =>  item.symbol}
              horizontal={true}
            />
          }
        </View>
        <View style={styles.view}>
          <Text style={styles.title}>Most Active</Text>
          {
            this.props.homeData === null &&
            <Text>Loading...</Text>
          }
          {
            this.props.homeData !== null &&
            <FlatList
              data={this.props.homeData.topGainers}
              renderItem={({item, index}) => <StockCard data={item}/>}
              keyExtractor={ (item) =>  item.symbol}
              horizontal={true}
            />
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    margin: 10,
  },
  title: {
    fontSize: 20,
  }
});

const mapStateToProps = state => {
  return {
    homeData: state.financialModellingPrep.homeData,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    loadHomeDataAsync: () => dispatch(loadHomeDataAsync()),
    loadHomeData: () => dispatch(loadHomeData()),
    destroyHomeData: () => dispatch(destroyHomeData())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeStack)
