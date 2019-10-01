export default function todo(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        value: action.todo.title,
        id: state.length,
        completed: action.todo.completed
      }
      return [...state, newTodo];
    case "REMOVE_TODO":
      const newState = state.filter(item => item.id !== parseInt(action.todo))
      return [...newState]
    default:
      return state;
  }
}
