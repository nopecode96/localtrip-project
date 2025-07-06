import NavbarBase from '../components/Navbar/NavbarBase'
import Footer from '../components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function BecomeHostPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarBase />

      {/* ✅ Hero */}
      <header className="bg-blue-50 py-20 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            Anyone can be a Host on LocalTrip.me
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Students, online taxi drivers, digital nomads – everyone is welcome to earn extra income by offering private tours or photography sessions.
          </p>
          <Link href="/register?role=host">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Join Now
            </button>
          </Link>
        </div>
      </header>

      {/* ✅ Why Become a Host */}
      <section className="max-w-4xl mx-auto text-center space-y-8 py-16 px-4">
        <h2 className="text-3xl font-bold text-blue-700">Why Become a Host on LocalTrip.me?</h2>
        <p className="text-gray-700 text-lg">
          LocalTrip.me is more than just a travel platform — it's a way for locals like you to earn money, share stories, and meet people from all over the world.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left mt-8">
          <div className="bg-white shadow p-6 rounded-lg">
            <h3 className="font-semibold text-blue-600 mb-2">💸 Extra Income Without a Full-time Job</h3>
            <p className="text-sm text-gray-600">
              Set your own rates and availability. Whether you're a student or a freelancer, hosting helps you earn more — on your own terms.
            </p>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <h3 className="font-semibold text-blue-600 mb-2">🕒 100% Flexible Schedule</h3>
            <p className="text-sm text-gray-600">
              You decide when to accept bookings. Work during weekends, evenings, or only during holidays — it’s totally up to you.
            </p>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <h3 className="font-semibold text-blue-600 mb-2">🌍 Share Your Local Knowledge</h3>
            <p className="text-sm text-gray-600">
              Show travelers hidden gems in your area. Your perspective as a local is something no guidebook can replace.
            </p>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <h3 className="font-semibold text-blue-600 mb-2">📸 Turn Your Hobby Into Income</h3>
            <p className="text-sm text-gray-600">
              Love photography? Offer photoshoots to tourists. You don’t need to be a professional — just passionate and reliable.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Who Can Be a Host */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">Who Can Be a Host?</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <Image src="/images/mahasiswa.png" alt="student" width={300} height={300} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Students & University Grads</h3>
            <p className="text-gray-600 text-sm">
              Flexible side hustle between classes. Show travelers around the city you study in.
            </p>
          </div>
          <div>
            <Image src="/images/driver.png" alt="driver" width={300} height={300} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Online Taxi Drivers</h3>
            <p className="text-gray-600 text-sm">
              You know your city best. Offer guided rides and earn more than just regular transport fares.
            </p>
          </div>
          <div>
            <Image src="/images/digital-nomad.png" alt="digital nomad" width={300} height={300} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Digital Nomads</h3>
            <p className="text-gray-600 text-sm">
              Turn your free time and hobbies (like photography) into extra income while living abroad.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Host Testimonials */}
      <section className="text-center px-4 py-16">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Host Stories</h2>
        <div className="grid md:grid-cols-3 gap-6 text-left max-w-6xl mx-auto">
          <div className="bg-white rounded-lg p-6 shadow">
            <p className="text-gray-700 mb-4">
              “I'm a final-year student. Becoming a host helped me save money for my thesis and practice English with travelers.”
            </p>
            <div className="text-sm text-gray-500">&ndash; Lina, Host in Yogyakarta</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <p className="text-gray-700 mb-4">
              “As a driver in Bali, I already know all the routes. Now I guide tourists and share stories, not just drive them.”
            </p>
            <div className="text-sm text-gray-500">&ndash; Komang, Host in Bali</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <p className="text-gray-700 mb-4">
              “I'm a digital nomad based in Bandung. I love photography, so I offer travel photoshoots during the weekends.”
            </p>
            <div className="text-sm text-gray-500">&ndash; Rio, Host in Bandung</div>
          </div>
        </div>
      </section>

      {/* ✅ Final CTA */}
      <section className="text-center py-16 bg-blue-100 rounded-lg mx-4 mb-20">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Start Earning from Your Passion</h2>
        <p className="text-gray-700 mb-6">
          Whether you're into culture or photography, LocalTrip.me helps you reach travelers and manage bookings easily.
        </p>
        <Link href="/register?role=host">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Become a Host
          </button>
        </Link>
      </section>

      <Footer />
    </div>
  )
}