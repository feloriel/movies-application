import { MovieModel, GenreType } from "@/models/movie.model";

export interface MovieState {
  movies: Array<MovieModel>;
  currentMovie: MovieModel | null;
  selectedTitle: string;
  selectedGenre: GenreType | "";
}
