import { createStore } from "vuex";
import router from "../router";

export default createStore({
  state: {
    elements: 0,
  },
  mutations: {
    resetAll(state) {
      state.elements = 0;
    },
    putElements(state, data) {
      state.elements += data;
    },
  },
  actions: {
    resetState({ commit }) {
      commit("resetAll");
    },

    mouseWheelAction({ dispatch }, e) {
      /* Check whether the wheel event is supported. */
      let supportsWheel = e.type == "wheel" ? true : false;
      if (!supportsWheel) return;

      /* Determine the direction of the scroll (< 0 → up, > 0 → down). */
      let mouseData = (e.deltaY || e.wheelDelta || e.detail) >> 10 || 1;
      mouseData += 1;

      /* Select Function */
      let funcion = router.currentRoute._value.name;
      if (funcion === "blocks") dispatch("blocks", mouseData);
    },

    blocks({ state, commit }, data) {
      if (data) {
        if (state.elements < 16) {
          commit("putElements", 1);
        }
      } else {
        if (state.elements) {
          commit("putElements", -1);
        }
      }
    },
  },
});
