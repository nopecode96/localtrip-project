// pages/host/[slug].js
import Head from 'next/head';
import { useRouter } from 'next/router';
import HeroHostProfile from '../../components/HostDetail/HeroHostProfile';
import AboutHost from '../../components/HostDetail/AboutHost';
import ExperienceList from '../../components/HostDetail/ExperienceList';
import HostReviews from '../../components/HostDetail/HostReviews';
import HostFAQ from '../../components/HostDetail/HostFAQ';
import NavbarBase from '../../components/Navbar/NavbarBase';
import Footer from '../../components/Footer';

export default function HostDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>{slug} - Local Host | LocalTrip.me</title>
      </Head>
      <NavbarBase />

      <HeroHostProfile
        name="Wayan"
        avatar="/images/profile1.png"
        coverImage="/images/cover1.png"
        location="Bali, Indonesia"
        languages={["English", "Bahasa"]}
        experience="5+ years"
        rating={4.9}
        reviewCount={123}
        isVerified={true}
        totalBookings={53}
      />

      <AboutHost
        description="I'm a passionate Balinese local who loves sharing cultural stories, nature trails, and hidden gems with travelers. With over 5 years of guiding experience, my goal is to give you an unforgettable, authentic adventure."
      />

      <ExperienceList
        experiences={[
          {
            id: 1,
            slug: "cultural-heritage-tour",
            title: "Cultural Heritage Tour",
            type: "Tour Guide",
            price: 500000,
            currency: "Rp",
            duration: "Half Day",
            itinerary: [
              "Visit Uluwatu Temple",
              "Coffee break at a local warung",
              "Sunset at Tanah Lot"
            ],
            meetingPoint: "Hotel lobby or Ubud Center"
          },
          {
            id: 2,
            slug: "photography-in-rice-terraces",
            meetingPoint: "Tegalalang Rice Terraces",
            title: "Photography in Rice Terraces",
            type: "Photographer",
            price: 700000,
            currency: "Rp",
            duration: "2 hours",
            details: {
              device: "Sony A7III + 85mm 1.4",
              style: "Warm tones, cinematic",
              delivery: "Google Drive – 20 edited + all RAW"
            }
          }
        ]}
      />

      <HostReviews
        reviews={[
          {
            name: "Sarah J.",
            rating: 5,
            comment: "Wayan was amazing — so knowledgeable and friendly!",
            date: "April 2025"
          },
          {
            name: "David M.",
            rating: 4.5,
            comment: "Great experience, I learned so much!",
            date: "March 2025"
          }
        ]}
      />

      <HostFAQ
        questions={[
          {
            q: "What’s the best time to book this tour?",
            a: "Morning or late afternoon for best light and less crowd."
          },
          {
            q: "Do you offer pick-up service?",
            a: "Yes, pick-up from most hotels in central Bali is available."
          },
          {
            q: "How many people can join the session?",
            a: "Up to 5 people for private photography sessions."
          }
        ]}
      />
      <Footer />
    </>
  );
}
