import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: []
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
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
