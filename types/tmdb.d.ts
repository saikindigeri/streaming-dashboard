
export interface TMDBMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
}

export interface TMDBMovieDetails extends TMDBMovie {
  genres: { id: number; name: string }[];
  runtime: number;
  tagline: string;
}

export interface TMDBListResponse {
  results: TMDBMovie[];
  page: number;
  total_pages: number;
  total_results: number;
}