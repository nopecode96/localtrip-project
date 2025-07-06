import Head from 'next/head';
import Script from 'next/script';
import NavbarBase from '../components/Navbar/NavbarBase';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <>
        <Head>
            <title>About Us | LocalTrip.me</title>
        </Head>
        <Script type="application/ld+json" id="org-jsonld">
            {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "LocalTrip.me",
            url: "https://localtrip.me",
            logo: "https://localtrip.me/logo.png",
            sameAs: [
                "https://www.instagram.com/localtrip.me",
                "https://www.facebook.com/localtrip.me"
            ],
            description: "Connecting travelers with local hosts for authentic experiences worldwide.",
            foundingDate: "2024-01-01",
            founder: {
                "@type": "Person",
                name: "Your Name"
            }
            })}
        </Script>
        <NavbarBase />

        {/* Hero with background image */}
        <section
            className="relative bg-cover bg-center h-72 sm:h-96 flex items-center justify-center text-center"
            style={{
            backgroundImage:
                "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative z-10 px-4">
            <h1 className="text-white text-4xl font-extrabold sm:text-5xl">About LocalTrip.me</h1>
            <p className="mt-4 text-blue-100 max-w-2xl mx-auto text-lg">
                Discover the story, people, and purpose behind LocalTrip.me — connecting travelers with trusted local hosts around the world.
            </p>
            </div>
        </section>

        {/* Main content */}
        <main className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
            {/* Our Story */}
            <section>
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
                    <p className="text-gray-700 leading-relaxed">
                    LocalTrip.me started with a simple belief: the best way to explore a place is through the eyes of someone who lives there. We realized that while travel apps and guidebooks offer structure, they often miss what makes a destination truly unforgettable — authentic human connection. From that idea, LocalTrip.me was born: a platform where travelers can book private tours, local photography sessions, and cultural experiences led by independent local hosts who know their cities like no one else. Whether you want to capture your honeymoon in Kyoto with a professional photographer, explore Istanbul with a passionate local historian, or discover hidden cafes in Hanoi, LocalTrip.me helps make it personal.
                    </p>
                </motion.section>
            </section>

            {/* Mission & Values */}
            <section>
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission & Values</h2>
                    <ul className="space-y-3 text-gray-700 list-disc list-inside">
                        <li>
                            ✅ Empower Local Communities<br />
                            We believe in the power of local knowledge and cultural exchange. By connecting travelers with local hosts, we create opportunities for communities to share their stories and traditions while earning a sustainable income.
                        </li>
                        <li>
                            🌍 Authentic & Safe Experiences<br />
                            Every host on LocalTrip.me is carefully vetted to ensure they provide safe, genuine experiences. We prioritize quality and authenticity, so you can explore with confidence.
                        </li>
                        <li>
                            🤝 Building Connections<br />
                            Travel is about people. Our platform fosters meaningful connections between travelers and locals, allowing for shared experiences that go beyond typical tourism.
                        </li>
                        <li>
                            🌟 Sustainable Tourism<br />
                            We are committed to promoting sustainable tourism practices that respect local cultures and environments. By choosing LocalTrip.me, you support responsible travel that benefits both visitors and hosts.
                        </li>
                    </ul>
                </motion.section>
            </section>

            {/* Mission & Values */}
            <section>
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
                    <ul className="space-y-3 text-gray-700 list-disc list-inside">
                        <li>Connect with a trusted local</li>
                        <li>Feel safe, inspired, and welcomed</li>
                        <li>Support local livelihoods</li>
                        <li>Walk away with real stories, not just photos</li>
                    </ul>
                </motion.section>
            </section>

            {/* Team Section (placeholder) */}
            <section>
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet Our Team</h2>
                    <ul className="space-y-3 text-gray-700 list-disc list-inside">
                        <li>✈️ Travelers who’ve couchsurfed, backpacked, and experienced the world firsthand</li>
                        <li>📷 Photographers & Creators who know the power of visual storytelling</li>
                        <li>👩‍💻 Developers & Designers who craft delightful and reliable experiences</li>
                    </ul>
                    </motion.section>
                
            </section>
            </div>
        </main>

        <Footer />
    </>
  );
}