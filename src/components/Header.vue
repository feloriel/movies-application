<template>
  <v-app-bar app color="primary" dark>
    <span class="title ml-3 mr-5">Movies Application</span>
    <v-spacer></v-spacer>
    <v-text-field
      solo-inverted
      flat
      hide-details
      label="Search"
      prepend-inner-icon="mdi-magnify"
    ></v-text-field>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>
