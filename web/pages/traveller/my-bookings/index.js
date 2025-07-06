'use client';

import Navbar from '@/components/Navbar/NavbarBase';
import Footer from '@/components/Footer';
import Image from 'next/image';

const bookings = [
	{
		id: 'BK001',
		hostName: 'Wayan Artana',
		experience: 'Ubud Sunrise Trekking + Foto',
		location: 'Ubud, Bali',
		date: '2025-08-21',
		status: 'Awaiting Payment',
		total: 'Rp 950.000',
		image: '/images/tokyo.jpg',
	},
	{
		id: 'BK002',
		hostName: 'Aya Fujimoto',
		experience: 'Cherry Blossom Portrait Walk',
		location: 'Tokyo, Japan',
		date: '2025-09-05',
		status: 'Upcoming',
		total: '¥12,000',
		image: '/images/tokyo.jpg',
	},
	{
		id: 'BK003',
		hostName: 'Budi Dharma',
		experience: 'Heritage Photo Trip Jogja',
		location: 'Yogyakarta, Indonesia',
		date: '2025-06-11',
		status: 'Completed',
		total: 'Rp 650.000',
		image: '/images/tokyo.jpg',
	},
	{
		id: 'BK001',
		hostName: 'Wayan Artana',
		experience: 'Ubud Sunrise Trekking + Foto',
		location: 'Ubud, Bali',
		date: '2025-08-21',
		status: 'Awaiting Payment',
		image: '/images/tokyo.jpg',
	},
	{
		id: 'BK002',
		hostName: 'Aya Fujimoto',
		experience: 'Cherry Blossom Portrait Walk',
		location: 'Tokyo, Japan',
		date: '2025-09-05',
		status: 'Upcoming',
		image: '/images/tokyo.jpg',
	},
	{
		id: 'BK003',
		hostName: 'Budi Dharma',
		experience: 'Heritage Photo Trip Jogja',
		location: 'Yogyakarta, Indonesia',
		date: '2025-06-11',
		status: 'Completed',
		image: '/images/tokyo.jpg',
	},
];

const statusColor = {
	Awaiting: 'bg-yellow-100 text-yellow-800',
	Upcoming: 'bg-blue-100 text-blue-800',
	Completed: 'bg-green-100 text-green-800',
};

import { useState } from 'react';

export default function MyBookingPage() {
	const [statusFilter, setStatusFilter] = useState('All');

	const filteredBookings = bookings.filter(
		(b) => statusFilter === 'All' || b.status === statusFilter
	);
	return (
		<>
			<Navbar />

			<main className='min-h-screen bg-gray-50 px-4 py-8 md:px-12'>
				<div className='mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2'>
					<h1 className='text-2xl font-bold mb-2 md:mb-0'>My Bookings</h1>
					<div className='flex gap-2 md:gap-4 border-b border-gray-200'>
						{['All', 'Awaiting Payment', 'Upcoming', 'Completed'].map((status) => (
							<button
								key={status}
								onClick={() => setStatusFilter(status)}
								className={`px-4 py-2 text-sm md:text-base font-medium border-b-2 transition-colors duration-150 focus:outline-none ${
									statusFilter === status
										? 'border-blue-600 text-blue-600 bg-white'
										: 'border-transparent text-gray-500 hover:text-blue-600 hover:bg-gray-100'
								}`}
								type='button'
							>
								{status}
							</button>
						))}
					</div>
				</div>

				<div className='grid gap-6'>
					{filteredBookings.map((booking) => (
						<div
							key={booking.id}
							className='bg-white rounded-xl shadow p-4 flex flex-col md:flex-row gap-4'
						>
							<div className='relative w-full md:w-48 h-40 rounded-lg overflow-hidden'>
								<Image
									src={booking.image}
									alt={booking.experience}
									fill
									className='object-cover'
								/>
							</div>
							<div className='flex-1'>
								<h3 className='text-lg font-semibold'>
									{booking.experience}
								</h3>
								<p className='text-sm text-gray-500'>
									with {booking.hostName}
								</p>
								<p className='text-sm text-gray-500'>
									{booking.location} · {booking.date}
								</p>
								<p className='text-sm font-medium mt-1'>
									Total:{' '}
									<span className='text-blue-600 font-semibold'>
										{booking.total}
									</span>
								</p>
								<span
									className={`inline-block mt-2 px-2 py-1 rounded text-xs font-medium ${statusColor[booking.status]}`}
								>
									{booking.status}
								</span>
								<div className='mt-4 flex gap-2'>
									{booking.status === 'Awaiting Payment' && (
										<button className='bg-blue-600 text-white px-4 py-1.5 rounded text-sm hover:bg-blue-700'>
											Pay Now
										</button>
									)}
									{booking.status === 'Upcoming' && (
										<button className='bg-gray-200 text-gray-700 px-4 py-1.5 rounded text-sm hover:bg-gray-300'>
											View Details
										</button>
									)}
									{booking.status === 'Completed' && (
										<button className='bg-green-600 text-white px-4 py-1.5 rounded text-sm hover:bg-green-700'>
											Write Review
										</button>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</main>

			<Footer />
		</>
	);
}
