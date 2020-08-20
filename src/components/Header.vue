<template>
  <v-app-bar app flat color="primary">
    <v-container class="pa-0 d-flex align-center">
      <v-btn text @click="handleClick" dark :aria-label="appName">{{
        appName
      }}</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="switchTheme" aria-label="Switch theme">
        <v-icon :color="themeIconColor">{{ themeIcon }}</v-icon>
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  dark = false;
  get themeIconColor() {
    return this.dark ? "yellow darken-2" : "white";
  }
  get themeIcon() {
    return this.dark ? "mdi-lightbulb-on" : "mdi-lightbulb-outline";
  }
  @Prop() private appName!: string;

  handleClick() {
    if (this.$route.name !== "Movies") {
      this.$router.push({ path: "/" });
    }
    this.$store.commit("clearSelectedGenre");
    this.$store.commit("clearSelectedTitle");
  }
  switchTheme() {
    this.dark = !this.dark;
    this.$vuetify.theme.dark = this.dark;
  }
}
</script>
