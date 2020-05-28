import { combineReducers } from  'redux'
import { reducer as form } from 'redux-form'
import events from './events'

// 全てのreducerを合体させる
export default combineReducers ({ events, form, form })