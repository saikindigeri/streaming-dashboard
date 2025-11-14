import { TMDBListResponse, TMDBMovieDetails } from "@/types/tmdb";


const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = process.env.TMDB_BASE_URL || 'https://api.themoviedb.org/3';



export async function fetchFromTMDB<T>(endpoint: string): Promise<T> {
  const url = `${BASE_URL}${endpoint}&api_key=${API_KEY}`;
  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error(`TMDB API error: ${res.status}`);
  }

  return res.json();
}


export const getPopularMovies = () => 
  fetchFromTMDB<TMDBListResponse>('/movie/popular?language=en-US&page=1');

export const getTopRatedMovies = () => 
  fetchFromTMDB<TMDBListResponse>('/movie/top_rated?language=en-US&page=1');

export const getNowPlayingMovies = () => 
  fetchFromTMDB<TMDBListResponse>('/movie/now_playing?language=en-US&page=1');

export const getMovieDetails = (id: string) => 
  fetchFromTMDB<TMDBMovieDetails>(`/movie/${id}?language=en-US`);