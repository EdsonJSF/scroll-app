<template>
  <nav id="HeaderComponent" class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link :to="routes[0]" class="navbar-brand"
        ><img src="../assets/logo.png" alt="home icon"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link
            v-for="(route, index) in routes"
            :key="index"
            :to="route.path"
            class="nav-link"
            >{{ route.name }}</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HeaderComponent",
  computed: {
    ...mapState(["routes"]),
  },
};
</script>

<style lang="scss" scoped>
#HeaderComponent {
  a {
    img {
      width: 2rem;
    }
    &.router-link-exact-active {
      color: var(--bs-white);
    }
  }
}
</style>
