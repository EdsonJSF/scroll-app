<template>
  <div class="container">
    <div class="card m-5 p-5">
      <div class="card-body">
        <h1 class="card-title">Scroll App</h1>
        <h6 class="card-subtitle mb-2 text-muted">
          Una aplicación que detecta el uso de la rueda del ratón
        </h6>
        <p class="card-text">
          Navegue entre páginas y compruebe las distintas funciones
        </p>
        <router-link
          v-for="(route, index) in routes"
          :key="index"
          :to="route.path"
          class="card-link"
          >{{ route.name }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HomeComponent",
  computed: {
    ...mapState(["routes"]),
  },
};
</script>

<style lang="scss" scoped></style>
