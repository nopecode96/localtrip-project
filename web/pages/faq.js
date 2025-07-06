// pages/faq.js
import CallToActionSection from '../components/Home/CallToActionSection';
import FAQSection from '../components/FAQSection';
import Head from 'next/head';
import NavbarBase from '../components/Navbar/NavbarBase';
import Footer from '../components/Footer';

export default function FAQPage() {
  return (
    <>
      <Head>
        <title>FAQ - LocalTrip.me</title>
      </Head>
      <NavbarBase />
      <section className="bg-soft py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-dark mb-4">Need Help?</h1>
          <p className="text-gray-600 text-lg">
            Find answers to commonly asked questions about LocalTrip.me and how the platform works.
          </p>
        </div>
      </section>
      <FAQSection />
      <CallToActionSection />
      <Footer />
    </>
  );
}
