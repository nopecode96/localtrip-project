// components/ExperienceList.js
export default function ExperienceList({ experiences }) {
  return (
    <section className="py-12 px-4 md:px-8 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold text-dark mb-6">Available Services</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {experiences.map((exp) => (
          <div key={exp.id} className="border rounded-xl shadow-sm p-5">
            <h3 className="text-lg font-semibold text-dark mb-1">{exp.title}</h3>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500">{exp.type} • Duration: {exp.duration}</span>
              <span className="text-sm font-medium text-blue-600">
                {exp.currency} {exp.price.toLocaleString()}
              </span>
            </div>
            {exp.meetingPoint && (
              <p className="text-sm text-gray-600 mb-2">
                📍 Meeting Point: {exp.meetingPoint}
              </p>
            )}
            {exp.itinerary && (
              <ul className="list-disc pl-5 text-sm text-gray-700 mb-3">
                {exp.itinerary.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {exp.details && (
              <ul className="text-sm text-gray-700 mb-3">
                <li>📷 Device: {exp.details.device}</li>
                <li>🎨 Style: {exp.details.style}</li>
                <li>📁 Delivery: {exp.details.delivery}</li>
              </ul>
            )}
            <a
              href={`/experience/${exp.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90 text-sm"
            >
              Preview
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
