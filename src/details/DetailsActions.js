import * as api from '../api'

export const FETCH_ITEM = 'DETAILS/FETCH_ITEM'
export const RESET_STATE = 'DETAILS/RESET_STATE'
export const SET_ITEM = 'DETAILS/SET_ITEM'

export function fetchItem(id) {
  return {
    type: FETCH_ITEM,
    payload: api.fetchItem(id)
  }
}

export function resetState() {
  return {
    type: RESET_STATE
  }
}

export function setItem(item) {
  return {
    type: SET_ITEM,
    item
  }
}
