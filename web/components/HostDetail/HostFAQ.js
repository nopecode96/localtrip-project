// components/HostFAQ.js
export default function HostFAQ({ questions }) {
  return (
    <section className="py-12 px-4 md:px-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-dark mb-6">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {questions.map((item, idx) => (
          <div key={idx} className="border-b pb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.q}</h3>
            <p className="text-sm text-gray-700">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
