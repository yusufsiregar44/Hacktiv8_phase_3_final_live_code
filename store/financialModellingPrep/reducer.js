import initialState from '../initialState'
import * as types from './types'

export default function homeDataReducer(state = initialState.financialModellingPrep, action) {
  switch (action.type) {
    case types.LOAD_HOME_DATA_SUCCESS:
      return {
        ...state,
        homeData: action.payload,
      };
      case types.CLEAR_HOME_DATA_SUCCESS:
        return {
          ...state,
          homeData: null,
        };
      case types.LOAD_NEWS_DATA_SUCCESS:
        return {
          ...state,
          newsData: action.payload,
        };
        case types.CLEAR_NEWS_DATA_SUCCESS:
          return {
            ...state,
            newsData: null,
          }
    default:
      return state;
  }
}
