<template>
  <v-item-group>
    <v-row>
      <v-col sm="3" cols="12">
        <v-img :src="getMovieImagePath" :alt="currentMovie.name"></v-img>
      </v-col>
      <v-col sm="9" cols="12">
        <h1 class="mb-4">{{ currentMovie.name }}</h1>
        <p>{{ currentMovie.description }}</p>
        <v-row>
          <v-col md="2" cols="12">
            <span class="pr-2 font-weight-bold">Rate</span>
          </v-col>
          <v-col md="10" cols="12">
            <v-icon small color="yellow darken-2">mdi-star</v-icon>
            {{ currentMovie.rate }}
          </v-col>
        </v-row>
        <v-row>
          <v-col md="2" cols="12">
            <span class="pr-2 font-weight-bold">Genres</span>
          </v-col>
          <v-col md="10" cols="12">
            <span v-for="genre in currentMovie.genres" :key="genre.id">
              <v-chip class="mr-2" color="primary" @click="handleClick">{{
                genre
              }}</v-chip>
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="2" cols="12">
            <span class="pr-2 font-weight-bold">Length</span>
          </v-col>
          <v-col md="10" cols="12">
            {{ currentMovie.length }}
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-item-group>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { MovieModel } from "@/models/movie.model";
import { getMovieImagePath } from "@/helpers";

@Component
export default class MovieDetail extends Vue {
  @Prop() private currentMovie!: MovieModel;
  get getMovieImagePath() {
    return getMovieImagePath(this.currentMovie.img);
  }
  handleClick(event: Event) {
    this.setSelectedGenre((event.target as HTMLElement).textContent);
    this.$router.push({ path: "/" });
  }
  setSelectedGenre(genre: string | null) {
    this.$store.commit("setSelectedGenre", genre);
  }
}
</script>
