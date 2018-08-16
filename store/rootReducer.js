import { combineReducers } from 'redux'
import game from './game/reducers'

export const rootReducer = combineReducers({
  game,
})
