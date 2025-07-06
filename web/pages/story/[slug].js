'use client';

import Navbar from '@/components/Navbar/NavbarBase';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import { useState } from 'react';
import StoryImageSlider from '@/components/Story/StoryImageSlider';
// Dummy data sementara
const stories = [
  {
    slug: 'sunset-trek-ubud',
    title: 'Sunset Trek with a Local in Ubud',
    author: 'Rie H.',
    location: 'Ubud, Bali',
    date: 'May 2025',
    images: [
      '/images/bali.jpg',
      '/images/bali.jpg',
      '/images/bali.jpg',
      '/images/bali.jpg',
      '/images/bali.jpg',
      '/images/bali.jpg',
    ],
    content: `
      Saya dan dua teman saya berangkat pagi-pagi bersama Made, host lokal kami yang super ramah dan energik. 
      Kami trekking melewati sawah, berhenti di sebuah pura kecil yang jarang dikunjungi turis, dan bahkan sempat ikut membantu masak di rumah keluarganya. 
      Momen terbaik? Duduk di atas batu besar menghadap sunset sambil ngopi bareng warga lokal. Rasanya autentik dan personal banget!
    `,
  },
  {
    slug: 'tokyo-sakura-trails',
    title: 'From Tokyo Streets to Sakura Trails',
    author: 'Aiko N.',
    location: 'Tokyo, Japan',
    date: 'April 2025',
    images: [
      '/images/bali.jpg',
      '/images/bali.jpg',
      '/images/bali.jpg',
      '/images/bali.jpg',
      '/images/bali.jpg',
      '/images/bali.jpg',
    ],
    content: `
      Saya iseng daftar ke host di Tokyo karena penasaran, eh malah jadi sahabatan. 
      Kami janjian di Stasiun Shibuya, lalu eksplor jalanan kecil penuh kafe, belanja vintage, dan naik kereta ke pegunungan. 
      Host-nya ngarahin spot foto terbaik buat hanami — sakura mekar semua, saya dapat ratusan foto bagus!`
  },
];

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(128);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes((prev) => prev + (liked ? -1 : 1));
  };

  return (
    <button
      onClick={toggleLike}
      className={`flex items-center gap-2 transition-all duration-300 ${liked ? 'text-pink-500 scale-110' : 'text-gray-400 hover:text-pink-500'}`}
    >
      <span className="text-xl">{liked ? '❤️' : '🤍'}</span>
      <span className="text-sm">{likes} {likes === 1 ? 'like' : 'likes'}</span>
    </button>
  );
}

export default function StoryDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  const story = stories.find((s) => s.slug === slug) || null;

  if (!story) return <div className="p-8 text-center">Story not found.</div>;

  return (
    <>
      <Navbar />

      <main className="bg-white min-h-screen px-4 py-8 md:px-12 lg:px-24">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{story.title}</h1>
          <p className="text-gray-500 mb-4 text-sm">
            By {story.author} · {story.location} · {story.date}
          </p>

          <StoryImageSlider images={story.images} />
    


          <div className="prose max-w-none prose-sm md:prose-base text-justify">
            {story.content.split('\n').map((p, i) => (
              <p key={i}>{p.trim()}</p>
            ))}
          </div>
                  {/* Share, Like, Comment */}
          <div className="mt-10 border-t pt-6 text-sm text-gray-600 space-y-6">
            {/* Share */}
            <div className="flex items-center gap-4">
              <span className="font-medium">Share:</span>
              <button className="hover:underline text-blue-600">Facebook</button>
              <button className="hover:underline text-blue-600">Twitter</button>
              <button className="hover:underline text-blue-600">Copy Link</button>
            </div>

            {/* Like Button */}
            <LikeButton />

            {/* Comment Section */}
            <div>
              <h3 className="text-md font-semibold mb-2">Comments</h3>
              <form className="mb-4">
                <textarea
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                  rows="3"
                  placeholder="Leave a comment..."
                ></textarea>
                <button
                  type="submit"
                  className="mt-2 bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700"
                >
                  Post Comment
                </button>
              </form>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium">Wulan</p>
                  <p className="text-sm text-gray-600">Wah pengen banget coba trekking bareng warga lokal!</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Bayu</p>
                  <p className="text-sm text-gray-600">Foto sunset-nya pasti keren banget nih 📸</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
