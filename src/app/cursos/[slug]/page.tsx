'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2, Clock, Star, Users, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import NavbarClient from '../../../components/NavbarClient';
import Footer from '../../../components/Footer';

const COURSE_DATA: Record<string, any> = {
    'desarrollo-web-fullstack': {
        title: 'Desarrollo Web Fullstack',
        subtitle: 'Next.js, TypeScript & Supabase',
        description: 'Conviértete en un arquitecto de software moderno. Aprenderás a construir aplicaciones escalables utilizando las tecnologías más demandadas del mercado: React, Next.js, Node.js y bases de datos relacionales.',
        modules: ['Fundamentos de Web Moderna', 'Frontend con React & Next.js', 'Backend & APIs con Node', 'Deploy y Optimización'],
        duration: '6 Meses',
        level: 'Intermedio',
        price: '$499',
        alumnos: '1,200+',
        gradient: 'from-blue-600 to-indigo-700'
    },
    'contabilidad-pymes': {
        title: 'Contabilidad para PYMES',
        subtitle: 'Estrategia & Gestión Digital',
        description: 'Domina los fundamentos contables aplicados a la realidad empresarial. Aprende a gestionar estados financieros, impuestos y balances de forma eficiente con herramientas digitales de vanguardia.',
        modules: ['Principios Contables Generales', 'Gestión de Impuestos', 'Software Contable Moderno', 'Planificación Financiera'],
        duration: '4 Meses',
        level: 'Básico a Pro',
        price: '$350',
        alumnos: '800+',
        gradient: 'from-emerald-600 to-teal-700'
    },
    'habilidades-blandas': {
        title: 'Liderazgo & Inteligencia Emocional',
        subtitle: 'Soft Skills Premium',
        description: 'En un mundo impulsado por la tecnología, las habilidades humanas son el diferenciador definitivo. Desarrolla liderazgo, empatía y comunicación efectiva para liderar equipos de alto rendimiento.',
        modules: ['Autoconocimiento & Gestión', 'Comunicación Asertiva', 'Liderazgo Situacional', 'Resolución de Conflictos'],
        duration: '3 Meses',
        level: 'Varios',
        price: '$299',
        alumnos: '2,500+',
        gradient: 'from-purple-600 to-pink-700'
    }
};

export default function CoursePage() {
    const params = useParams();
    const slug = params.slug as string;
    const course = COURSE_DATA[slug];

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                <h1 className="text-2xl font-bold">Curso no encontrado</h1>
                <Link href="/" className="ml-4 text-blue-500 hover:underline">Volver al inicio</Link>
            </div>
        );
    }

    return (
        <div className="bg-[#050505] min-h-screen text-white">
            <NavbarClient />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-10 blur-[100px]`}></div>
                <div className="container mx-auto relative z-10">
                    <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-8 group">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Volver al Inicio
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <span className="bg-blue-600/10 text-blue-400 px-4 py-2 rounded-full text-sm font-bold border border-blue-500/20 uppercase tracking-widest">
                                DIPLOMADO PREMIUM
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
                                {course.title} <br />
                                <span className="text-gradient italic">{course.subtitle}</span>
                            </h1>
                            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-xl">
                                {course.description}
                            </p>

                            <div className="flex flex-wrap gap-6 pt-4">
                                <div className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-blue-500" />
                                    <span className="text-sm font-medium">{course.alumnos} Graduados</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-500" />
                                    <span className="text-sm font-medium">4.9/5 Calificación</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="glass-card p-10 rounded-[3rem] border-blue-500/30 shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)]"
                        >
                            <div className="space-y-8">
                                <div className="flex justify-between items-center bg-white/5 p-6 rounded-2xl">
                                    <span className="text-gray-400">Inversión Total</span>
                                    <span className="text-4xl font-black text-white">{course.price}</span>
                                </div>

                                <div className="grid gap-4">
                                    <div className="flex items-center gap-4 text-gray-300">
                                        <Clock className="w-6 h-6 text-blue-500" />
                                        <span className="font-medium">Duración: {course.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-300">
                                        <BookOpen className="w-6 h-6 text-blue-500" />
                                        <span className="font-medium">Nivel: {course.level}</span>
                                    </div>
                                </div>

                                <button className="w-full btn-primary text-xl py-5 shadow-blue-500/20">
                                    Inscribirme Ahora
                                </button>
                                <p className="text-center text-xs text-gray-500">Acceso inmediato a los contenidos al realizar el pago</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Modules Section */}
            <section className="py-24 px-6 bg-white/5">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-black mb-12 flex items-center gap-4 italic uppercase tracking-tighter">
                            Contenido del <span className="text-gradient">PROGRAMA</span>
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-8">
                            {course.modules.map((module: string, i: number) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-card p-8 rounded-3xl flex gap-4 items-start hover-lift"
                                >
                                    <div className="bg-blue-600 rounded-full p-1 flex-shrink-0">
                                        <CheckCircle2 className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Módulo {i + 1}</h4>
                                        <p className="text-gray-400 font-light">{module}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Enrollment Call to Action */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-2xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight tracking-tighter">¿Listo para <span className="text-gradient uppercase">COMENZAR</span>?</h2>
                    <p className="text-gray-400 text-lg font-light italic">Únete a cientos de profesionales que ya están transformando su carrera con ONE FOUR.</p>
                    <button className="btn-primary px-12 py-5 text-xl">Reservar mi Cupo</button>
                </div>
            </section>

            <Footer />
        </div>
    );
}
