'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-white text-black dark:bg-background dark:text-white transition-colors duration-300 py-20 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-4"
        >
          Educación que transforma tu futuro
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-secondary dark:text-gray-300 text-lg md:text-xl mb-10"
        >
          Aprende informática, contabilidad y habilidades blandas desde cero.
        </motion.p>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="max-w-xl mx-auto bg-gray-100 dark:bg-[#121212] border border-gray-300 dark:border-[#333] rounded-full flex items-center px-4 py-2 shadow-inner"
        >
          <input
            type="text"
            placeholder="Busca tu Diplomado"
            className="flex-grow bg-transparent outline-none px-4 py-2 text-sm text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
          <button className="bg-accent text-white p-2 rounded-full hover:bg-blue-700 transition">
            🔍
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
