import { INCREMENT } from '../constants'

export default (state = 0, action) => {

    console.log('counter reducer')
    
    const { type, data } = action
    return type == INCREMENT ? state - 5 : state
}
