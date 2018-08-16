import * as types from './types'

export function loadHomeDataSuccess(payload) {
  return { type: types.LOAD_HOME_DATA_SUCCESS, payload };
}

export function clearHomeDataSuccess() {
  return { type: types.CLEAR_HOME_DATA_SUCCESS }
}

export function loadNewsDataSuccess(payload) {
  return { type: types.LOAD_NEWS_DATA_SUCCESS, payload };
}

export function destroyNewsDataSuccess() {
  return { type: types.CLEAR_NEWS_DATA_SUCCESS }
}
