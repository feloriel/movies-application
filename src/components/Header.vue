<template>
  <v-app-bar app color="primary" dark>
    <router-link to="/">
      <span class="title ml-3 mr-5">{{ appName }}</span>
    </router-link>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  @Prop() private appName!: string;
}
</script>

<style scoped lang="scss">
.v-application a {
  color: #ffffff;
  text-decoration: none;
}
</style>
