export async function fetchHomepageData() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/homepage`);
  if (!res.ok) throw new Error('Failed to fetch homepage data');
  return res.json();
}

export async function fetchLocationSuggestions(query) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  if (!query || query.length < 2) return [];
  const res = await fetch(`${baseUrl}/homepage/location-suggest?query=${encodeURIComponent(query)}`);
  if (!res.ok) return [];
  return res.json();
}
