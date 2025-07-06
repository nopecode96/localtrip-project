
import HostCard from '../HostCard';

export default function TopExperiences({ experiences }) {
  if (!experiences || experiences.length === 0) return null;

  // Normalisasi data host dari experiences
  const hosts = experiences.map((exp) => {
    const host = exp.host || {};
    // Host name: prefer host.user.name, fallback to host.name
    const name = host.user?.name || host.name || '-';
    // Languages: array of host.languages[].language.name
    const languages = Array.isArray(host.languages)
      ? host.languages.map(l => l.language?.name || l.language || l.name || l)
      : [];
    // Avatar: prefer host.user.avatarUrl, fallback ke host.avatarUrl, host.avatar, atau dummy
    const avatar = host.user?.avatarUrl || host.avatarUrl || host.avatar || '/images/profile1.png';
    // Cover image: prefer host.coverImage, fallback ke exp.images[0], atau dummy
    const coverImage = host.coverImage || (Array.isArray(exp.images) ? exp.images[0] : undefined) || '/images/cover1.png';
    // City/country: prefer host.city.name, host.country.name
    const city = host.city?.name || '-';
    const country = host.country?.name || '-';
    // Rating: prefer host.rating, fallback ke exp.rating
    const rating = typeof host.rating === 'number' ? host.rating : (typeof exp.rating === 'number' ? exp.rating : 0);
    return {
      ...host,
      name,
      languages,
      avatar,
      coverImage,
      city,
      country,
      services: [exp],
      rating,
    };
  });

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Top Experiences</h2>
        <p className='mb-6'>Explore our most booked tours and photo sessions, curated based on ratings and traveler favorites.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {hosts.map((host, idx) => (
            <HostCard key={idx} host={host} />
          ))}
        </div>
      </div>
    </section>
  );
}
