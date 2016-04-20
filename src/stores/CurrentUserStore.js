import AppDispatcher from '../dispatcher'
import SimpleStore from './SimpleStore'
import { SET_CURRENT_USER } from '../constants'

class CurrentUserStore extends SimpleStore {
  constructor(...args) {
    super(...args)

    this.dispatchToken = AppDispatcher.register((action) => {
      const { type, data } = action

      switch (type) {

        case SET_CURRENT_USER:
          this.__clear()
          this.__add(data)
          break;

        default: return
      }

      this.emitChange()
    })
  }
}

export default CurrentUserStore