<template>
  <div class="d-flex flex-wrap">
    <div
      v-for="el in elements"
      :key="el"
      class="w-25 animateBlock bg-primary"
    ></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "BlocksComponent",
  computed: {
    ...mapState(["elements"]),
  },
};
</script>

<style lang="scss" scoped></style>
