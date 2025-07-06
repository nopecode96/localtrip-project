// components/ReviewsList.js

// Dummy reviews until backend integration
const dummyReviews = [
  {
    name: 'Alexandra',
    date: 'May 2024',
    rating: 5,
    comment: 'Amazing tour! Our guide was super knowledgeable and friendly.'
  },
  {
    name: 'James',
    date: 'April 2024',
    rating: 4,
    comment: 'The photographer captured our moments beautifully!'
  }
];

export default function ReviewsList({ experienceSlug }) {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-dark mb-6">Reviews</h2>
        <div className="space-y-6">
          {dummyReviews.map((r, i) => (
            <div key={i} className="border-b pb-4">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-800">{r.name}</p>
                <p className="text-sm text-gray-500">{r.date}</p>
              </div>
              <div className="text-yellow-400 text-sm mb-1">{'⭐'.repeat(r.rating)}</div>
              <p className="text-gray-700 text-sm">{r.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
