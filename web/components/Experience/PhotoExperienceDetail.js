// components/PhotoExperienceDetail.js

export default function PhotoExperienceDetail({ device, style, delivery }) {
  return (
    <section className="bg-gray-50 py-10 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-dark mb-4">Photography Details</h2>
        <p className="text-sm text-gray-700 mb-2">📸 Device: {device}</p>
        <p className="text-sm text-gray-700 mb-2">🎨 Style: {style}</p>
        <p className="text-sm text-gray-700 mb-2">📁 Delivery: {delivery}</p>
      </div>
    </section>
  );
}
