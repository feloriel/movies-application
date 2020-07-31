<template>
  <v-item-group>
    <v-container class="pa-0">
      <v-row>
        <v-col>
          {{ currentMovie.name }}
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { MovieModel } from "@/models/movie.model";

@Component
export default class MovieDetail extends Vue {
  @Prop() private currentMovie!: MovieModel;
}
</script>
