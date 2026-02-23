'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    pregunta: '¿Cuánto dura cada diplomado?',
    respuesta: 'Nuestros diplomados tienen una duración promedio de 2 a 6 meses, dependiendo de la especialidad y el ritmo del estudiante.',
  },
  {
    pregunta: '¿Las clases son en vivo o grabadas?',
    respuesta: 'Combinamos lo mejor de ambos mundos: clases grabadas de alta calidad disponibles 24/7 y sesiones en vivo semanales para resolución de dudas complejas.',
  },
  {
    pregunta: '¿El certificado tiene validez internacional?',
    respuesta: 'Sí. Nuestros certificados digitales cuentan con respaldo institucional y códigos de verificación QR con validez en toda Latinoamérica.',
  },
  {
    pregunta: '¿Necesito experiencia previa?',
    respuesta: 'Depende del diplomado. Tenemos niveles desde "Básico" hasta "Avanzado". En la página de cada curso encontrarás los requisitos específicos.',
  },
];

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#050505] px-6" id="faqs">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block p-3 bg-blue-600/10 rounded-2xl mb-4"
          >
            <HelpCircle className="w-8 h-8 text-blue-500" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">Preguntas <span className="text-gradient uppercase">FRECUENTES</span></h2>
          <p className="text-gray-400">Resolvemos tus dudas para que des el paso hoy mismo.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="glass-card rounded-[2rem] overflow-hidden border-white/5">
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full flex justify-between items-center text-left p-8 hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg md:text-xl pr-8">{item.pregunta}</span>
                <div className={`p-2 rounded-full bg-blue-600/10 transition-transform duration-300 ${activeIndex === i ? 'rotate-180 bg-blue-600 text-white' : 'text-blue-500'}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <div className="px-8 pb-8 text-gray-400 text-lg font-light leading-relaxed border-t border-white/5 pt-4">
                      {item.respuesta}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
