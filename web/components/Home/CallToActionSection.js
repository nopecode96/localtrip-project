// components/CallToActionSection.js
import Link from 'next/link';

export default function CallToActionSection() {
  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/images/cta-bg.png')",
        backgroundAttachment: "fixed", // CSS parallax ringan
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-black/50 p-10 rounded-xl">
        <h2 className="text-3xl font-bold mb-4">Ready to explore with a local?</h2>
        <p className="mb-6">Book your next experience with a trusted guide or photographer</p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
          Get Started
        </button>
      </div>
    </section>
  );
}
