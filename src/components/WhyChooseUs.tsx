'use client';

import { motion } from 'framer-motion';
import {
  FaChalkboardTeacher,
  FaLaptopCode,
  FaGlobeAmericas,
} from 'react-icons/fa';

const benefits = [
  {
    icon: <FaChalkboardTeacher className="text-4xl text-blue-400" />,
    title: 'Docentes Expertos',
    description: 'Aprende con profesionales con experiencia real en su campo.',
  },
  {
    icon: <FaLaptopCode className="text-4xl text-blue-400" />,
    title: 'Diplomados Prácticos',
    description: 'Formación enfocada en habilidades que el mercado necesita.',
  },
  {
    icon: <FaGlobeAmericas className="text-4xl text-blue-400" />,
    title: 'Acceso 100% Online',
    description: 'Estudia desde cualquier lugar con nuestra plataforma virtual.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function WhyChooseUs() {
  return (
    <section
      className="bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 py-20 px-6 md:px-12 transition-colors duration-300"
      id="beneficios"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black dark:text-white">
          ¿Por qué elegir <span className="text-blue-500 dark:text-blue-400">ONE FOUR</span>?
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-gray-800/70 border border-blue-500/20 dark:border-blue-500/30 rounded-2xl p-8 shadow-lg hover:shadow-blue-500/40 transition-all duration-300 backdrop-blur"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              variants={cardVariants}
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
