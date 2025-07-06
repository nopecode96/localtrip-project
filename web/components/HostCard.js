// components/HostCard.js

import { CheckCircle, Star, Heart, HeartOff } from 'lucide-react';
import { useState } from 'react';


export default function HostCard({ host }) {
  // Fallback & flexible for API data
  const name = host.name || host.fullName || '-';
  const coverImage = host.coverImage || host.coverImageUrl || host.imageUrl || '/images/cover1.png';
  const avatar = host.avatar || host.avatarUrl || '/images/profile1.png';
  const city = typeof host.city === 'string' ? host.city : (host.city?.name || '-');
  const country = typeof host.country === 'string' ? host.country : (host.country?.name || '-');
  const languages = Array.isArray(host.languages) ? host.languages : (host.languages?.map?.(l => l.name) || []);
  const rating = typeof host.rating === 'number' ? host.rating : 0;
  const totalBookings = typeof host.totalBookings === 'number' ? host.totalBookings : (host._count?.bookings || 0);
  const isVerified = host.isVerified ?? host.verified ?? false;
  const isWishlistedInit = host.isWishlisted ?? false;
  const services = Array.isArray(host.services) ? host.services : [];

  const isTopRated = rating >= 4.8 && totalBookings >= 10;
  const [isWishlisted, setIsWishlisted] = useState(isWishlistedInit);
  const [animate, setAnimate] = useState(false);
  const handleToggleWishlist = () => {
    setIsWishlisted((prev) => !prev);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <div className="relative h-40">
        <img
          src={coverImage}
          alt={`${name} cover`}
          className="w-full h-full object-cover"
        />
        <button
          onClick={handleToggleWishlist}
          className={`absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:shadow-lg transition duration-300
            ${animate ? 'scale-125 shadow-2xl ring-2 ring-red-200/40' : ''}`}
        >
          {isWishlisted ? (
            <Heart className="text-red-500 transition-transform transition-colors duration-300" fill="currentColor" />
          ) : (
            <Heart className="text-gray-500 transition-transform transition-colors duration-300" fill="none" />
          )}
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <img
            src={avatar}
            alt={name}
            className="w-10 h-10 rounded-full object-cover border"
          />
          <div>
            <h3 className="text-sm font-semibold flex items-center gap-1">
              {name}
              {isVerified && (
                <CheckCircle className="w-4 h-4 text-blue-500" title="Verified Host" />
              )}
              {isTopRated && (
                <Star className="w-4 h-4 text-yellow-500" title="Top Rated Host" />
              )}
            </h3>
            <p className="text-xs text-gray-500">
              {city}, {country}
            </p>
          </div>
        </div>
        <div className="text-sm text-gray-600 mb-2">
          {languages.length > 0 ? languages.join(', ') : '-'}
        </div>
        <div className="text-sm font-medium text-dark">
          {services[0]?.title ? `${services[0].title} - Rp ${services[0].price?.toLocaleString?.() || '-'}` : '-'}
        </div>
        <div className="text-xs text-gray-500 mt-1">Rating: {rating}</div>
      </div>
    </div>
  );
}
