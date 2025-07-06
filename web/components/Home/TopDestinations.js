// components/TopDestinations.js

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';


export default function TopDestinations({ destinations }) {
  if (!destinations || destinations.length === 0) return null;

  return (
    <section className="bg-soft py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-dark">Top Destinations</h2>
        <p className='mb-6'>Discover the most popular cities where travelers connect with trusted local hosts for unique experiences.</p>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="!pb-8"
        >
          {destinations.map((dest, idx) => (
            <SwiperSlide key={idx}>
              <div className="rounded overflow-hidden shadow hover:shadow-md transition-all bg-white">
                <div className="relative h-40">
                  <Image
                    src={dest.imageUrl || '/images/default.jpg'}
                    alt={dest.city?.name || 'Destination'}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-lg text-gray-800">{dest.city?.name}</h3>
                  <p className="text-sm text-gray-500">{dest.city?.country?.name || '-'}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
