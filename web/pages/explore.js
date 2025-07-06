import { useState } from 'react';
import { useRouter } from 'next/router';
import HostCard from '../components/HostCard';
import FilterBar from '../components/FilterBar';
import NavbarBase from '../components/Navbar/NavbarBase';
import Footer from '../components/Footer';

const mockHosts = [
  {
    id: 1,
    slug: 'dina-rahma',
    name: 'Dina Rahma',
    city: 'Bali',
    country: 'Indonesia',
    coverImage: '/images/cover1.png',
    avatar: '/images/profile1.png',
    languages: ['English', 'Bahasa'],
    rating: 4.9,
    isVerified: true,
    services: [{ type: 'PHOTOGRAPHER', title: 'Vacation Photo Session', price: 600_000 }],
  },
  {
    id: 2,
    slug: 'arif-wijaya',
    name: 'Arif Wijaya',
    city: 'Yogyakarta',
    country: 'Indonesia',
    avatar: '/images/profile2.png',
    coverImage: '/images/cover2.png',
    languages: ['Bahasa'],
    rating: 4.7,
    isVerified: true,
    services: [{ type: 'TOUR_GUIDE', title: 'Cultural Walking Tour', price: 450_000 }],
  },
  {
    id: 3,
    slug: 'naoko-tanaka',
    name: 'Naoko Tanaka',
    city: 'Kyoto',
    country: 'Japan',
    avatar: '/images/profile3.png',
    coverImage: '/images/cover3.png',
    languages: ['Japanese', 'English'],
    rating: 4.8,
    isVerified: true,
    services: [
      { type: 'PHOTOGRAPHER', title: 'Pre-wedding Shoot', price: 1_000_000 },
      { type: 'TOUR_GUIDE', title: 'Hidden Kyoto Walk', price: 800_000 },
    ],
  },
  {
    id: 4,
    slug: 'naoko-tanaka',
    name: 'Naoko Tanaka',
    city: 'Kyoto',
    country: 'Japan',
    avatar: '/images/profile3.png',
    coverImage: '/images/cover3.png',
    languages: ['Japanese', 'English'],
    rating: 4.8,
    isVerified: true,
    services: [
      { type: 'PHOTOGRAPHER', title: 'Pre-wedding Shoot', price: 1_000_000 },
      { type: 'TOUR_GUIDE', title: 'Hidden Kyoto Walk', price: 800_000 },
    ],
  },
  {
    id: 5,
    slug: 'naoko-tanaka',
    name: 'Naoko Tanaka',
    city: 'Kyoto',
    country: 'Japan',
    avatar: '/images/profile3.png',
    coverImage: '/images/cover3.png',
    languages: ['Japanese', 'English'],
    rating: 4.8,
    isVerified: true,
    services: [
      { type: 'PHOTOGRAPHER', title: 'Pre-wedding Shoot', price: 1_000_000 },
      { type: 'TOUR_GUIDE', title: 'Hidden Kyoto Walk', price: 800_000 },
    ],
  },
  {
    id: 6,
    slug: 'naoko-tanaka',
    name: 'Naoko Tanaka',
    city: 'Kyoto',
    country: 'Japan',
    avatar: '/images/profile3.png',
    coverImage: '/images/cover3.png',
    languages: ['Japanese', 'English'],
    rating: 4.8,
    isVerified: true,
    services: [
      { type: 'PHOTOGRAPHER', title: 'Pre-wedding Shoot', price: 1_000_000 },
      { type: 'TOUR_GUIDE', title: 'Hidden Kyoto Walk', price: 800_000 },
    ],
  },
];

export default function ExplorePage() {
  const router = useRouter();

  const [filters, setFilters] = useState({
    country: '',
    city: '',
    type: '',
    language: '',
  });

  const filteredHosts = mockHosts.filter((host) => {
    const matchesCountry = filters.country === '' || host.country === filters.country;
    const matchesCity = filters.city === '' || host.city === filters.city;
    const matchesLanguage = filters.language === '' || host.languages.includes(filters.language);
    const matchesType = filters.type === '' || host.services.some((s) => s.type === filters.type);
    return matchesCountry && matchesCity && matchesLanguage && matchesType;
  });

  const handleClickCard = (slug) => {
    router.push(`/host/${slug}`);
  };

  return (
    <div>
      <NavbarBase />
      {/* Hero */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-24"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Browse Hosts</h1>
          <p className="text-lg">
            Book a local tour guide or freelance photographer for your next adventure.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <FilterBar filters={filters} setFilters={setFilters} />

        {filteredHosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredHosts.map((host) => (
              <div
                key={host.id}
                className="cursor-pointer"
                onClick={() => handleClickCard(host.slug)}
              >
                <HostCard host={host} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No hosts found for your filters.</p>
        )}
      </div>
      <Footer />
    </div>
  );
}
