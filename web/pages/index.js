// pages/index.js

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
  );
}
