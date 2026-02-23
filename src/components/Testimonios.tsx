'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonios = [
  {
    nombre: 'Carla Mendoza',
    carrera: 'Diplomado en Contabilidad',
    frase: 'Gracias a ONE FOUR conseguí trabajo en una empresa contable en solo 2 meses. La calidad es insuperable.',
  },
  {
    nombre: 'Luis Ramírez',
    carrera: 'Diplomado en Desarrollo Web',
    frase: 'La metodología práctica fue clave. Ahora tengo mi primera web freelance y me siento capaz de todo.',
  },
  {
    nombre: 'Ana Torres',
    carrera: 'Diplomado en Soft Skills',
    frase: 'Me ayudó a mejorar mi liderazgo radicalmente. Entendí que la inteligencia emocional es la base de todo éxito.',
  },
];

export default function Testimonios() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden" id="testimonios">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            Voces de <span className="text-gradient uppercase">ÉXITO</span>
          </motion.h2>
          <p className="text-gray-400 text-lg">Únete a nuestra comunidad de graduados que ya están transformando su futuro profesional.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonios.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 rounded-[2.5rem] relative group"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-blue-600/10 group-hover:text-blue-600/20 transition-colors" />

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-blue-500 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 text-lg italic leading-relaxed mb-8 flex-grow">
                "{t.frase}"
              </p>

              <div>
                <h4 className="font-bold text-xl">{t.nombre}</h4>
                <p className="text-sm text-blue-500 font-medium tracking-wide uppercase mt-1">{t.carrera}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
