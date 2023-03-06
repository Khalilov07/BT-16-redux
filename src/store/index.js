import {createStore} from 'redux'
import { cashReducer } from './cashReducer'
import { customerReducer } from './customerReducer'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    cashR: cashReducer,
    customerR: customerReducer
})


export const store = createStore(rootReducers)