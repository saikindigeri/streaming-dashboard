

import { getPopularMovies, getTopRatedMovies, getNowPlayingMovies } from '@/lib/tmdb';
import HeroBanner from './components/HeroBanner';
import MovieRow from './components/MovieRow';

export default async function HomePage() {
  const [popular, topRated, nowPlaying] = await Promise.all([
    getPopularMovies(),
    getTopRatedMovies(),
    getNowPlayingMovies(),
  ]);

  const heroMovie = popular.results[0];
console.log("heroMovie",heroMovie)
  return (
    <>
      <HeroBanner movie={heroMovie} />
      <div className="space-y-8 py-8 px-3">
        <MovieRow movies={nowPlaying.results.slice(0, 15)} categoryTitle="Now Playing" />
        <MovieRow movies={popular.results.slice(0, 15)} categoryTitle="Popular" />
        <MovieRow movies={topRated.results.slice(0, 15)} categoryTitle="Top Rated" />
      </div>
    </>
  );
}