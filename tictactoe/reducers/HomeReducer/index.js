import {
  SET_SELECTED_ITEM,
  CLEAN_GAME
} from '../../actions/HomeActions/constants'

const initialState = { matrix: [[], [], []], winner: '', valueCurrent: '' }

export default function HomeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_ITEM: {
      if (!state.matrix[action.x][action.y]) {
        const matrix = state.matrix
        if (state.valueCurrent == '') {
          state.valueCurrent = 'X'
        }
        matrix[action.x][action.y] = state.valueCurrent
        const winner = verifyWinner(matrix)
        const valueCurrent = state.valueCurrent == 'X' ? 'O' : 'X'
        return {
          ...state,
          matrix,
          winner,
          valueCurrent
        }
      } else {
        return state
      }
    }
    case CLEAN_GAME:
      return { ...state, matrix: [[], [], []], winner: '', valueCurrent: '' }
    default:
      return state
  }
}

const verifyWinner = matrix => {
  const winnerO = verifyWinnerPlayer('O', matrix)
  if (winnerO) {
    return '--O-- Vencedor!'
  }
  const winnerX = verifyWinnerPlayer('X', matrix)
  if (winnerX) {
    return '--X-- Vencedor!'
  }
  const isComplete = isGameComplete(matrix)
  if (isComplete) {
    return '--EMPATE--'
  }
  return ''
}

const isGameComplete = matrix => {
  var complete = true
  for (var x = 0; x < 3; x++) {
    if (matrix[x].length < 3) {
      complete = false
      break
    }
  }
  return complete
}

const verifyWinnerPlayer = (player, matrix) => {
  //horizontal
  for (var h = 0; h < 3; h++) {
    if (
      matrix[h][0] == player &&
      matrix[h][1] == player &&
      matrix[h][2] == player
    ) {
      return true
    }
  }

  //vertical
  for (var x = 0; x < 3; x++) {
    if (
      matrix[0][x] == player &&
      matrix[1][x] == player &&
      matrix[2][x] == player
    ) {
      return true
    }
  }

  //diagonal
  if (
    matrix[0][0] == player &&
    matrix[1][1] == player &&
    matrix[2][2] == player
  ) {
    return true
  }
  if (
    matrix[0][2] == player &&
    matrix[1][1] == player &&
    matrix[2][0] == player
  ) {
    return true
  }

  return false
}
