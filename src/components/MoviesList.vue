<template>
  <v-item-group>
    <v-container class="pa-0">
      <v-row>
        <v-col>
          <Search />
        </v-col>
      </v-row>
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
import Search from "@/components/Search.vue";
import Movie from "@/components/Movie.vue";

@Component({
  components: {
    Search,
    Movie
  }
})
export default class MoviesList extends Vue {
  get movies() {
    return this.$store.getters.filteredMovies;
  }
}
</script>
