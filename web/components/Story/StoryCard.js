import Image from 'next/image';

export default function StoryCard({ story }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col gap-3">
      <div className="relative w-full h-56 rounded-lg overflow-hidden mb-2">
        <Image src={story.image} alt={story.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
      </div>
      <h3 className="font-semibold text-lg text-gray-800">{story.title}</h3>
      <p className="text-gray-600 text-sm flex-1">{story.snippet}</p>
      <div className="flex items-center gap-2 mt-2">
        <Image src={story.authorPhoto} alt={story.author} width={32} height={32} className="rounded-full border" sizes="32px" />
        <span className="text-sm text-gray-700">{story.author}</span>
      </div>
    </div>
  );
}
