import initialState from '../initialState'
import * as types from './types'

export default function gameDataReducer(state = initialState.game, action) {
  switch (action.type) {
    case types.MOVE_PLAYER_ONE_SUCCESS:
      return {
        ...state,
        playerOnePosition: state.playerOnePosition + action.payload,
      };
    case types.MOVE_PLAYER_TWO_SUCCESS:
      return {
        ...state,
        playerTwoPosition: state.playerOnePosition + action.payload,
      };
    case types.CHANGE_CURRENT_PLAYER_SUCCESS:
      return {
        ...state,
        currentPlayer: action.payload,
      };
    default:
      return state;
  }
}
