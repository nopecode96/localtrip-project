// components/TourExperienceDetail.js

export default function TourExperienceDetail({ itinerary, duration, meetingPoint }) {
  return (
    <section className="bg-gray-50 py-10 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-dark mb-4">Tour Details</h2>
        <p className="text-sm text-gray-700 mb-2">⏳ Duration: {duration}</p>
        <p className="text-sm text-gray-700 mb-4">📍 Meeting Point: {meetingPoint}</p>

        <h3 className="text-lg font-medium text-dark mb-2">Itinerary</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-800">
          {itinerary.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
