import { createStore } from "vuex";
import router from "../router";

export default createStore({
  state: {
    routes: [],
    mouseWheel: null,
    elements: 0,
  },
  mutations: {
    pushRoute(state, data) {
      state.routes.push({ name: data.name, path: data.path });
    },

    updateMouseWheel(state, data) {
      state.mouseWheel = null;
      state.mouseWheel = data;
    },

    resetAll(state) {
      state.elements = 0;
    },

    putElements(state, data) {
      state.elements += data;
    },
  },
  actions: {
    /* Adds an array routes from router */
    addRoutes({ commit }) {
      router.options.routes.map((route, index) => {
        if (index) {
          commit("pushRoute", route);
        }
      });
    },

    resetState({ commit }) {
      commit("resetAll");
    },

    /* The function that will run when the events are triggered. */
    mouseWheelAction({ commit, dispatch }, e) {
      /* Check whether the wheel event is supported. */
      let supportsWheel = e.type == "wheel" ? true : false;
      if (!supportsWheel) return;

      /* Determine the direction of the scroll (< 0 → up, > 0 → down). */
      let mouseData = (e.deltaY || e.wheelDelta || e.detail) >> 10 || 1;
      commit("updateMouseWheel", mouseData); // 1 = down || -1 = up

      /* Select Function */
      let funcion = router.currentRoute._value.name;
      if (funcion === "blocks") dispatch("blocks", mouseData);
    },

    /* Add or remove elements to push blocks */
    blocks({ state, commit }, data) {
      if (state.elements >= 0 && state.elements < 16) {
        commit("putElements", data);
      }
    },
  },
});
