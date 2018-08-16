/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import { globalStyles } from '../stylesheet'
import { connect } from 'react-redux'
import { destroyNewsData } from '../store/FinancialModellingPrep'
import { loadNewsData } from '../store/FinancialModellingPrep'
import NewsCard from './marketScreen/NewsCard'

class Market extends Component {
  componentDidMount() {
    this.props.loadNewsData()
  }

  componentWillUnmount() {
    this.props.destroyNewsData()
  }

  render() {
    console.log(this.props.newsData);
    return (
      <View style={globalStyles.container}>
        <View style={styles.view}>
          <Text style={styles.title}>
            Market News
          </Text>
          {
            this.props.newsData === null &&
            <Text>Loading...</Text>
          }
          {
            this.props.newsData !== null &&
            <FlatList
              data={this.props.newsData}
              renderItem={({item, index}) => <NewsCard data={item}/>}
              keyExtractor={ (item) =>  item.url}
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
    fontSize: 30,
  }
});

const mapStateToProps = state => {
  return {
    newsData: state.financialModellingPrep.newsData,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    loadNewsData: () => dispatch(loadNewsData()),
    destroyNewsData: () => dispatch(destroyNewsData())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Market)
