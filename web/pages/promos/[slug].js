import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
import NavbarBase from '@/components/Navbar/NavbarBase';
import Footer from '@/components/Footer';
import { Gift, Calendar, Info, MapPin, UserCheck } from 'lucide-react';

// Dummy promo data (in real app, fetch by slug)
const promoData = {
  BALI20: {
    title: '20% Off Bali Tour Guide',
    subtitle: 'Enjoy your holiday in Bali with 20% off for all tour guide services.',
    code: 'BALI20',
    start: '2025-07-01',
    end: '2025-08-31',
    minTransaction: 'Rp 500,000',
    services: 'All Bali tour guide services',
    forNewUser: false,
    location: 'Bali',
    illustration: '/images/bali.jpg',
  },
  WELCOME100: {
    title: 'New User Promo',
    subtitle: 'Special for new users! Get Rp 100,000 off your first booking.',
    code: 'WELCOME100',
    start: '2025-01-01',
    end: '2025-12-31',
    minTransaction: 'Rp 0',
    services: 'All services',
    forNewUser: true,
    location: 'All locations',
    illustration: '/images/profile1.png',
  },
  EUROPE10: {
    title: 'Europe Summer Discount',
    subtitle: '10% off for all Europe destinations during summer.',
    code: 'EUROPE10',
    start: '2025-05-01',
    end: '2025-06-01',
    minTransaction: '€100',
    services: 'All Europe destinations',
    forNewUser: false,
    location: 'Europe',
    illustration: '/images/paris.jpg',
  },
};

export default function PromoDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  const promo = promoData[slug?.toUpperCase()] || promoData.BALI20;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(promo.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <>
      <NavbarBase />
      <main className="min-h-screen bg-blue-50 py-10 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8 flex flex-col gap-6">
          <div className="flex items-center gap-4 mb-2">
            <Gift className="w-10 h-10 text-yellow-400" />
            <h1 className="text-2xl md:text-3xl font-bold text-blue-700">{promo.title}</h1>
          </div>
          <div className="flex items-center gap-3">
            <img src={promo.illustration} alt="Promo Illustration" className="w-20 h-20 rounded-lg object-cover border" />
            <div className="flex-1">
              <p className="text-gray-700 text-base mb-2">{promo.subtitle}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="bg-blue-100 text-blue-700 font-mono px-4 py-2 rounded text-lg tracking-wider select-all">{promo.code}</span>
                <button
                  onClick={handleCopy}
                  className="bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-semibold px-3 py-2 rounded transition text-xs"
                >
                  {copied ? 'Copied!' : 'Copy Code'}
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Calendar className="w-4 h-4 text-blue-500" />
            <span>Valid: {promo.start} - {promo.end}</span>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm">
              <Info className="w-4 h-4 text-blue-500" />
              <span>Minimum transaction: <b>{promo.minTransaction}</b></span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Info className="w-4 h-4 text-blue-500" />
              <span>Valid for: <b>{promo.services}</b></span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <UserCheck className="w-4 h-4 text-blue-500" />
              <span>{promo.forNewUser ? 'For new users only' : 'For all users'}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span>Location: <b>{promo.location}</b></span>
            </div>
          </div>
          <Link
            href="/explore"
            className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg text-center text-base shadow transition"
          >
            Booking Now
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
