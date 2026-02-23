'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="glass-nav w-full px-6 py-4 flex items-center justify-between"
    >
      <Link href="/">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <Logo />
        </motion.div>
      </Link>

      <motion.nav
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="hidden md:flex items-center gap-8"
      >
        <Link
          href="/"
          className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-400 dark:hover:text-blue-400"
        >
          Inicio
        </Link>
        <Link
          href="#diplomados"
          className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-400 dark:hover:text-blue-400"
        >
          Diplomados
        </Link>
        <Link
          href="#beneficios"
          className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-400 dark:hover:text-blue-400"
        >
          Nosotros
        </Link>

        <ThemeToggle />

        <Link
          href="/Campus"
          className="btn-primary"
        >
          Aula Virtual
        </Link>
      </motion.nav>
    </motion.header>
  );
}
