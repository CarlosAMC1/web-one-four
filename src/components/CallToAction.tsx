'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative bg-blue-600 dark:bg-blue-700 text-white py-20 px-6 md:px-12 rounded-3xl mx-4 md:mx-12 mt-12 shadow-lg overflow-hidden"
      id="admision"
    >
      {/* Overlay opcional para agregar una imagen o patrón */}
      <div className="absolute inset-0 opacity-10 bg-[url('/pattern-call.png')] bg-cover bg-center pointer-events-none"></div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          ¡Impulsa tu carrera hoy!
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Postúlate ahora y accede a diplomados con alta demanda laboral.
        </p>
        <Link
          href="#contacto"
          className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-full text-sm font-semibold transition shadow"
        >
          Postúlate ahora
        </Link>
      </div>
    </motion.section>
  );
}
