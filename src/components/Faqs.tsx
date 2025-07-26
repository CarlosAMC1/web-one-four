'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    pregunta: '¿Cuánto dura cada diplomado?',
    respuesta: 'Nuestros diplomados tienen una duración promedio de 2 a 4 meses, dependiendo del contenido y modalidad.',
  },
  {
    pregunta: '¿Las clases son en vivo o grabadas?',
    respuesta: 'Contamos con clases grabadas que puedes ver a tu ritmo, y sesiones en vivo opcionales para resolver dudas.',
  },
  {
    pregunta: '¿Otorgan certificado?',
    respuesta: 'Sí. Al finalizar y aprobar tu diplomado, obtendrás un certificado digital con valor profesional.',
  },
];

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setActiveIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="bg-white dark:bg-background text-black dark:text-white py-20 px-6 md:px-12 transition-colors duration-300" id="faqs">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Preguntas frecuentes
        </h2>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="border border-gray-300 dark:border-gray-600 rounded-xl overflow-hidden">
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center text-left p-5 bg-gray-100 dark:bg-[#1f1f1f] hover:bg-gray-200 dark:hover:bg-[#2a2a2a] transition"
              >
                <span className="font-medium text-lg">{item.pregunta}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${activeIndex === i ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5 text-gray-700 dark:text-gray-300 text-sm"
                  >
                    {item.respuesta}
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
