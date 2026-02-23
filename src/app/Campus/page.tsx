'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Lock, Rocket, GraduationCap } from 'lucide-react';
import NavbarClient from '../../components/NavbarClient';
import Footer from '../../components/Footer';

export default function CampusPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-background text-black dark:text-white transition-colors duration-300">
            <NavbarClient />

            <main className="flex-grow flex items-center justify-center px-6 py-20">
                <div className="max-w-3xl w-full text-center space-y-8">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center"
                    >
                        <div className="bg-blue-600/10 p-6 rounded-3xl">
                            <GraduationCap className="w-16 h-16 text-blue-600" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="space-y-4"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            Aula Virtual <span className="text-blue-600">ONE FOUR</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-secondary max-w-2xl mx-auto">
                            Estamos preparando una experiencia de aprendizaje de última generación. Muy pronto podrás acceder a tus cursos y diplomados.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="grid sm:grid-cols-2 gap-6 pt-8"
                    >
                        <div className="bg-gray-100 dark:bg-[#1c1c1c] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 text-left">
                            <Lock className="w-8 h-8 text-blue-500 mb-4" />
                            <h3 className="text-lg font-bold mb-2">Acceso Seguro</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Protección de datos y autenticación de alta seguridad para nuestros estudiantes.</p>
                        </div>
                        <div className="bg-gray-100 dark:bg-[#1c1c1c] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 text-left">
                            <Rocket className="w-8 h-8 text-blue-500 mb-4" />
                            <h3 className="text-lg font-bold mb-2">Próximamente</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Estamos en la fase final de implementación. ¡Mantente al tanto!</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="pt-10"
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/40"
                        >
                            Volver al Inicio
                        </Link>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
