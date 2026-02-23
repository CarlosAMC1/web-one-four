'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Sparkles, GraduationCap, Briefcase, Heart } from 'lucide-react';
import Link from 'next/link';

const slides = [
  {
    title: "Lidera la Era",
    subtitle: "Digital",
    description: "Diplomados de alta especialización en tecnología y gestión, diseñados para los líderes del mañana.",
    gradient: "from-blue-600 to-indigo-700",
    icon: <Sparkles className="w-12 h-12 text-blue-400" />,
  },
  {
    title: "Excelencia",
    subtitle: "Contable",
    description: "Domina las finanzas y la contabilidad con herramientas modernas y casos prácticos reales.",
    gradient: "from-emerald-600 to-teal-700",
    icon: <Briefcase className="w-12 h-12 text-emerald-400" />,
  },
  {
    title: "Habilidades",
    subtitle: "Premium",
    description: "Soft skills e inteligencia emocional para destacar en cualquier entorno profesional competitivo.",
    gradient: "from-purple-600 to-pink-700",
    icon: <Heart className="w-12 h-12 text-purple-400" />,
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[95vh] w-full overflow-hidden bg-[#050505] flex items-center justify-center">
      {/* Background Gradients */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`absolute inset-0 bg-gradient-to-br ${slides[current].gradient} blur-[120px]`}
        />
      </AnimatePresence>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatePresence mode='wait'>
            <motion.div
              key={current}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="space-y-6"
            >
              <div className="flex justify-center mb-4">
                {slides[current].icon}
              </div>

              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-tight text-white">
                {slides[current].title} <br />
                <span className="text-gradient uppercase">{slides[current].subtitle}</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                {slides[current].description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Link href="#diplomados" className="btn-primary text-lg">
                  Explorar Programas
                </Link>
                <Link href="#beneficios" className="glass-card px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all text-white">
                  Saber Más
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Pagination */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 transition-all duration-500 rounded-full ${i === current ? 'w-12 bg-blue-500' : 'w-4 bg-gray-700'}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button onClick={prev} className="absolute left-8 top-1/2 -translate-y-1/2 p-4 text-white/20 hover:text-white transition-colors hidden md:block">
        <ChevronLeft className="w-10 h-10" />
      </button>
      <button onClick={next} className="absolute right-8 top-1/2 -translate-y-1/2 p-4 text-white/20 hover:text-white transition-colors hidden md:block">
        <ChevronRight className="w-10 h-10" />
      </button>

      {/* Hero Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent"></div>
    </section>
  );
}
