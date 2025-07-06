// components/ExperienceGallery.js

export default function ExperienceGallery({ images }) {
  if (!images || images.length === 0) return null;

  return (
    <section className="py-10 px-4 md:px-8 bg-white border-t">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold text-dark mb-4">Experience Preview</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="w-full h-48 overflow-hidden rounded shadow">
              <img
                src={src}
                alt={`Preview ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
