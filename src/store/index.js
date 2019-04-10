import {createStore, applyMiddleware} from 'redux'
import promise from 'redux-promise'
import {createLogger} from 'redux-logger'

import reducer from './rootReducer'

const logger = createLogger({
    collapsed: true
})

const state = {
    hello: 'world'
}

export default createStore(
    reducer,
    state,
    applyMiddleware(promise,logger)
)