<template>
  <MovieDetail v-if="currentMovie !== null" :currentMovie="currentMovie" />
  <h1 v-else>Loading</h1>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
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
  created() {
    this.setCurrentMovie();
  }
  setCurrentMovie() {
    this.$store.commit("setCurrentMovie", this.$route.params.key);
  }
}
</script>
