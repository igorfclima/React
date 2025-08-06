export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview?: string;
  vote_average?: number;
  vote_count?: number;
  backdrop_path?: string;
  genre_ids?: number[];
  original_language?: string;
  original_title?: string;
  popularity?: number;
  video?: boolean;
  adult?: boolean;
}

export interface MovieContextType {
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movieId: number) => void;
  isFavorite: (movieId: number) => boolean;
}

export interface ApiResponse {
  results: Movie[];
  page?: number;
  total_pages?: number;
  total_results?: number;
}

export interface MovieCardProps {
  movie: Movie;
}
