<template>
  <v-select
    hide-details
    clearable
    :value="selectedGenre"
    :items="movieGenres"
    @input="handleChange"
    label="Select genre"
  ></v-select>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { genreType } from "@/models/movie.model";

@Component
export default class MoviesListFilter extends Vue {
  movieGenres = Object.values(genreType);
  get selectedGenre() {
    return this.$store.state.selectedGenre;
  }
  handleChange(value: string) {
    this.setSelectedGenre(value);
  }
  setSelectedGenre(genre: string) {
    if (this.$store.state.selectedTitle) {
      this.$store.commit("clearSelectedTitle");
    }
    this.$store.commit("setSelectedGenre", genre);
  }
}
</script>
