'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Stargazing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Exploring the Moon 🌕 through My Telescope🔭
      </h1>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Row 1 */}
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

        {/* Row 2 */}
        <Image 
          src="/M5.jpeg" 
          alt="Moon 5" 
          width={300} 
          height={200} 
          className="rounded-lg shadow-lg"
        />
        <video controls width="300" className="rounded-lg shadow-lg">
          <source src="/T2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Row 3 */}

        {/* New Video - from 3 days ago */}
        <video controls width="300" className="rounded-lg shadow-lg">
          <source src="/M6.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        
        <Image 
          src="/M4.jpg" 
          alt="Moon 4" 
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
        
      </div>

      {/* Back to Home */}
      <Link href="/" className="text-blue-500 underline text-lg">
        ← Back to Home
      </Link>
    </div>
  );
};

export default Stargazing;
