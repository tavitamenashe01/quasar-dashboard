import Vue from "vue";
import axios from "axios";

// Vue.prototype.$axios = axios;

Vue.prototype.$http = axios;
const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}


// const axiosInstance = axios.create({
//   baseURL: "https://api.example.com",
// });
// export default ({ Vue }) => {
//   Vue.prototype.$axios = axios;
// };
// export { axiosInstance };
