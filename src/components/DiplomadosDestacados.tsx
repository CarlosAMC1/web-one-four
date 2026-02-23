'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Clock, Users, Star } from 'lucide-react';

const diplomados = [
  {
    slug: 'desarrollo-web-fullstack',
    titulo: 'Desarrollo Web Fullstack',
    descripcion: 'Domina Next.js, TypeScript y Supabase para crear aplicaciones modernas de alto impacto.',
    nivel: 'Intermedio',
    alumnos: '1.2k+',
    clases: '40+',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    slug: 'contabilidad-pymes',
    titulo: 'Contabilidad para PYMES',
    descripcion: 'Gestión financiera estratégica y herramientas digitales para el éxito empresarial moderno.',
    nivel: 'Básico a Pro',
    alumnos: '800+',
    clases: '32+',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    slug: 'habilidades-blandas',
    titulo: 'Liderazgo & Inteligencia Emocional',
    descripcion: 'Desarrolla las cualidades humanas que te diferenciarán en un mundo dominado por la IA.',
    nivel: 'Varios',
    alumnos: '2.5k+',
    clases: '24+',
    color: 'from-purple-500/20 to-pink-500/20',
  },
];

export default function DiplomadosDestacados() {
  return (
    <section className="bg-[#0a0a0a] py-32 px-6" id="diplomados">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black tracking-tighter mb-4"
            >
              Nuestros <span className="text-gradient">DIPLOMADOS</span>
            </motion.h2>
            <p className="text-gray-400 text-lg">
              Programas diseñados por expertos de la industria para garantizar tu éxito profesional.
            </p>
          </div>
          <Link href="/Campus" className="text-blue-500 font-bold flex items-center gap-2 hover:underline">
            Ver catálogo completo <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {diplomados.map((diplomado, index) => (
            <motion.div
              key={diplomado.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${diplomado.color} rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="glass-card p-8 rounded-[2rem] h-full flex flex-col relative z-10 hover:border-blue-500/50 transition-colors">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full">
                    {diplomado.nivel}
                  </span>
                </div>

                <h3 className="text-2xl font-black mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                  {diplomado.titulo}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  {diplomado.descripcion}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2 text-gray-500 text-xs font-medium">
                    <Clock className="w-4 h-4" />
                    <span>{diplomado.clases} Clases</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-xs font-medium">
                    <Users className="w-4 h-4" />
                    <span>{diplomado.alumnos} Estudiantes</span>
                  </div>
                </div>

                <Link
                  href={`/cursos/${diplomado.slug}`}
                  className="w-full bg-white text-black py-4 rounded-2xl font-black flex items-center justify-center gap-2 group-hover:bg-blue-600 group-hover:text-white transition-all transform active:scale-95"
                >
                  Ver Detalles <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
