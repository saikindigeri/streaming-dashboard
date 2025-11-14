import Image from 'next/image';
import Link from 'next/link';
import { TMDBMovie } from '@/types/tmdb';

interface HeroBannerProps {
  movie: TMDBMovie;
}

export default function HeroBanner({ movie }: HeroBannerProps) {
  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : '/placeholder-backdrop.jpg';

  return (
    <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      <Image
        src={backdropUrl}
        alt={movie.title}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 from-black via-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 p-8 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{movie.title}</h1>
        <p className="text-lg md:text-xl line-clamp-3 mb-6">{movie.overview}</p>
        <Link
          href={`/movie/${movie.id}`}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded transition"
        >
          Watch Now
        </Link>
      </div>
    </div>
  );
}