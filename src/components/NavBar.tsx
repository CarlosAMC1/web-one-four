'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full bg-background border-b border-[#262626] px-6 py-4 flex items-center justify-between"
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
        <span className="font-bold text-xl text-white tracking-wide">ONE FOUR</span>
      </motion.div>

      <motion.nav
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="hidden md:flex items-center gap-6"
      >
        <Link href="#" className="text-sm font-medium text-secondary hover:text-white transition">Inicio</Link>
        <Link href="#" className="text-sm font-medium text-secondary hover:text-white transition">Diplomados</Link>
        <Link href="#" className="text-sm font-medium text-secondary hover:text-white transition">Nosotros</Link>
        <Link
          href="/Campus"
          className="bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition"
        >
          Aula Virtual
        </Link>
      </motion.nav>
    </motion.header>
  )
}
