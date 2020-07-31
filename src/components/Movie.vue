<template>
  <router-link :to="moviePath">
    <v-card>
      <v-img :src="moviePosterImagePath" :alt="movie.name"></v-img>
      <v-card-title class="text-body-1 break-word">
        {{ movie.name }}
      </v-card-title>
      <v-card-subtitle>
        <v-icon small color="yellow darken-2">mdi-star</v-icon>
        {{ movie.rate }}
      </v-card-subtitle>
    </v-card>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { MovieModel } from "@/models/movie.model";

@Component
export default class MoviesList extends Vue {
  @Prop() private movie!: MovieModel;
  get moviePosterImagePath() {
    return `images/movie-covers/${this.movie.img}`;
  }
  get moviePath() {
    return `/movie/${this.movie.key}`;
  }
}
</script>

<style scoped lang="scss">
.break-word {
  word-break: break-word;
}
</style>
