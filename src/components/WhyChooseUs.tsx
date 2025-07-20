'use client'

import { motion } from 'framer-motion'
import { FaLaptopCode, FaUserTie, FaGlobe } from 'react-icons/fa'

const beneficios = [
  {
    icon: <FaLaptopCode className="text-accent text-3xl" />,
    titulo: 'Diplomados 100% prácticos',
    descripcion: 'Aprende haciendo desde el primer día con proyectos reales.',
  },
  {
    icon: <FaUserTie className="text-accent text-3xl" />,
    titulo: 'Enfocados al trabajo',
    descripcion: 'Diseñados para mejorar tu perfil profesional rápidamente.',
  },
  {
    icon: <FaGlobe className="text-accent text-3xl" />,
    titulo: 'Acceso desde cualquier lugar',
    descripcion: 'Estudia a tu ritmo, desde tu móvil o computadora.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        ¿Por qué elegir <span className="text-accent">ONE FOUR</span>?
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {beneficios.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#1a1a1a] p-6 rounded-xl border border-[#333] hover:border-accent hover:scale-[1.03] transition-all duration-300"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{item.titulo}</h3>
            <p className="text-sm text-secondary">{item.descripcion}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
