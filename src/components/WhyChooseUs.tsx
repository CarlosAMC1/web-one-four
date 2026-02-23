'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe, Users, Award, BookOpen } from 'lucide-react';

const benefits = [
  {
    icon: <Award className="w-8 h-8 text-blue-500" />,
    title: 'Certificación Oficial',
    description: 'Nuestros diplomados cuentan con el respaldo institucional necesario para potenciar tu CV.',
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-500" />,
    title: 'Aprendizaje Acelerado',
    description: 'Metodología enfocada en la práctica que te permite aplicar lo aprendido desde el primer día.',
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-500" />,
    title: 'Acceso Global',
    description: 'Estudia a tu ritmo desde cualquier lugar del mundo con nuestra plataforma 24/7.',
  },
  {
    icon: <Users className="w-8 h-8 text-blue-500" />,
    title: 'Mentoría Especializada',
    description: 'Acompañamiento constante de profesionales expertos que guiarán tu proceso educativo.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
    title: 'Calidad Garantizada',
    description: 'Contenidos actualizados constantemente siguiendo las últimas tendencias del mercado.',
  },
  {
    icon: <BookOpen className="w-8 h-8 text-blue-500" />,
    title: 'Recursos Exclusivos',
    description: 'Accede a materiales, bibliotecas y herramientas premium solo para nuestros estudiantes.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden" id="beneficios">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight mb-6"
          >
            ¿Por qué <span className="text-gradient">ONE FOUR</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Elevamos el estándar de la educación virtual con un enfoque premium y resultados tangibles.
          </motion.p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl hover-lift group"
            >
              <div className="bg-blue-600/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
    </section>
  );
}
