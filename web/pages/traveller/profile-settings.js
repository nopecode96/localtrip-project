'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar/NavbarBase';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function ProfileSettingsPage() {
  const [formData, setFormData] = useState({
    name: 'Raisa Putri',
    email: 'raisa@example.com',
    phone: '+62 812-3456-7890',
    bio: 'Traveler and sunset lover 🌅',
    location: 'Jakarta, Indonesia',
    avatar: '/images/profile1.png',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile saved:', formData);
    // Simpan ke backend di sini
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 px-4 py-10 md:px-12 lg:px-24">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">
          <h1 className="text-2xl font-bold mb-6">Profile Settings</h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-3 group">
                <Image
                  src={formData.avatar}
                  alt="Profile Avatar"
                  fill
                  className="object-cover rounded-full border border-gray-300 group-hover:opacity-80 transition"
                />
                <label htmlFor="avatar-upload" className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-40 rounded-full cursor-pointer transition">
                  <span className="text-white text-xs opacity-0 group-hover:opacity-100 transition">Change Photo</span>
                  <input
                    id="avatar-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Bio</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Save Changes
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
