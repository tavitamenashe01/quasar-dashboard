import Vue from "vue";
import { uid } from "quasar";

const state = {
  tasks: {
  },
  tasksCalendar: {}
};
const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates);
  },
  deleteTask(state, id) {
    Vue.delete(state.tasks, id);
  },
  addTask(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task);
  },
  addTaskCalendar(state, payload) {
    Vue.set(state.tasksCalendar, payload.id, payload.taskCalendar);
  }
};
const actions = {
  updateTask({ commit }, payload) {
    commit("updateTask", payload);
  },
  deleteTask({ commit }, id) {
    commit("deleteTask", id);
  },
  addTask({ commit }, task) {
    let taskId = uid();
    let payload = {
      id: taskId,
      task: task
    };
    commit("addTask", payload);
  },
  addTaskCalendar({ commit }, taskCalendar) {
    let taskId = uid();
    let payload = {
      id: taskId,
      taskCalendar: taskCalendar
    };
    commit("addTaskCalendar", payload);
  }
};
const getters = {
  tasks: state => {
    return state.tasks;
  },
  tasksCalendar: state => {
    return state.tasksCalendar;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
