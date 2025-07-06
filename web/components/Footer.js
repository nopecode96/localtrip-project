// components/Footer.js
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-2">LocalTrip.me</h3>
          <p className="text-sm text-gray-300">
            Find trusted local guides and travel photographers for your next trip.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Explore</h4>
          <ul className="space-y-1 text-sm text-gray-400">
            <li><Link href="/explore">Explore Hosts</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-1 text-sm text-gray-400">
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
            <li><Link href="/cookies">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} LocalTrip.me — All rights reserved.
      </div>
    </footer>
  );
}