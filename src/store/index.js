import { createStore } from "vuex";
import router from "../router";

export default createStore({
  state: {
    elements: 0,
    balance1: 44,
    balance2: 44,
  },
  mutations: {
    resetAll(state) {
      state.elements = 0;
      state.balance1 = 44;
      state.balance2 = 44;
    },

    putElements(state, data) {
      state.elements += data;
    },

    changeBalance(state, balance) {
      state.balance1 += balance.data * balance.velocity;
      state.balance2 += balance.data * -balance.velocity;
    },
    changeBalance1(state) {
      state.balance1 = 0;
      state.balance2 = 88;
    },
    changeBalance2(state) {
      state.balance1 = 88;
      state.balance2 = 0;
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
      if (funcion === "balance") dispatch("balance", mouseData - 1);
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

    balance({ state, commit }, data) {
      let config = {
        velocity: 5,
        data: data,
      };
      commit("changeBalance", config);

      if (state.balance1 <= 0) commit("changeBalance1");
      if (state.balance2 <= 0) commit("changeBalance2");

      let balance1 = document.querySelector(".balance1");
      let balance2 = document.querySelector(".balance2");
      balance1.style.top = `${state.balance1}vh`;
      balance2.style.top = `${state.balance2}vh`;
    },
  },
});
