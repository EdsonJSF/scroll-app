<template>
  <div :key="mouseWheel"></div>
  <LoremComponent />
  <LoremComponent class="paralax bg-success" />
  <LoremComponent />
  <LoremComponent class="paralax bg-success" />
  <LoremComponent />
  <LoremComponent class="paralax bg-success" />
  <LoremComponent />
</template>

<script>
import { mapState } from "vuex";

import LoremComponent from "@/components/paralax/LoremComponent.vue";

export default {
  name: "ParalaxComponent",
  components: {
    LoremComponent,
  },
  methods: {
    Paralax() {
      const els = document.querySelectorAll(".paralax");
      if (!els.length) return;

      for (const el of els) {
        this.isScrolledIntoView(el);
      }
    },
    isScrolledIntoView(el) {
      const rect = el.getBoundingClientRect();
      const elemTop = rect.top;
      const elemBottom = rect.bottom;

      /* Only completely visible elements return true */
      // const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;

      /* Partially visible elements return true: */
      const isVisible = elemTop < window.innerHeight && elemBottom >= 0;

      if (isVisible) {
        el.classList.remove("paralax");
        el.classList.add("animateBlock");
      }
    },
  },
  computed: {
    ...mapState(["mouseWheel"]),
  },
  updated() {
    this.Paralax();
  },
};
</script>

<style lang="scss" scoped>
.paralax {
  visibility: hidden !important;
  position: absolute !important;
}
</style>
