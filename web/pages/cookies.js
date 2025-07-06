import NavbarBase from '../components/Navbar/NavbarBase';
import Footer from '../components/Footer';

export default function CookiePolicyPage() {
  return (
    <>
    <NavbarBase />
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-24"
        style={{ backgroundImage: "url('/images/cookie-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-lg">
            Learn how LocalTrip.me uses cookies to improve your experience.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
        <h2 className="text-xl font-semibold mb-4">1. What Are Cookies?</h2>
        <p className="mb-6">
          Cookies are small text files that are placed on your device to help the website function properly, analyze traffic, and remember your preferences.
        </p>

        <h2 className="text-xl font-semibold mb-4">2. How We Use Cookies</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Essential Cookies:</strong> Needed for basic functionality like login, bookings, and language settings.</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how users interact with the site (e.g. Google Analytics).</li>
          <li><strong>Marketing Cookies:</strong> Used for personalized ads or retargeting (optional).</li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">3. Third-Party Cookies</h2>
        <p className="mb-6">
          We may allow selected third parties to set cookies on your device for analytics, performance monitoring, or advertising. These providers may include Google, Meta (Facebook), or Stripe.
        </p>

        <h2 className="text-xl font-semibold mb-4">4. Managing Your Cookie Preferences</h2>
        <p className="mb-6">
          You can manage or disable cookies anytime through your browser settings. Disabling essential cookies may affect website functionality.
        </p>

        <h2 className="text-xl font-semibold mb-4">5. Consent</h2>
        <p className="mb-6">
          By using our website, you consent to our use of cookies as outlined in this policy. You may see a cookie banner to accept or manage preferences.
        </p>

        <h2 className="text-xl font-semibold mb-4">6. Updates to This Policy</h2>
        <p className="mb-6">
          We may update this Cookie Policy from time to time. Significant changes will be communicated via banner or email.
        </p>

        <h2 className="text-xl font-semibold mb-4">7. Contact Us</h2>
        <p>
          For any questions about our use of cookies, contact us at: <br />
          <strong>Email:</strong> support@localtrip.me
        </p>
      </div>
    <Footer />
    </>
  );
}
