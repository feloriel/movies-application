<template>
  <v-app-bar app color="primary" dark>
    <router-link to="/">
      <span class="title ml-3 mr-5">Movies Application</span>
    </router-link>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
.v-application a {
  color: #ffffff;
  text-decoration: none;
}
</style>
