'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full px-6 py-4 flex items-center justify-between
                 bg-white text-black border-b border-gray-200
                 dark:bg-background dark:text-white dark:border-[#262626]"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex items-center gap-3"
      >
        <Image
          src="/logo-onefour-white1.png"
          alt="Logo ONE FOUR"
          width={40}
          height={40}
          className="object-contain"
        />
        <span className="font-bold text-xl tracking-wide">ONE FOUR</span>
      </motion.div>

      <motion.nav
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="hidden md:flex items-center gap-6"
      >
        <Link
          href="#"
          className="text-sm font-medium text-gray-700 hover:text-black transition dark:text-secondary dark:hover:text-white"
        >
          Inicio
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-gray-700 hover:text-black transition dark:text-secondary dark:hover:text-white"
        >
          Diplomados
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-gray-700 hover:text-black transition dark:text-secondary dark:hover:text-white"
        >
          Nosotros
        </Link>

        <ThemeToggle />

        <Link
          href="/Campus"
          className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition"
        >
          Aula Virtual
        </Link>
      </motion.nav>
    </motion.header>
  );
}
