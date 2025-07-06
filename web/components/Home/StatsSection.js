"use client";

import { FaCamera, FaUsers, FaMapMarkedAlt, FaRegSmile } from "react-icons/fa";
import React, { useEffect, useState } from "react";


const statsConfig = [
  {
    icon: <FaUsers className="text-blue-600 text-3xl mb-2" />,
    key: 'totalUsers',
    label: "Happy Travelers",
    delay: "100",
  },
  {
    icon: <FaMapMarkedAlt className="text-blue-600 text-3xl mb-2" />,
    key: 'totalDestinations',
    label: "Cities Covered",
    delay: "200",
  },
  {
    icon: <FaRegSmile className="text-blue-600 text-3xl mb-2" />,
    key: 'totalBookings',
    label: "Total Bookings",
    delay: "300",
  },
];



function useCountUpArray(targets, duration) {
  const [counts, setCounts] = useState(() => [...targets]);

  useEffect(() => {
    let start = [...targets];
    setCounts(start);
    if (duration === 0) return;
    const increments = targets.map((end, i) => (end - start[i]) / (duration / 16));
    const timer = setInterval(() => {
      let done = true;
      start = start.map((val, i) => {
        if (val < targets[i]) {
          done = false;
          return Math.min(val + increments[i], targets[i]);
        }
        return val;
      });
      setCounts(start.map(Math.floor));
      if (done) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [JSON.stringify(targets), duration]);

  return counts;
}


export default function StatsSection({ stats }) {
  // Ambil value dari API sesuai key di config
  const values = statsConfig.map((stat) => (stats && typeof stats[stat.key] === 'number' ? stats[stat.key] : 0));
  const counts = useCountUpArray(values, 1000);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 animate-fade-in-up">
          Our Growing Community
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {statsConfig.map((stat, index) => (
            <div
              key={stat.key}
              className={`p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 animate-fade-in-up delay-${stat.delay}`}
            >
              <div>{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-800">
                {counts[index].toLocaleString()}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
