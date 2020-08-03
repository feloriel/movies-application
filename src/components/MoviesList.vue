<template>
  <v-item-group>
    <v-container class="pa-0">
      <v-row>
        <v-col
          v-for="movie in movies"
          :key="movie.key"
          lg="2"
          md="3"
          sm="4"
          cols="6"
        >
          <Movie :movie="movie" />
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Movie from "@/components/Movie.vue";

@Component({
  components: {
    Movie
  }
})
export default class MoviesList extends Vue {
  get movies() {
    return this.$store.state.movies;
  }
}
</script>
