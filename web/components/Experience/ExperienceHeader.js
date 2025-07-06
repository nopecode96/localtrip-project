// components/ExperienceHeader.js

export default function ExperienceHeader({ title, type, price, currency, location }) {
  return (
    <section 
    className="relative border-b py-6 px-4 md:px-8 bg-cover bg-center bg-no-repeat"
            style={{
            backgroundImage:
                "url('/images/experience-header-bg.png')",
            }}>
      <div className="max-w-5xl mx-auto">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded mb-2">
          {type}
        </span>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{title}</h1>
        <p className="text-sm text-gray-200 mb-1">{location}</p>
        <p className="text-lg font-semibold text-primary">
          {currency} {price.toLocaleString()}
        </p>
      </div>
    </section>
  );
}
