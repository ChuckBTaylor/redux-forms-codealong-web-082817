export default function manageTodo(state = {
  todos: ["buy groceries"],
}, action) {
  switch(action.type){
    case "ADD_TODO":
      return {...state, todos: state.todos.concat(action.payload)}
    default:
      return state
  }
}
