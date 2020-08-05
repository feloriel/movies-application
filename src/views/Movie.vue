<template>
  <MovieDetail v-if="currentMovie !== null" :currentMovie="currentMovie" />
  <div v-else>Loading</div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import MovieDetail from "@/components/movie/MovieDetail.vue";

@Component({
  components: {
    MovieDetail
  }
})
export default class Movie extends Vue {
  get currentMovie() {
    return this.$store.state.currentMovie;
  }
  get movies() {
    return this.$store.getters.filteredMovies;
  }
  created() {
    this.setCurrentMovie();
  }
  setCurrentMovie() {
    this.$store.commit("setCurrentMovie", this.$route.params.key);
  }
  @Watch("movies")
  onMoviesChanged() {
    this.setCurrentMovie();
  }
}
</script>
