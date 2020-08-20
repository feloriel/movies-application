<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col>
        <div class="text-center error-message">
          <span>Oops! Page not found</span>
          <span class="error-message--404">404</span>
          <span>Sorry, but the page you requested was not found</span>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PageNotFound extends Vue {}
</script>

<style scoped lang="scss">
.error-message {
  span {
    display: block;
    margin-bottom: 16px;
    font-weight: bold;
    text-transform: uppercase;
  }
  &--404 {
    font-size: 136px;
    line-height: 1;
  }
}
</style>
