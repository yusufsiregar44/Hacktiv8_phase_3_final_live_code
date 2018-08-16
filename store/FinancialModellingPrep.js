import axios from 'axios'
import * as actions from './financialModellingPrep/actions'

const error = err => console.log(err);

const fetchAllHomeData = async () => {
  let topActives = await axios.get("https://api.iextrading.com/1.0/stock/market/list/mostactive")
  let topGainers= await axios.get("https://api.iextrading.com/1.0/stock/market/list/gainers")
  let topLosers = await axios.get("https://api.iextrading.com/1.0/stock/market/list/losers")

  let objOfData = {
    topGainers: topGainers.data,
    topLosers: topLosers.data,
    topActives: topActives.data
  }
  return objOfData;
}

var homeDataAsync;

export function loadHomeData() {
  return dispatch => {
    fetchAllHomeData()
    .then(result => {
      dispatch(actions.loadHomeDataSuccess(result))
    })
    .catch(error)
  };
}

export function loadHomeDataAsync() {
  return dispatch => {
    homeDataAsync = setInterval(() => {
      dispatch(loadHomeData())
    }, 1000)
  };
}

export function destroyHomeData() {
  return dispatch => {
    clearInterval(homeDataAsync)
    console.log('mati');
    setTimeout(() => {
      dispatch(actions.clearHomeDataSuccess())
    }, 1500)
  };
}

const fetchNewsData = async() =>{
  let news = await axios.get("https://api.iextrading.com/1.0/stock/market/news/last/10")

  let processedNews = news.data
  return processedNews;
}

export function loadNewsData() {
  return dispatch => {
    fetchNewsData()
    .then(result => {
      dispatch(actions.loadNewsDataSuccess(result))
    })
    .catch(error)
  };
}

export function destroyNewsData() {
  return dispatch => {
    dispatch(actions.destroyNewsDataSuccess())
  };
}
