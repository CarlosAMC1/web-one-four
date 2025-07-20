// components/HeroCarousel.tsx
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'
import Link from 'next/link'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    image: '/images/slide.png',
    title: 'Transforma tu futuro',
    text: 'Diplomados 100% online para avanzar desde casa',
    button: {
      label: 'Ver Diplomados',
      link: '/#diplomados'
    }
  },
  {
    id: 2,
    image: '/images/slide2.jpg',
    title: 'Educación accesible y de calidad',
    text: 'One Four te lleva al siguiente nivel',
    button: {
      label: 'Postúlate Ahora',
      link: '/#admision'
    }
  },
]

export default function HeroCarousel() {
  return (
    <div className="w-full h-[500px] relative">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000 }}
        modules={[Pagination, Autoplay]}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover brightness-[.6]"
                priority
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg md:text-xl mb-6">{slide.text}</p>
                <Link
                  href={slide.button.link}
                  className="bg-accent hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition"
                >
                  {slide.button.label}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
