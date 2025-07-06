// components/AboutHost.js
export default function AboutHost({ description }) {
  return (
    <section className="py-12 px-4 md:px-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-dark mb-4">About the Host</h2>
      <p className="text-gray-700 text-base leading-relaxed">
        {description}
      </p>
    </section>
  );
}
