import { combineReducers } from 'redux'
import todos from '../modules/todo/reducer'

const reducer = combineReducers({
    todos
})

export default reducer