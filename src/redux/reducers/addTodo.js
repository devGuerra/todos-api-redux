const initialState = {
  todos: ''
};

export const addTodo = (state = initialState, action) => {
  switch (action.type){
    case "CLICK_UPDATE_VALUE":
      return {
        ...state,
        todos: action.todos
      }
    default:
      return state;
  }
}