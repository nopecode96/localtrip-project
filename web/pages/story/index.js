'use client';

import Navbar from '@/components/Navbar/NavbarBase';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const stories = [
  {
    title: 'Sunset Trek with a Local in Ubud',
    category: 'Traveler Story',
    location: 'Ubud, Bali',
    date: 'May 2025',
    excerpt: 'Kami tidak cuma foto — kami bernyanyi, masak, dan melihat Bali dari mata lokal…',
    image: '/images/bali.jpg',
    author: 'Rie H.',
  },
  {
    title: 'From Tokyo Streets to Sakura Trails',
    category: 'Traveler Story',
    location: 'Tokyo, Japan',
    date: 'April 2025',
    excerpt: 'Jalan kaki pagi hari di Shibuya lalu berakhir di kaki Gunung Takao. Magical.',
    image: '/images/tokyo.jpg',
    author: 'Aiko N.',
  },
  {
    title: '5 Tips Jadi Host Fotogenik',
    category: 'Host Tips',
    location: 'Worldwide',
    date: 'June 2025',
    excerpt: 'Host bukan cuma ramah, tapi juga tahu angle terbaik buat tamunya.',
    image: '/images/paris.jpg',
    author: 'Budi S.',
  },
];

const categories = ['All', 'Traveler Story', 'Host Tips'];
const locations = ['All', 'Ubud, Bali', 'Tokyo, Japan', 'Worldwide'];

export default function StoryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const filteredStories = stories.filter((story) => {
    const matchCategory = selectedCategory === 'All' || story.category === selectedCategory;
    const matchLocation = selectedLocation === 'All' || story.location === selectedLocation;
    return matchCategory && matchLocation;
  });

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 px-4 py-8 md:px-12">
        {/* Hero */}
        <section className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Real Stories. Real People.</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            From Bali to Tokyo — discover unforgettable moments shared by travelers & local hosts.
          </p>
        </section>

        {/* Filter */}
        <section className="mb-8 flex flex-col md:flex-row md:items-center gap-4 justify-center">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </section>

        {/* Stories Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map((story, i) => (
            <Link
              key={i}
              href={`/story/${i}`}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition"
            >
              <div className="w-full h-48 relative">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-blue-600 font-medium">{story.category}</p>
                <h3 className="text-lg font-semibold mt-1 mb-1 line-clamp-2">{story.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{story.excerpt}</p>
                <p className="text-xs text-gray-400 mt-2">
              By {story.author} · {story.location} · {story.date}
            </p>
              </div>
            </Link>
          ))}
        </section>

        {/* Optional CTA */}
        <div className="text-center mt-16">
          <h2 className="text-xl font-semibold mb-2">Got a story to share?</h2>
          <p className="text-gray-500 mb-4">Let others feel the magic of your LocalTrip experience.</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Become a Contributor
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}

function DashboardCard({ label, value, icon }) {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex items-center gap-4">
      <div>{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-lg font-semibold">{value}</p>
      </div>
    </div>
  );
}
