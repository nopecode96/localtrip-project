// pages/index.js
import Head from 'next/head';
import HeroSection from '../components/Home/HeroSection';
import StatsSection from '../components/Home/StatsSection';
import TopDestinations from '../components/Home/TopDestinations';
import TopExperiences from '../components/Home/TopExperiences';
import HowItWorksSection from '../components/Home/HowItWorksSection';
import ReviewsSection from '../components/Home/ReviewsSection';
import CallToActionSection from '../components/Home/CallToActionSection';
import Footer from '../components/Footer';
import NavbarBase from '../components/Navbar/NavbarBase';
import StorySection from '../components/Home/StorySection';
import { fetchHomepageData } from '../utils/api';

export async function getServerSideProps() {
  try {
    const homepage = await fetchHomepageData();
    return { props: { homepage } };
  } catch (e) {
    return { props: { homepage: null } };
  }
}

export default function HomePage({ homepage }) {
  return (
    <>
      <Head>
        <title>LocalTrip - You Travel We Capture the Story</title>
        <meta name="description" content="Connect with local hosts for authentic travel experiences. Book professional photography sessions, cultural tours, and unique adventures around the world." />
        <meta name="keywords" content="travel, photography, local guides, cultural experiences, authentic travel, local hosts" />
        <meta property="og:title" content="LocalTrip - You Travel We Capture the Story" />
        <meta property="og:description" content="Connect with local hosts for authentic travel experiences worldwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://localtrip.me" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LocalTrip - You Travel We Capture the Story" />
        <meta name="twitter:description" content="Connect with local hosts for authentic travel experiences worldwide." />
      </Head>
      
      <div>
        <NavbarBase />
        <HeroSection />
        <StatsSection stats={homepage?.stats} />
        <TopDestinations destinations={homepage?.topDestinations} />
        <TopExperiences experiences={homepage?.topExperiences} />
        <HowItWorksSection />
        <ReviewsSection reviews={homepage?.reviews} />
        <CallToActionSection />
        <StorySection stories={homepage?.stories} />
        <Footer />
      </div>
    </>
  );
}
