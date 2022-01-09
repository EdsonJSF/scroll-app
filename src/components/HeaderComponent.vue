<template>
  <div id="HeaderComponent">
    <span v-for="(route, index) in routes" :key="index" :to="route.path">
      <span v-if="index"> | </span>
      <router-link :to="route.path">
        {{ route.name }}
      </router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      routes: [],
    };
  },
  created() {
    /* Adds an array routes from router */
    this.$router.options.routes.map((route, index) => {
      if (index) {
        this.routes.push({ name: route.name, path: route.path });
      }
    });
  },
};
</script>

<style lang="scss" scoped>
#HeaderComponent {
  padding: 30px;

  a {
    font-weight: bold;
    color: var(--bs-primary);

    &.router-link-exact-active {
      color: var(--bs-success);
    }
  }
}
</style>
