'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Stargazing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">My Glimpses of the Moon & Telescope 🔭🌕</h1>

      {/* Images */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Image 
          src="/T1.jpg" 
          alt="Telescope 1" 
          width={300} 
          height={200} 
          className="rounded-lg shadow-lg"
        />
        <Image 
          src="/M1.jpg" 
          alt="Moon 1" 
          width={300} 
          height={200} 
          className="rounded-lg shadow-lg"
        />
        <Image 
          src="/M2.jpg" 
          alt="Moon 2" 
          width={300} 
          height={200} 
          className="rounded-lg shadow-lg"
        />
        <Image 
          src="/M4.jpg" 
          alt="Moon 4" 
          width={300} 
          height={200} 
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Video */}
      <video controls width="400" className="rounded-lg shadow-lg mb-6">
        <source src="/M3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Back to Home */}
      <Link href="/" className="text-blue-500 underline text-lg">
        ← Back to Home
      </Link>
    </div>
  );
};

export default Stargazing;
