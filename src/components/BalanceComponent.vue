<template>
  <div :key="mouseWheel"></div>
  <div class="container d-flex justify-content-between">
    <div class="position-relative bg-primary balance balance1"></div>
    <div class="position-relative bg-primary balance balance2"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "BalanceComponent",
  data() {
    return {
      initialPos: 35,
      balance1: 35,
      balance2: 35,
    };
  },
  methods: {
    balance() {
      let velocity = 5;
      this.balance1 += this.mouseWheel * velocity;
      this.balance2 += this.mouseWheel * -velocity;

      if (this.balance1 <= 0) {
        this.balance1 = 0;
        this.balance2 = this.initialPos * 2;
      }
      if (this.balance2 <= 0) {
        this.balance1 = this.initialPos * 2;
        this.balance2 = 0;
      }
      this.changeBalance();
    },
    changeBalance() {
      let balance1 = document.querySelector(".balance1");
      let balance2 = document.querySelector(".balance2");
      balance1.style.top = `${this.balance1}vh`;
      balance2.style.top = `${this.balance2}vh`;
    },
  },
  computed: {
    ...mapState(["mouseWheel"]),
  },
  mounted() {
    this.changeBalance();
  },
  updated() {
    this.balance();
  },
};
</script>

<style lang="scss" scoped>
.balance {
  width: 5rem;
  height: 5rem;
  transition: all 1s;
}
</style>
