import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchLocationSuggestions } from "../../utils/api";
export default function HeroParallaxManual() {
  // State & fetch logic for location suggest
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const bg = document.getElementById("parallax-bg");
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (bg) {
        bg.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let ignore = false;
    if (query.length < 2) {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }
    const fetchSuggestions = async () => {
      try {
        const data = await fetchLocationSuggestions(query);
        if (!ignore) {
          setSuggestions(data);
          setShowDropdown(data.length > 0);
        }
      } catch (e) {
        if (!ignore) {
          setSuggestions([]);
          setShowDropdown(false);
        }
      }
    };
    fetchSuggestions();
    return () => { ignore = true; };
  }, [query]);

  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      {/* Background Image with manual parallax */}
      <div
        id="parallax-bg"
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat transition-transform duration-75"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      ></div>

      {/* Foreground Content with 2-column layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:flex lg:items-center lg:justify-between">
        {/* Left: Text and Search */}
        <div className="lg:w-1/2 text-white">
          <h1 className="text-4xl font-bold sm:text-5xl mb-4 drop-shadow-lg">
            You Travel<br />We Capture the Story
          </h1>
          <p className="text-lg mb-6 drop-shadow">
            From hidden gems to candid frames — book with local guides and photographers who get you.
          </p>
          <div className="flex gap-2 flex-wrap">
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                placeholder="Where are you going?"
                className="px-4 py-3 rounded-lg border border-gray-300 text-black shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onFocus={() => setShowDropdown(suggestions.length > 0)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                autoComplete="off"
              />
              {showDropdown && suggestions.length > 0 && (
                <ul className="absolute left-0 right-0 bg-white border rounded shadow z-20 max-h-48 overflow-y-auto text-black">
                  {suggestions.map((item, idx) => (
                    <li
                      key={idx}
                      className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                      onMouseDown={() => {
                        setQuery(item.label);
                        setShowDropdown(false);
                      }}
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Search
            </button>
          </div>
        </div>

        {/* Right: Collage */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex flex-wrap justify-center items-center gap-4">
          <div className="w-32 h-32 relative">
            <Image src="/images/tokyo.jpg" alt="Tokyo" fill className="rounded-xl shadow-md object-cover" sizes="128px" />
          </div>
          <div className="w-40 h-52 relative">
            <Image src="/images/bali.jpg" alt="Bali" fill className="rounded-xl shadow-md object-cover" sizes="160px" />
          </div>
          <div className="w-28 h-28 relative">
            <Image src="/images/paris.jpg" alt="Paris" fill className="rounded-xl shadow-md object-cover" sizes="112px" />
          </div>
          <div className="w-36 h-36 relative">
            <Image src="/images/rome.jpg" alt="Rome" fill className="rounded-xl shadow-md object-cover" sizes="144px" />
          </div>
        </div>
      </div>
    </section>
  );
}
