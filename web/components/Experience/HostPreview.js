// components/HostPreview.js

export default function HostPreview({ host }) {
  return (
    <section className="py-10 px-4 md:px-8 bg-white border-t">
      <div className="max-w-4xl mx-auto flex items-center gap-4">
        <img
          src={host.avatar}
          alt={host.name}
          className="w-16 h-16 rounded-full border"
        />
        <div>
          <h3 className="text-lg font-semibold text-dark">Hosted by {host.name}</h3>
          <p className="text-sm text-gray-600">
            ⭐ {host.rating} ({host.reviews} reviews){' '}
            {host.verified && <span className="ml-2 text-green-600">✔ Verified</span>}
          </p>
        </div>
      </div>
    </section>
  );
}
