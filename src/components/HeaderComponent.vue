<template>
  <div id="nav">
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
    this.$router.options.routes.map((route, index) => {
      if (index) {
        this.routes.push({ name: route.name, path: route.path });
      }
    });
  },
};
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
