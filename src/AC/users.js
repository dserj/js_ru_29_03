import AppDispatcher from '../dispatcher'
import { SET_CURRENT_USER } from '../constants'

export function setCurrentUser(name) {
  AppDispatcher.dispatch({
    type: SET_CURRENT_USER,
    data: {
      id: Date.now(),
      name: name
    }
  })
}