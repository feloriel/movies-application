import { MovieModel } from "@/models/movie.model";

export interface MovieState {
  movies: Array<MovieModel>;
  currentMovie: MovieModel | null;
  filteredMovieByName: string;
}
