// app/components/MovieRow.tsx
'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MovieRowProps {
  movies: Array<{
    id: number;
    title: string;
    poster_path: string | null;
  }>;
  categoryTitle: string;
}

export default function MovieRow({ movies, categoryTitle }: MovieRowProps) {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainer.current) return;
    const { current } = scrollContainer;
    const scrollAmount = current.clientWidth * 0.75; 
    current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="group">
      <h3 className="mb-3 text-lg font-semibold">{categoryTitle}</h3>

      <div className="relative">
        {/* left arrow – hidden until hover */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-0 z-10 flex h-full items-center bg-black/60 px-1 opacity-0 transition-opacity group-hover:opacity-100"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-8 w-8 text-white" />
        </button>

        {/* right arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-0 z-10 flex h-full items-center bg-black/60 px-1 opacity-0 transition-opacity group-hover:opacity-100"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-8 w-8 text-white" />
        </button>

        {/* scrollable area */}
        <div
          ref={scrollContainer}
          className="flex gap-3 overflow-x-auto py-4 "
        >
          {movies.map((m) => {
            const posterUrl =
              m.poster_path
                ? `https://image.tmdb.org/t/p/w342${m.poster_path}`
                : '/placeholder-poster.jpg';

            return (
              <Link
                key={m.id}
                href={`/movie/${m.id}`}
                className="block flex-none"
              >
                <Image
                  src={posterUrl}
                  alt={m.title}
                  width={200}
                  height={300}
                  className="rounded-md transition-transform hover:scale-105"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}