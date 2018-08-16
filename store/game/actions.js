import * as types from './types'

export function movePlayerOneSuccess(payload) {
  return { type: types.MOVE_PLAYER_ONE_SUCCESS, payload };
}

export function movePlayerTwoSuccess(payload) {
  return { type: types.MOVE_PLAYER_TWO_SUCCESS, payload };
}
