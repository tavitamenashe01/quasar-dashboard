import Vue from 'vue'
import Vuex from 'vuex'

import todo from "./store-todo";
import auth from "./store-auth";
import newTodo from "./newTodo";

Vue.use(Vuex)

import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "",
    libraries: "places", // necessary for places input
    region: "uk,en"
  }
});

Vue.config.productionTip = false;
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      todo,
      auth,
      newTodo
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  });

  return Store
}
