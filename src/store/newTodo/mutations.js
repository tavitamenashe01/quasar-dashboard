export function ADD_TODO(state, payload) {
  const newTask = {
    id: payload.newId,
    task: payload.task,
    completed: false
  };
  state.todos.unshift(newTask);
}

export function TOGGLE_TODO(state, payload) {
  const item = state.todos.find(todo => todo.id === payload);
  item.completed = !item.completed;
}

export function DELETE_TODO(state, payload) {
  const index = state.todos.findIndex(todo => todo.id === payload);
  state.todos.splice(index, 1);
}
