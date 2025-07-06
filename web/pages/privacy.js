import NavbarBase from '../components/Navbar/NavbarBase';
import Footer from '../components/Footer';

export default function PrivacyPage() {
  return (
    <>
      <NavbarBase />
      <section>
        <div className="relative bg-cover bg-center bg-no-repeat py-24"
        style={{ backgroundImage: "url('/images/privacy.jpg')" }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
                <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
                <p className="text-lg">
                Your privacy is important to us. Here's how LocalTrip.me collects, uses, and protects your data.
                </p>
            </div>
        </div>        
      </section>
      <main className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Account Information:</strong> Name, email address, password, and profile picture.</li>
                <li><strong>Host Information:</strong> Language skills, services, pricing, photos, and availability.</li>
                <li><strong>Booking Details:</strong> Selected host, time, location, meeting point.</li>
                <li><strong>Device & Usage:</strong> IP address, browser type, operating system, referring URLs.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li>To facilitate bookings and communication between travelers and hosts.</li>
                <li>To improve our platform experience and enhance security.</li>
                <li>To send important updates, confirmations, and promotional content (opt-in only).</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-2">3. Sharing Your Information</h2>
            <p className="mb-4">
                We only share personal information with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li>Your booked host or traveler to complete a service.</li>
                <li>Third-party services for payments, analytics, and notifications (Stripe, Google, Firebase, etc.).</li>
                <li>Law enforcement or regulatory authorities when required by law.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-2">4. Data Security</h2>
            <p className="mb-4">
                We implement industry-standard security measures including encrypted storage, secure connections (HTTPS), and access control to protect your data.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">5. Your Rights</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li>Access, correct, or delete your personal information at any time.</li>
                <li>Request data export.</li>
                <li>Opt out of marketing communications.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-2">6. Cookies</h2>
            <p className="mb-4">
                We use cookies to improve site functionality and analyze usage. You can manage cookie preferences through your browser settings.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">7. Children’s Privacy</h2>
            <p className="mb-4">
                Our services are not intended for children under 13. We do not knowingly collect personal information from children.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">8. Changes to This Policy</h2>
            <p className="mb-4">
                We may update this policy periodically. When we do, we will notify users via email or platform notification.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">9. Contact Us</h2>
            <p className="mb-4">
                If you have any questions or concerns about our privacy practices, please contact us at:
                <br />
                <strong>Email:</strong> support@localtrip.me
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
