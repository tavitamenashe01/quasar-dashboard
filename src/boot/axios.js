// import Vue from "vue";
// import axios from "axios";

// Vue.prototype.$http = axios;
// const token = localStorage.getItem("token");
// if (token) {
//   Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
// }

// We create our own axios instance and set a custom base URL.
// Note that if we wouldn't set any config here we do not need
// a named export, as we could just `import axios from 'axios'`
// const $http = axios.create({
//   const token = localStorage.getItem("token");
//   if (token) {
//     Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
//   },
//   baseURL: "http://127.0.0.1:3000"
// });

// for use inside Vue files through this.$axios
// Vue.prototype.$axios = $http;

// Here we define a named export
// that we can later use inside .js files:
// export { $http };

// const axiosInstance = axios.create({
//   baseURL: "https://api.example.com",
// });
// export default ({ Vue }) => {
//   Vue.prototype.$axios = axios;
// };
// export { axiosInstance };

import Vue from "vue";
import axios from "axios";

// We create our own axios instance and set a custom base URL.
// Note that if we wouldn't set any config here we do not need
// a named export, as we could just `import axios from 'axios'`
const axiosInstance = axios.create({
  token: localStorage.getItem("token"),
  if(token) {
    Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
  },
  baseURL: "http://localhost:3000"
});

// for use inside Vue files through this.$axios
Vue.prototype.$http = axiosInstance;

// Here we define a named export
// that we can later use inside .js files:
export { axiosInstance };
