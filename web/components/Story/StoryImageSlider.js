import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useCallback } from 'react';

export default function StoryImageSlider({ images = [] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="mb-6">
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((img, index) => (
              <div
                className="min-w-full relative h-72 sm:h-96 mr-2 rounded-lg overflow-hidden"
                key={index}
              >
                <Image
                  src={img}
                  alt={`Story Image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow px-2 py-1 rounded-full z-10"
        >
          ◀
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow px-2 py-1 rounded-full z-10"
        >
          ▶
        </button>
      </div>
    </div>
  );
}