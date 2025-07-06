// components/ReviewsSection.js

export default function ReviewsSection({ reviews }) {
  if (!reviews || reviews.length === 0) return null;

  // Normalisasi data review dari API
  const normalized = reviews.map((r) => {
    // Nama reviewer: booking.user.name
    const name = r.booking?.user?.name || '-';
    // Avatar: booking.user.avatarUrl atau dummy
    const avatar = r.booking?.user?.avatarUrl || '/images/profile4.png';
    // Rating: r.rating
    const rating = typeof r.rating === 'number' ? r.rating : '-';
    // Text: r.comment
    const text = r.comment || '-';
    return { name, avatar, rating, text };
  });

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold">Traveler Reviews</h2>
        <p className="mb-6">Real stories from travelers who explored with us—see what they loved about their local experiences.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {normalized.map((r, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg shadow p-6 text-left">
              <div className="flex items-center gap-3 mb-4">
                <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-semibold text-sm">{r.name}</p>
                  <p className="text-yellow-500 text-xs">⭐ {r.rating}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">“{r.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
