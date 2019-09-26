import { addTodo } from './addTodo'
import { removeTodo } from './removeTodo'
import { combineReducers } from 'redux'

export const Reducers = combineReducers({
  addTodo: addTodo,
  removeTodo: removeTodo
})