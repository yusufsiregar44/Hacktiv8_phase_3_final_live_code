import axios from 'axios'
import * as actions from './game/actions'

export function movePlayerOne(value) {
  return dispatch => {
    dispatch(actions.movePlayerOneSuccess(result))
  };
}

export function movePlayerTwo(value) {
  return dispatch => {
    dispatch(actions.movePlayerTwoSuccess(result))
  };
}

export function changeCurrentPlayer(player) {
  return dispatch => {
    if (player === 1) {
      let nextPlayer = 2
    } else {
      let nextPlayer = 1
    }
    dispatch(actions.changeCurrentPlayerSuccess(nextPlayer))
  };
}
