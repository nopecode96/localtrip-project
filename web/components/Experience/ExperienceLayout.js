// components/ExperienceLayout.js

import BookingForm from './BookingForm';

export default function ExperienceLayout({ children, bookingPrice, bookingCurrency }) {
  return (
    <section className="bg-white py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left content */}
        <div className="lg:col-span-2 space-y-6">
          {children}
        </div>

        {/* Right sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24">
            <BookingForm price={bookingPrice} currency={bookingCurrency} />
          </div>
        </aside>
      </div>
    </section>
  );
}
