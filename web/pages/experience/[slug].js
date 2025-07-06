// pages/experience/[slug].js
import { useRouter } from 'next/router';
import Head from 'next/head';
import ExperienceHeader from '../../components/Experience/ExperienceHeader';
import TourExperienceDetail from '../../components/Experience/TourExperienceDetail';
import PhotoExperienceDetail from '../../components/Experience/PhotoExperienceDetail';
import HostPreview from '../../components/Experience/HostPreview';
import ReviewsList from '../../components/Experience/ReviewsList';
import NavbarBase from '../../components/Navbar/NavbarBase';
import Footer from '../../components/Footer';
import ExperienceGallery from '../../components/Experience/ExperienceGallery';
import BookingForm from '../../components/Experience/BookingForm';
import ExperienceLayout from '../../components/Experience/ExperienceLayout';

export default function ExperienceDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  // dummy data
  const experience = {
    slug,
    title: 'Sunset Uluwatu Tour',
    type: 'Tour Guide', // or 'Photographer'
    price: 600000,
    currency: 'Rp',
    duration: 'Half Day',
    location: 'Uluwatu, Bali',
    host: {
      name: 'Wayan',
      avatar: '/images/profile1.png',
      rating: 4.9,
      reviews: 24,
      verified: true
    },
    itinerary: [
      'Pick-up from hotel',
      'Uluwatu Temple walk',
      'Traditional Kecak Dance',
      'Sunset photo at cliff edge'
    ],
    meetingPoint: 'Hotel pick-up or Ubud Center',
    device: 'Sony A7 III + 50mm f/1.4',
    style: 'Cinematic, warm tone',
    delivery: 'Google Drive (20 edited + RAW)'  
  };

  const isPhotographer = experience.type === 'Photographer';

  return (
    <>
      <Head>
        <title>{experience.title} | LocalTrip.me</title>
      </Head>
      <NavbarBase />

      <ExperienceHeader
        title={experience.title}
        type={experience.type}
        price={experience.price}
        currency={experience.currency}
        location={experience.location}
      />
      <ExperienceLayout bookingPrice={experience.price} bookingCurrency={experience.currency}>

      <ExperienceGallery images={[
        '/images/cover2.png',
        '/images/cover2.png',
        '/images/cover2.png',
      ]} />

      {isPhotographer ? (
        <PhotoExperienceDetail
          device={experience.device}
          style={experience.style}
          delivery={experience.delivery}
        />
      ) : (
        <TourExperienceDetail
          itinerary={experience.itinerary}
          duration={experience.duration}
          meetingPoint={experience.meetingPoint}
        />
      )}

      <HostPreview host={experience.host} />
      <ReviewsList experienceSlug={slug} />
      
      </ExperienceLayout>
      <Footer />
    </>
  );
}
