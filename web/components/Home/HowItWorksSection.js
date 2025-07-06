// components/HowItWorksSection.js
"use client";

import { Search, Users, Calendar } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-8 h-8 text-blue-600" />,
    title: "Search a Destination",
    desc: "Find local hosts based on your destination and preferences.",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Choose a Host",
    desc: "Browse through host profiles, packages, and reviews.",
  },
  {
    icon: <Calendar className="w-8 h-8 text-blue-600" />,
    title: "Book Your Experience",
    desc: "Pick your package and confirm your private experience.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      className="relative py-20 flex items-center justify-center text-white text-center"
      style={{
        backgroundImage: "url('/images/cta-bg.png')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 drop-shadow">
          How It Works
        </h2>
        <p className="mb-12 text-white/80 drop-shadow">
          A simple 3-step process to connect you with passionate local guides and photographers—wherever you go.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white backdrop-blur-md p-6 rounded-xl shadow-md flex flex-col items-center text-black hover:bg-white/80 transition"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-white/80 max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}
