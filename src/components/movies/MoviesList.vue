<template>
  <v-item-group>
    <v-container class="pa-0">
      <v-row>
        <v-col>
          <MoviesListSearch />
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
          <MoviesListItem :movie="movie" />
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MoviesListSearch from "@/components/movies/MoviesListSearch.vue";
import MoviesListItem from "@/components/movies/MoviesListItem.vue";

@Component({
  components: {
    MoviesListSearch,
    MoviesListItem
  }
})
export default class MoviesList extends Vue {
  get movies() {
    return this.$store.getters.filteredMovies;
  }
}
</script>
