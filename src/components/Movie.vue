<template>
  <v-card>
    <v-img :src="moviePosterImagePath" :alt="movie.name"></v-img>
    <v-card-title class="text-body-1 break-word">{{ movie.name }}</v-card-title>
    <v-card-subtitle
      ><v-icon small color="yellow darken-2">mdi-star</v-icon>
      {{ movie.rate }}</v-card-subtitle
    >
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MoviesList extends Vue {
  @Prop() private movie!: any;
  get moviePosterImagePath() {
    return `images/movie-covers/${this.movie.img}`;
  }
}
</script>

<style scoped lang="scss">
.break-word {
  word-break: break-word;
}
</style>
