<template>
  <router-link :to="moviePath">
    <v-card class="fill-height">
      <v-img
        :src="getMovieImagePath"
        :alt="movie.name"
        :aspect-ratio="3 / 4"
        lazy-src="images/placeholder.jpg"
      >
      </v-img>
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
import { getMovieImagePath } from "@/helpers";

@Component
export default class MoviesListItem extends Vue {
  @Prop() private movie!: MovieModel;
  get getMovieImagePath() {
    return getMovieImagePath(this.movie.img);
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

.v-application a {
  text-decoration: none;
}
</style>
