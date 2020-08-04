import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { MovieState } from "./state";
import { GenreType } from "@/models/movie.model";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    currentMovie: null,
    selectedTitle: "",
    selectedGenre: ""
  } as MovieState,
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    },
    setCurrentMovie(state, key) {
      state.currentMovie =
        state.movies.find(movie => movie.key === key) ?? null;
    },
    setSelectedTitle(state, name) {
      state.selectedTitle = name ?? "";
    },
    setSelectedGenre(state, genre) {
      state.selectedGenre = genre ?? "";
    },
    clearSelectedTitle(state) {
      state.selectedTitle = "";
    },
    clearSelectedGenre(state) {
      state.selectedGenre = "";
    }
  },
  getters: {
    filteredMovies: state => {
      if (state.selectedTitle) {
        return state.movies.filter(movie =>
          movie.name.toLowerCase().includes(state.selectedTitle.toLowerCase())
        );
      } else if (state.selectedGenre) {
        const selectedGenre = state.selectedGenre as GenreType;
        return state.movies.filter(movie =>
          movie.genres.includes(selectedGenre)
        );
      } else {
        return state.movies;
      }
    }
  },
  actions: {
    async loadMovies({ commit }) {
      try {
        const response = await axios.get("./movie-data.json", {
          headers: {
            "Content-Type": "application/json"
          }
        });
        commit("setMovies", response.data);
      } catch (error) {
        throw new Error(`Error while getting movies from API ${error}`);
      }
    }
  },
  modules: {}
});
