// components/BookingForm.js

import { useState } from 'react';

export default function BookingForm({ price, currency }) {
  const [date, setDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [contactMethod, setContactMethod] = useState('WhatsApp');
  const [contactInfo, setContactInfo] = useState('');

  const total = (adults + children * 0.5) * price;

  return (
    <section className="bg-white py-8 px-4 md:px-6 border rounded shadow w-full max-w-md">
      <h3 className="text-lg font-semibold text-dark mb-4">Book This Experience</h3>

      <label className="block text-sm mb-2">Date</label>
      <input
        type="date"
        className="w-full border px-3 py-2 mb-4 rounded text-sm"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label className="block text-sm mb-2">Adults</label>
      <input
        type="number"
        min={1}
        value={adults}
        onChange={(e) => setAdults(Number(e.target.value))}
        className="w-full border px-3 py-2 mb-4 rounded text-sm"
      />

      <label className="block text-sm mb-2">Children</label>
      <input
        type="number"
        min={0}
        value={children}
        onChange={(e) => setChildren(Number(e.target.value))}
        className="w-full border px-3 py-2 mb-4 rounded text-sm"
      />

      <label className="block text-sm mb-2">Preferred Contact Method</label>
      <select
        className="w-full border px-3 py-2 mb-4 rounded text-sm"
        value={contactMethod}
        onChange={(e) => setContactMethod(e.target.value)}
      >
        <option value="WhatsApp">WhatsApp</option>
        <option value="Telegram">Telegram</option>
        <option value="Zoom">Zoom</option>
        <option value="Other">Other</option>
      </select>

      <label className="block text-sm mb-2">Your Contact Info</label>
      <input
        type="text"
        placeholder="e.g. +628123456789 or @yourusername"
        className="w-full border px-3 py-2 mb-4 rounded text-sm"
        value={contactInfo}
        onChange={(e) => setContactInfo(e.target.value)}
      />

      <div className="text-base font-semibold text-dark mb-4">
        Total: {currency} {total.toLocaleString()}
      </div>

      <button className="w-full bg-primary text-white py-2 rounded hover:bg-opacity-90">
        Book Now
      </button>
    </section>
  );
}
