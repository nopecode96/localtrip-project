import NavbarBase from '../components/Navbar/NavbarBase';
import Footer from '../components/Footer';

export default function TermsOfServicePage() {
  return (
    <>
    <NavbarBase />
      {/* Hero Section with Background */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-24"
        style={{ backgroundImage: "url('/images/term-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg">
            Please read our terms carefully before using LocalTrip.me services.
          </p>
        </div>
      </div>

      {/* Terms Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
        <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="mb-6">
          By using LocalTrip.me, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our platform.
        </p>

        <h2 className="text-xl font-semibold mb-4">2. Eligibility</h2>
        <p className="mb-6">
          You must be at least 18 years old to use our services. Hosts and travelers are responsible for ensuring that their interactions comply with local laws.
        </p>

        <h2 className="text-xl font-semibold mb-4">3. Booking & Payments</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>All bookings must be made through LocalTrip.me’s platform.</li>
          <li>Full payment is required to confirm a booking.</li>
          <li>Our platform may hold payments in escrow until service completion.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">4. Cancellations & Refunds</h2>
        <p className="mb-6">
          Cancellation policies vary by host. Refund eligibility is subject to the cancellation terms of each service. Platform fees may be non-refundable.
        </p>

        <h2 className="text-xl font-semibold mb-4">5. User Responsibilities</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Respect local customs, laws, and cultural norms.</li>
          <li>Do not use the platform for illegal or harmful activities.</li>
          <li>Hosts must provide accurate service descriptions and honor commitments.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">6. Platform Rights</h2>
        <p className="mb-6">
          We reserve the right to modify, suspend, or terminate access to any part of the platform without notice, for violations of these terms.
        </p>

        <h2 className="text-xl font-semibold mb-4">7. Intellectual Property</h2>
        <p className="mb-6">
          All content on LocalTrip.me, including logos, text, images, and software, is the property of LocalTrip.me and protected by applicable laws.
        </p>

        <h2 className="text-xl font-semibold mb-4">8. Changes to Terms</h2>
        <p className="mb-6">
          We may update these Terms from time to time. You will be notified of significant changes via email or in-app notification.
        </p>

        <h2 className="text-xl font-semibold mb-4">9. Contact Us</h2>
        <p>
          If you have questions about these Terms, contact us at:
          <br />
          <strong>Email:</strong> support@localtrip.me
        </p>
      </div>
    <Footer />
    </>
  );
}
