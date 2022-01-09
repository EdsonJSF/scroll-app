<template>
  <HeaderComponent />
  <router-view />
</template>

<script>
import { mapActions } from "vuex";

import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
  },
  methods: {
    ...mapActions(["mouseWheelAction"]),
  },
  created() {
    /* Add the event listeners for each event. */
    document.addEventListener("wheel", this.mouseWheelAction);
    document.addEventListener("mousewheel", this.mouseWheelAction);
    document.addEventListener("DOMMouseScroll", this.mouseWheelAction);
  },
};
</script>

<style lang="scss">
@import "./assets/scss/custom.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
