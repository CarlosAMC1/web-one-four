'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonios = [
  {
    nombre: 'Carla Mendoza',
    carrera: 'Diplomado en Contabilidad',
    frase: 'Gracias a ONE FOUR conseguí trabajo en una empresa contable en solo 2 meses.',
  },
  {
    nombre: 'Luis Ramírez',
    carrera: 'Diplomado en Desarrollo Web',
    frase: 'La metodología práctica fue clave. Ahora tengo mi primera web freelance.',
  },
  {
    nombre: 'Ana Torres',
    carrera: 'Diplomado en Habilidades Blandas',
    frase: 'Me ayudó a mejorar mi liderazgo en mi actual empleo.',
  },
];

export default function Testimonios() {
  return (
    <section className="bg-white dark:bg-background text-black dark:text-white py-20 px-6 md:px-12 transition-colors duration-300" id="testimonios">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Opiniones de nuestros estudiantes
        </h2>

        <Swiper
          spaceBetween={20}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 1.3 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonios.map((t, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-100 dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-left shadow-md hover:shadow-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-gray-800 dark:text-gray-300 italic mb-4">“{t.frase}”</p>
                <h4 className="font-bold text-lg">{t.nombre}</h4>
                <p className="text-sm text-secondary dark:text-gray-400">{t.carrera}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
