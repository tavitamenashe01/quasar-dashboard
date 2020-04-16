export function updateTask(state, payload) {
  Object.assign(state.tasks[payload.id], payload.updates);
}

export function deleteTask(state, id) {
  Vue.delete(state.tasks, id);
}

export function addTask(state, payload) {
  Vue.set(state.tasks, payload.id, payload.task);
}
