<template>
  <MoviesList />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MoviesList from "@/components/movies/MoviesList.vue";

@Component({
  components: {
    MoviesList
  }
})
export default class Movies extends Vue {}
</script>
