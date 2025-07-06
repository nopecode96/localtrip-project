'use client';

import Navbar from '@/components/Navbar/NavbarBase';
import Footer from '@/components/Footer';
import { Calendar, CreditCard, Users, BadgeCheck, Star, Camera, Clock } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { label: 'Total Bookings', value: 8, icon: <Calendar className="text-blue-500 w-6 h-6" /> },
  { label: 'Total Paid', value: 'Rp 4.200.000', icon: <CreditCard className="text-green-500 w-6 h-6" /> },
  { label: 'Hosts Booked', value: 5, icon: <Users className="text-purple-500 w-6 h-6" /> },
  { label: 'Verified Hosts', value: 3, icon: <BadgeCheck className="text-yellow-500 w-6 h-6" /> },
];

export default function DashboardTraveller() {
  const user = { name: 'Rie' };

  return (
    <>
      <Navbar />
      <main className="bg-gray-50 min-h-screen px-4 py-6 md:px-8 lg:px-12">
        {/* Welcome */}
        <h1 className="text-2xl font-semibold mb-6">Welcome back, {user.name}!</h1>

        {/* Stats */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((stat) => (
            <DashboardCard key={stat.label} {...stat} />
          ))}
        </section>

        {/* Upcoming Booking */}
        <section className="mb-10">
          <h2 className="text-lg font-medium mb-4">Your Upcoming Booking</h2>
          <div className="bg-white shadow rounded-lg p-4 flex flex-col md:flex-row gap-4 items-start md:items-center">
            <Image
              src="/images/profile2.png"
              alt="Wayan"
              width={80}
              height={80}
              className="rounded-lg object-cover"
            />
            <div className="flex-1">
              <p className="font-semibold">Photo Session with Wayan</p>
              <p className="text-sm text-gray-500">Uluwatu, Bali</p>
              <p className="text-sm mt-1 flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" /> 12 August 2025 at 4:00 PM
              </p>
            </div>
            <button className="text-sm text-blue-600 hover:underline">View Details</button>
          </div>
        </section>

        {/* Favorite Hosts */}
        <section className="mb-10">
          <h2 className="text-lg font-medium mb-4">Your Favorite Hosts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {['Naoko', 'Arif', 'Dina'].map((name, i) => (
              <div key={i} className="bg-white shadow rounded-lg p-4 flex items-center gap-4">
                <Image
                  src={`/images/profile${i + 1}.png`}
                  alt={name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{name} Tanaka</p>
                  <p className="text-sm text-gray-500">4 bookings · ⭐ 4.9</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Review Reminder */}
        <section className="mb-10">
          <h2 className="text-lg font-medium mb-4">Pending Reviews</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm">You have <span className="font-semibold">2 reviews</span> to write.</p>
            <button className="mt-2 inline-block text-sm bg-yellow-500 text-white px-4 py-1.5 rounded hover:bg-yellow-600">
              Write Reviews Now
            </button>
          </div>
        </section>

        {/* Suggested Experiences */}
        <section className="mb-20">
          <h2 className="text-lg font-medium mb-4">Suggested For You</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white shadow rounded-lg p-4">
                <Image
                  src="/images/cover2.png"
                  alt="Experience"
                  width={400}
                  height={240}
                  className="rounded-md mb-2 object-cover"
                />
                <p className="font-semibold">Pre-wedding in Kyoto</p>
                <p className="text-sm text-gray-500">with Naoko Tanaka · Rp 1.000.000</p>
                <div className="flex items-center gap-1 text-sm mt-1">
                  <Star className="w-4 h-4 text-yellow-400" /> 4.8
                </div>
              </div>
            ))}
          </div>
        </section>
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
