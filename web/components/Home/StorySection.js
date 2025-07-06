import StoryCard from '../Story/StoryCard';

export default function StorySection({ stories }) {
  if (!stories || stories.length === 0) return null;

  // Normalisasi data story dari API
  const normalized = stories.map((s) => {
    // Gambar: s.imageUrl
    const image = s.imageUrl || '/images/bali.jpg';
    // Judul: s.title
    const title = s.title || '-';
    // Snippet: s.content atau s.snippet
    const snippet = s.content || s.snippet || '-';
    // Author: s.user.name
    const author = s.user?.name || '-';
    // Author photo: s.user.avatarUrl atau dummy
    const authorPhoto = s.user?.avatarUrl || '/images/profile1.png';
    return { image, title, snippet, author, authorPhoto };
  });

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6 text-dark">Travel Stories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {normalized.map((story, i) => (
          <StoryCard key={i} story={story} />
        ))}
      </div>
    </section>
  );
}
