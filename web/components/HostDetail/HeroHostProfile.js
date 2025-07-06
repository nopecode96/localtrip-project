// components/HeroHostProfile.js

import React from 'react';
import { CheckCircle, Star } from 'lucide-react';

const HeroHostProfile = ({
  name,
  avatar,
  location,
  language,
  experience,
  coverImage,
  tagline,
  rating,
  totalReviews,
  isVerified,
  totalBookings
}) => {
  const isTopRated = rating >= 4.8 && totalBookings >= 10;

  return (
    <section
      className="relative bg-cover bg-center h-72 sm:h-96 flex items-center justify-center text-center"
      style={{ backgroundImage: `url('${coverImage || "/images/cover1.png"}')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Info Layer */}
      <div className="relative z-20 h-full flex flex-col justify-end px-6 pb-6 md:px-12 md:pb-10 text-white">
        <div className="flex items-center gap-4">
          <img
            src={avatar}
            alt={name}
            className="w-20 h-20 rounded-full border-4 border-white shadow-md"
          />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold leading-tight flex items-center gap-2">
              {name}
              {isVerified && <CheckCircle className="w-5 h-5 text-blue-400" title="Verified Host" />}
              {isTopRated && <Star className="w-5 h-5 text-yellow-400" title="Top Rated Host" />}
            </h1>
            <p className="text-sm md:text-base opacity-90">
              {location} • {language?.join(', ')} • {experience}+ yrs experience
            </p>
            {tagline && (
              <p className="mt-1 text-sm italic opacity-80">"{tagline}"</p>
            )}
          </div>
        </div>

        {/* Rating */}
        {rating && (
          <div className="mt-4 flex items-center gap-2 text-sm md:text-base">
            <span className="text-yellow-400 text-xl">★</span>
            <span className="font-medium">{rating}</span>
            <span className="opacity-75">({totalReviews} reviews)</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroHostProfile;
