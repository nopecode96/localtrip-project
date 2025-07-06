import { useState } from 'react';
import Link from 'next/link';
import NavbarBase from '@/components/Navbar/NavbarBase';
import Footer from '@/components/Footer';

const promos = [
	{
		id: 1,
		title: '20% Off Bali Tour Guide',
		code: 'BALI20',
		description:
			'Enjoy your holiday in Bali with 20% off for all tour guide services.',
		validUntil: '2025-08-31',
		badge: 'New',
		expired: false,
	},
	{
		id: 2,
		title: '50K Cashback Tokyo Photographer',
		code: 'TOKYOCAM',
		description: 'Get Rp 50,000 cashback for booking a photographer in Tokyo.',
		validUntil: '2025-07-31',
		badge: 'Almost Gone',
		expired: false,
	},
	{
		id: 3,
		title: 'New User Promo',
		code: 'WELCOME100',
		description:
			'Special for new users! Get Rp 100,000 off your first booking.',
		validUntil: '2025-12-31',
		badge: 'For New Users',
		expired: false,
	},
	{
		id: 4,
		title: 'Europe Summer Discount',
		code: 'EUROPE10',
		description:
			'10% off for all Europe destinations during summer.',
		validUntil: '2025-06-01',
		badge: '',
		expired: true,
	},
	{
		id: 5,
		title: 'Jakarta City Tour Special',
		code: 'JKT2025',
		description:
			'Book a Jakarta city tour and get a free photo session. Valid for a limited time.',
		validUntil: '2025-05-15',
		badge: '',
		expired: true,
	},
];

function PromoBadge({ badge, expired }) {
	if (expired)
		return (
			<span className="inline-block px-2 py-0.5 text-xs font-semibold rounded-full text-white mr-2 bg-gray-400">
				Expired
			</span>
		);
	if (!badge) return null;
	let color = 'bg-blue-500';
	if (badge === 'Almost Gone') color = 'bg-yellow-400 text-yellow-900';
	if (badge === 'For New Users') color = 'bg-green-500';
	if (badge === 'New') color = 'bg-blue-500';
	return (
		<span
			className={`inline-block px-2 py-0.5 text-xs font-semibold rounded-full text-white mr-2 whitespace-nowrap ${color}`}
		>
			{badge}
		</span>
	);
}

export default function PromoListPage() {
	const [copiedId, setCopiedId] = useState(null);

	const handleCopy = (code, id) => {
		navigator.clipboard.writeText(code);
		setCopiedId(id);
		setTimeout(() => setCopiedId(null), 1200);
	};

	return (
		<>
			<NavbarBase />
			<div className="min-h-screen bg-blue-50 py-10 px-4">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2 text-center">
						Promo & Diskon Spesial
					</h1>
					<p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto text-base">
						Find the latest promo codes and special discounts for booking tour guides and photographers on LocalTrip.me. Copy the code and use it at checkout to save more on your next adventure!
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						{promos.map((promo) => (
							<div
								key={promo.id}
								className={`bg-white rounded-xl shadow-md p-6 flex flex-col gap-3 border-t-4 border-yellow-300 relative ${
									promo.expired ? 'opacity-60 grayscale' : ''
								}`}
							>
								<div className="flex items-center mb-1">
									<PromoBadge badge={promo.badge} expired={promo.expired} />
									<span className="text-lg font-semibold text-blue-700">
										{promo.title}
									</span>
								</div>
								<div className="flex items-center gap-2">
									<span className="bg-blue-100 text-blue-700 font-mono px-3 py-1 rounded text-base tracking-wider">
										{promo.code}
									</span>
									<button
										onClick={() => handleCopy(promo.code, promo.id)}
										className="bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-semibold px-3 py-1 rounded transition text-xs"
										disabled={promo.expired}
									>
										{copiedId === promo.id ? 'Copied!' : 'Copy Code'}
									</button>
								</div>
								<p className="text-gray-700 text-sm">
									{promo.description}
								</p>
								<div className="flex items-center justify-between mt-2">
									<span className="text-xs text-gray-500">
										Valid until {promo.validUntil}
									</span>
									<Link
										href={`/promos/${promo.id}`}
										className={`text-blue-600 hover:underline text-xs font-medium ${
											promo.expired
												? 'pointer-events-none text-gray-400'
												: ''
										}`}
									>
										View Details
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
