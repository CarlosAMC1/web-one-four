'use client'

import { motion } from 'framer-motion'

const diplomados = [
  {
    id: 1,
    titulo: 'Desarrollo Web Fullstack',
    descripcion: 'Aprende HTML, CSS, JavaScript, React y Node.js desde cero.',
  },
  {
    id: 2,
    titulo: 'Contabilidad para PYMES',
    descripcion: 'Domina registros contables, balances y software contable moderno.',
  },
  {
    id: 3,
    titulo: 'Liderazgo y Habilidades Blandas',
    descripcion: 'Mejora comunicación, trabajo en equipo e inteligencia emocional.',
  },
]

export default function DiplomadosDestacados() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        Diplomados Destacados
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {diplomados.map((diplomado, index) => (
          <motion.div
            key={diplomado.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#1f1f1f] p-6 rounded-xl border border-[#333] hover:scale-[1.02] hover:border-blue-600 transition-all duration-300 shadow-md"
          >
            <h3 className="text-xl font-semibold text-white mb-3">{diplomado.titulo}</h3>
            <p className="text-sm text-secondary">{diplomado.descripcion}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
