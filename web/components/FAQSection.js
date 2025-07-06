// components/FAQSection.js

const faqs = [
  {
    question: 'What is LocalTrip.me?',
    answer: 'LocalTrip.me is a travel marketplace connecting travelers with trusted local tour guides and photographers for private, authentic experiences.'
  },
  {
    question: 'How do I book a host?',
    answer: 'Simply search by destination, choose a host you like, view their packages, and proceed with booking through our platform.'
  },
  {
    question: 'Can I chat with the host before booking?',
    answer: 'For privacy and safety reasons, chat is only available after a confirmed booking.'
  },
  {
    question: 'What if I need to cancel?',
    answer: 'Each host has their own cancellation policy, but you can manage your bookings and cancellations directly from your account dashboard.'
  }
];

export default function FAQSection() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-dark mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b pb-4">
              <h3 className="font-semibold text-lg text-dark mb-2">{faq.question}</h3>
              <p className="text-sm text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}