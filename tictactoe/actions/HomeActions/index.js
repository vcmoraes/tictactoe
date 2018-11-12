import { SET_SELECTED_ITEM, CLEAN_GAME } from './constants'

export const setSelectedItem = (x, y) => {
  return {
    type: SET_SELECTED_ITEM,
    x,
    y
  }
}

export const cleanGame = () => {
  return {
    type: CLEAN_GAME
  }
}
