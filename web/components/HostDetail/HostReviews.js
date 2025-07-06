// components/HostReviews.js
export default function HostReviews({ reviews }) {
  return (
    <section className="py-12 px-4 md:px-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-dark mb-6">What Guests Say</h2>
      <div className="space-y-6">
        {reviews.map((r, i) => (
          <div key={i} className="border-b pb-4">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-gray-800">{r.name}</p>
              <p className="text-sm text-gray-500">{r.date}</p>
            </div>
            <div className="text-yellow-400 text-sm mb-1">{'⭐'.repeat(Math.round(r.rating))}</div>
            <p className="text-gray-700 text-sm">{r.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
