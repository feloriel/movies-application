<template>
  <v-text-field
    hide-details
    clearable
    :value="selectedTitle"
    @input="handleChange"
    label="Search by title"
    prepend-inner-icon="mdi-magnify"
    autocomplete="off"
  ></v-text-field>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MoviesListSearch extends Vue {
  get selectedTitle() {
    return this.$store.state.selectedTitle;
  }
  handleChange(value: string) {
    this.setSelectedTitle(value);
  }
  setSelectedTitle(name: string) {
    if (this.$store.state.selectedGenre) {
      this.$store.commit("clearSelectedGenre");
    }
    this.$store.commit("setSelectedTitle", name);
  }
}
</script>
