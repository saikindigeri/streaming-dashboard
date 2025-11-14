'use client';


import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0  from-black via-black/70 to-transparent z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
         
          <span className="text-xl font-bold bg-red-500 px-3 rounded-sm">NetFlix</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-red-500 transition">Home</Link>
          <Link href="/" className="hover:text-red-500 transition">Movies</Link>
          <Link href="/" className="hover:text-red-500 transition">TV Shows</Link>
        </nav>
      </div>
    </header>
  );
}