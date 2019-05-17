import {createStore, applyMiddleware} from 'redux'
import promise from 'redux-promise'
import {createLogger} from 'redux-logger'

import reducer from './rootReducer'

const logger = createLogger({
    collapsed: true
})

export default createStore(
    reducer,
    applyMiddleware(promise,logger)
)