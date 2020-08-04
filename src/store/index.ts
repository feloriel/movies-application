import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { MovieState } from "./state";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    currentMovie: null,
    filteredMovieByName: ""
  } as MovieState,
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    },
    setCurrentMovie(state, key) {
      state.currentMovie =
        state.movies.find(movie => movie.key === key) ?? null;
    },
    setFilteredMovieByName(state, name) {
      state.filteredMovieByName = name ?? "";
    }
  },
  getters: {
    filteredMovies: state => {
      return state.movies.filter(movie =>
        movie.name.includes(state.filteredMovieByName)
      );
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
