<template>
  <v-text-field
    hide-details
    clearable
    :value="filteredMovieByName"
    @input="handleChange"
    label="Search"
    prepend-inner-icon="mdi-magnify"
  ></v-text-field>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Search extends Vue {
  get filteredMovieByName() {
    return this.$store.state.filteredMovieByName;
  }
  handleChange(value: string) {
    this.setFilteredMovieByName(value);
  }
  setFilteredMovieByName(name: string) {
    this.$store.commit("setFilteredMovieByName", name);
  }
}
</script>
