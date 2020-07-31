import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { MovieState } from "./state";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    currentMovie: null
  } as MovieState,
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    },
    setCurrentMovie(state, key) {
      state.currentMovie = state.movies.filter(movie => movie.key === key)[0];
    }
  },
  actions: {
    loadMovies({ commit }) {
      axios
        .get("./movie-data.json", {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          commit("setMovies", response.data);
        })
        .catch(error => {
          //TODO
        });
    }
  },
  modules: {}
});
