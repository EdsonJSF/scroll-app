<template>
  <div class="position-absolute bg-primary balance1" id="balance1"></div>
  <div class="position-absolute bg-primary balance2" id="balance2"></div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "BalanceComponent",
  methods: {
    ...mapActions(["balance"]),
  },
};
</script>

<style lang="scss" scoped>
.balance1,
.balance2 {
  width: 5rem;
  height: 5rem;
  transition: all 1s;
}
.balance1 {
  left: 10vw;
  top: 45vh;
}
.balance2 {
  right: 10vw;
  top: 45vh;
}
</style>
