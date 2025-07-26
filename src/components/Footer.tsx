'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-[#0d0d0d] text-gray-700 dark:text-gray-300 pt-12 pb-6 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        {/* Logo + Nombre */}
        <div className="flex items-center gap-3">
          <Image src="/logo-onefour-white1.png" alt="Logo ONE FOUR" width={40} height={40} />
          <span className="font-bold text-lg text-black dark:text-white">ONE FOUR</span>
        </div>

        {/* Enlaces institucionales */}
        <ul className="flex flex-wrap items-center gap-6 text-sm font-medium">
          <li><Link href="/terminos" className="hover:underline">Términos y condiciones</Link></li>
          <li><Link href="/privacidad" className="hover:underline">Política de privacidad</Link></li>
          <li><Link href="/nosotros" className="hover:underline">Sobre nosotros</Link></li>
        </ul>

        {/* Redes */}
        <div className="flex gap-4">
          <a href="https://facebook.com/onefour" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-5 h-5 hover:text-blue-600 transition" />
          </a>
          <a href="https://instagram.com/onefour" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5 hover:text-pink-500 transition" />
          </a>
          <a href="https://linkedin.com/company/onefour" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 hover:text-blue-500 transition" />
          </a>
        </div>
      </div>

      {/* Copy */}
      <div className="mt-8 text-center text-xs text-gray-500 dark:text-gray-600">
        © {new Date().getFullYear()} ONE FOUR. Todos los derechos reservados.
      </div>
    </footer>
  );
}
