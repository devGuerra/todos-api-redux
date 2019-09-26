import { CLICK_UPDATE_VALUE } from './actionTypes';

export const addTodo = value => ({
  type: CLICK_UPDATE_VALUE,
  todos: value
});