'use client';

import Navbar from '@/components/Navbar/NavbarBase';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { CheckCircle2, Phone, Calendar, MapPin, Users, Mail } from 'lucide-react';
import dynamic from 'next/dynamic';
import QRCode from 'react-qr-code';

// Map component (Leaflet) - only load on client
const Map = dynamic(() => import('@/components/MapBooking'), { ssr: false });

export default function BookingDetailPage() {
  // Dummy data for demo
  const booking = {
    id: 'BK001',
    tourTitle: 'Sunset Uluwatu Tour',
    host: {
      name: 'Wayan Artana',
      photo: '/images/profile1.png',
    },
    date: '2025-08-21',
    adults: 2,
    children: 1,
    contact: 'WhatsApp',
    total: 'Rp 600.000',
    qr: '/images/qr-demo.png', // Replace with real QR/barcode
    meetingPoint: {
      name: 'Uluwatu Temple Parking',
      lat: -8.8296,
      lng: 115.0848,
      map: '/images/meeting-map.png', // fallback image
    },
    itinerary: [
      { label: 'Pick-up Location', value: 'Hotel Lobby, Kuta' },
      { label: 'Activities', value: 'Temple visit, Kecak dance, Sunset photo session' },
      { label: 'Meeting Point', value: 'Uluwatu Temple Parking' },
      { label: 'Time', value: '16:00 - 20:00' },
    ],
    emergency: '+62 812-3456-7890',
    faq: [
      {
        q: 'What should I bring for the tour?',
        a: 'Comfortable clothes, camera, and some cash for personal expenses.'
      },
      {
        q: 'How do I contact the host?',
        a: 'You can use the emergency contact or preferred contact method listed above.'
      },
      {
        q: 'Can I reschedule or cancel?',
        a: 'Yes, use the Cancel or Rebook button below or contact support.'
      }
    ],
    description: 'Enjoy a magical sunset at Uluwatu Temple, experience the famous Kecak dance, and capture unforgettable moments with a local guide and photographer. Includes pick-up, entrance tickets, and a guided tour.',
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 px-4 py-8 md:px-0">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Header Section */}
          <div className="flex flex-col items-center text-center gap-2">
            <CheckCircle2 className="w-16 h-16 text-green-500 mb-2" />
            <h1 className="text-2xl font-bold">Booking Confirmation</h1>
            <p className="text-gray-600">Thank you for your booking!</p>
          </div>

          {/* Booking Summary Card */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Image src={booking.host.photo} alt={booking.host.name} width={56} height={56} className="rounded-full border" />
              <div className="flex-1">
                <h2 className="font-semibold text-lg mb-1">{booking.tourTitle}</h2>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <span>with {booking.host.name}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm mt-2">{booking.description}</p>
            <div className="flex flex-wrap gap-4 text-sm mt-2">
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-blue-500" /> {booking.date}</div>
              <div className="flex items-center gap-2"><Users className="w-4 h-4 text-blue-500" /> {booking.adults} Adults, {booking.children} Children</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-blue-500" /> {booking.contact}</div>
              <div className="flex items-center gap-2"><span className="font-medium text-gray-700">Total:</span> <span className="text-blue-600 font-semibold">{booking.total}</span></div>
            </div>
          </div>

          {/* QR/Barcode Section */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center gap-2">
            <QRCode value={`https://localtrip.me/payment/qris/${booking.id}`} size={400} className="rounded-lg border bg-white p-2" />
            <div className="text-xs text-gray-500 mt-2">Show this at meeting point (QRIS/Check-in)</div>
          </div>

          {/* Itinerary Section */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg mb-4">Itinerary</h3>
            <div className="space-y-3">
              {booking.itinerary.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-32 text-gray-500 font-medium shrink-0">{item.label}</span>
                  <span className="text-gray-800">{item.value}</span>
                </div>
              ))}
            </div>
            {/* Optional map thumbnail & interactive map */}
            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span className="font-medium">Meeting Point:</span>
                <span>{booking.meetingPoint.name}</span>
              </div>
              <div className="w-full h-40 rounded border overflow-hidden">
                <Map lat={booking.meetingPoint.lat} lng={booking.meetingPoint.lng} />
              </div>
            </div>
          </div>

          {/* Contact & Actions Section */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="w-5 h-5 text-blue-500" />
              <span className="font-medium">Emergency Contact:</span>
              <a href={`tel:${booking.emergency}`} className="text-blue-600 underline hover:text-blue-800">{booking.emergency}</a>
            </div>
            <div className="flex gap-2 flex-wrap">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-medium">Add to Calendar</button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 font-medium">Download Ticket</button>
              <button className="bg-red-100 text-red-600 px-4 py-2 rounded hover:bg-red-200 font-medium">Cancel Booking</button>
              <button className="bg-green-100 text-green-700 px-4 py-2 rounded hover:bg-green-200 font-medium">Rebook</button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {booking.faq.map((item, i) => (
                <div key={i}>
                  <div className="font-medium text-gray-800 mb-1">Q: {item.q}</div>
                  <div className="text-gray-600 text-sm">A: {item.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
