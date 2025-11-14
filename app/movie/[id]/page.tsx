// app/movie/[id]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getMovieDetails } from '@/lib/tmdb';

interface PageProps {
  params: { id: string };
}

export default async function MovieDetailPage({ params }: PageProps) {
  let movie;
   const { id } = await params;
  try {
    movie = await getMovieDetails(id);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    notFound();
  }

  console.log("first",movie)

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w780${movie.poster_path}`
    : '/placeholder-poster.jpg';

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Image
            src={posterUrl}
            alt={movie.title}
            width={780}
            height={1170}
            className="rounded-lg shadow-2xl"
          />
        </div>
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">{movie.title}</h1>
          {movie.tagline && (
            <p className="text-xl text-red-500 italic">"{movie.tagline}"</p>
          )}
          <div className="flex items-center gap-4 text-sm">
            <span className="bg-yellow-500 text-black px-2 py-1 rounded font-bold">
              ★ {movie.vote_average.toFixed(1)}
            </span>
            <span>{new Date(movie.release_date).getFullYear()}</span>
            {movie.runtime && <span>{movie.runtime} min</span>}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Genres</h3>
            <div className="flex flex-wrap gap-2">
              {movie.genres.map((g) => (
                <span key={g.id} className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                  {g.name}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}