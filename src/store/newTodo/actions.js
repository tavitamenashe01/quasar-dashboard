export function addTodo(context, payload) {
  context.commit("ADD_TODO", payload);
}

export function toggleTodo(context, payload) {
  context.commit("TOGGLE_TODO", payload);
}

export function deleteTodo(context, payload) {
  context.commit("DELETE_TODO", payload);
}
