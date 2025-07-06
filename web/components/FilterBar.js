export default function FilterBar({ filters, setFilters }) {
  return (
    <div className="flex flex-wrap gap-4 mb-10 justify-center">
      {/* Country */}
      <select
        className="border px-4 py-2 rounded-md"
        value={filters.country}
        onChange={(e) => setFilters({ ...filters, country: e.target.value })}
      >
        <option value="">All Countries</option>
        <option value="Indonesia">Indonesia</option>
        <option value="Japan">Japan</option>
      </select>

      {/* City */}
      <select
        className="border px-4 py-2 rounded-md"
        value={filters.city}
        onChange={(e) => setFilters({ ...filters, city: e.target.value })}
      >
        <option value="">All Cities</option>
        <option value="Bali">Bali</option>
        <option value="Yogyakarta">Yogyakarta</option>
        <option value="Kyoto">Kyoto</option>
      </select>

      {/* Type */}
      <select
        className="border px-4 py-2 rounded-md"
        value={filters.type}
        onChange={(e) => setFilters({ ...filters, type: e.target.value })}
      >
        <option value="">All Services</option>
        <option value="PHOTOGRAPHER">Photographer</option>
        <option value="TOUR_GUIDE">Tour Guide</option>
      </select>

      {/* Language */}
      <select
        className="border px-4 py-2 rounded-md"
        value={filters.language}
        onChange={(e) => setFilters({ ...filters, language: e.target.value })}
      >
        <option value="">All Languages</option>
        <option value="English">English</option>
        <option value="Bahasa">Bahasa</option>
        <option value="Japanese">Japanese</option>
      </select>
    </div>
  );
}
