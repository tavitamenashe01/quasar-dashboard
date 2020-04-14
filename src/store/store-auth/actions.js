import axios from 'axios';

export function login({ commit }, user) {
  return new Promise((resolve, reject) => {
    commit("auth_request");
    axios({
      url: "http://localhost:3000/login",
      data: user,
      method: "POST"
    })
      .then(resp => {
        const token = resp.data.token;
        const user = resp.data.user;
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = token;
        commit("auth_success", token, user);
        resolve(resp);
      })
      .catch(err => {
        commit("auth_error");
        localStorage.removeItem("token");
        reject(err);
      });
  });
}

export function register({ commit }, user) {
  return new Promise((resolve, reject) => {
    commit("auth_request");
    axios({
      url: "http://localhost:3000/register",
      data: user,
      method: "POST"
    })
      .then(resp => {
        const token = resp.data.token;
        const user = resp.data.user;
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = token;
        commit("auth_success", token, user);
        resolve(resp);
      })
      .catch(err => {
        commit("auth_error", err);
        localStorage.removeItem("token");
        reject(err);
      });
  });
}

export function logout({ commit }) {
  return new Promise((resolve, reject) => {
    commit("logout");
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    resolve();
  });
}
