'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const slides = [
  {
    type: 'image-full',
    src: '/slide1.png',
    alt: 'Slide 1',
    title: 'Conecta con tu futuro',
    description: 'Diplomados virtuales para transformar tu vida.',
    button: {
      text: 'Ver Diplomados',
      href: '#diplomados',
    },
  },
  {
    type: 'split',
    src: '/slide2-layout-split.png',
    alt: 'Slide 2',
    title: 'Estudia desde cualquier lugar',
    description: 'Nuestros programas se adaptan a tu ritmo y estilo de vida.',
    button: {
      text: 'Postúlate ahora',
      href: '#admision',
    },
  },
  {
    type: 'video',
    src: '/videos/hero.mp4',
    title: 'Vive la experiencia ONE FOUR',
    description: 'Descubre cómo es estudiar con nosotros.',
    button: {
      text: 'Explora más',
      href: '#nosotros',
    },
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Slide tipo 1 */}
          {slide.type === 'image-full' && (
            <div className="w-full h-full relative">
              <Image src={slide.src} alt={slide.alt} layout="fill" objectFit="cover" />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-white/90 max-w-xl mb-6">{slide.description}</p>
                <a
                  href={slide.button.href}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-full shadow-lg transition"
                >
                  {slide.button.text}
                </a>
              </div>
            </div>
          )}

          {/* Slide tipo 2 */}
          {slide.type === 'split' && (
            <div className="flex flex-col md:flex-row w-full h-full">
              <div className="relative w-full md:w-1/2 h-[50vh] md:h-full">
                <Image src={slide.src} alt={slide.alt} layout="fill" objectFit="cover" />
              </div>
              <div className="flex flex-col justify-center px-8 py-10 w-full md:w-1/2 bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-gray-800 dark:text-white/80 mb-6">{slide.description}</p>
                <a
                  href={slide.button.href}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-full transition w-fit"
                >
                  {slide.button.text}
                </a>
              </div>
            </div>
          )}

          {/* Slide tipo 3 */}
          {slide.type === 'video' && (
            <div className="w-full h-full relative">
              <video
                src={slide.src}
                autoPlay
                muted
                loop
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-white/90 max-w-xl mb-6">{slide.description}</p>
                <a
                  href={slide.button.href}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-full transition"
                >
                  {slide.button.text}
                </a>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index
                ? 'bg-black dark:bg-white'
                : 'bg-black/30 dark:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Controles izquierda y derecha */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 dark:bg-black/40 hover:bg-white/50 dark:hover:bg-black/70 text-black dark:text-white text-2xl px-3 py-1 rounded-full z-20 transition"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 dark:bg-black/40 hover:bg-white/50 dark:hover:bg-black/70 text-black dark:text-white text-2xl px-3 py-1 rounded-full z-20 transition"
      >
        ›
      </button>
    </div>
  );
}
