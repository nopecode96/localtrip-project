// Function to get the appropriate API URL based on environment
function getApiUrl() {
  // For server-side rendering, use internal docker network
  if (typeof window === 'undefined') {
    return process.env.NEXT_PRIVATE_API_URL || 'http://backend:3030';
  }
  // For client-side, use public URL
  return process.env.NEXT_PUBLIC_API_URL || 'https://api.localtrip.me';
}

export async function fetchHomepageData() {
  const baseUrl = getApiUrl();
  const res = await fetch(`${baseUrl}/homepage`);
  if (!res.ok) throw new Error('Failed to fetch homepage data');
  return res.json();
}

export async function fetchLocationSuggestions(query) {
  const baseUrl = getApiUrl();
  if (!query || query.length < 2) return [];
  const res = await fetch(`${baseUrl}/homepage/location-suggest?query=${encodeURIComponent(query)}`);
  if (!res.ok) return [];
  return res.json();
}
