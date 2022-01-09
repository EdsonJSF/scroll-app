import { createStore } from "vuex";
import router from "../router";

export default createStore({
  state: {
    mouseWheel: null,
    elements: 0,
  },
  mutations: {
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
      commit("updateMouseWheel", mouseData);

      /* Select Function */
      let funcion = router.currentRoute._value.name;
      if (funcion === "blocks") dispatch("blocks", mouseData + 1);
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
