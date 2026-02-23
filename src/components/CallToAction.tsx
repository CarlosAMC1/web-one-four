'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Rocket } from 'lucide-react';

export default function CallToAction() {
  return (
    <div className="px-6 py-20 pb-32">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-br from-blue-600 to-indigo-800 text-white p-12 md:p-24 rounded-[3rem] max-w-7xl mx-auto shadow-2xl overflow-hidden group"
        id="admision"
      >
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-transform duration-700"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

        <div className="relative z-10 text-center space-y-8">
          <div className="flex justify-center">
            <div className="bg-white/20 p-4 rounded-3xl backdrop-blur-md">
              <Rocket className="w-10 h-10 text-white" />
            </div>
          </div>

          <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight">
            ¿LISTO PARA <br /> <span className="text-blue-200">TRANSFORMAR</span> TU VIDA?
          </h2>

          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
            Las vacantes son limitadas. No pierdas la oportunidad de formarte con los mejores en el Instituto One Four.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Link
              href="#contacto"
              className="bg-white text-blue-700 hover:bg-gray-100 px-10 py-5 rounded-full text-xl font-black transition-all shadow-xl hover:shadow-white/20 active:scale-95"
            >
              Postularme Ahora
            </Link>
            <Link
              href="/Campus"
              className="bg-transparent border-2 border-white/30 hover:bg-white/10 px-10 py-5 rounded-full text-xl font-bold transition-all backdrop-blur-sm"
            >
              Explorar Catálogo
            </Link>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute bottom-10 left-10 w-24 h-24 border border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-12 h-12 bg-white/20 rounded-xl rotate-12"></div>
      </motion.section>
    </div>
  );
}
