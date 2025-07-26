"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion, AnimatePresence } from "framer-motion";

type Category = {
  name: string;
  image: string;
  courses: {
    title: string;
    description: string;
    image: string;
  }[];
};

const categories: Category[] = [
  {
    name: "Informática",
    image: "/img/informatica.jpg",
    courses: [
      {
        title: "Ofimática Pro",
        description: "Domina Word, Excel, PowerPoint y más.",
        image: "/img/ofimatica.jpg",
      },
      {
        title: "Diseño Gráfico",
        description: "Aprende Photoshop, Illustrator, Canva y más.",
        image: "/img/diseno.jpg",
      },
    ],
  },
  {
    name: "Contabilidad",
    image: "/img/contabilidad.jpg",
    courses: [
      {
        title: "Contabilidad Básica",
        description: "Aprende principios contables desde cero.",
        image: "/img/conta-basica.jpg",
      },
      {
        title: "Excel Contable",
        description: "Automatiza procesos contables con Excel.",
        image: "/img/excel-contable.jpg",
      },
    ],
  },
  {
    name: "Habilidades Blandas",
    image: "/img/blandas.jpg",
    courses: [
      {
        title: "Oratoria",
        description: "Pierde el miedo a hablar en público.",
        image: "/img/oratoria.jpg",
      },
      {
        title: "Liderazgo",
        description: "Desarrolla tu capacidad de guiar equipos.",
        image: "/img/liderazgo.jpg",
      },
    ],
  },
];

export default function ClientWrapper() {
  const [selected, setSelected] = useState(0);
  const current = categories[selected];

  return (
    <motion.section
      className="bg-white text-black dark:bg-background dark:text-white transition-colors duration-300"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="diplomados"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Sidebar categorías */}
        <aside className="w-full md:w-1/4 space-y-4">
          <h3 className="text-xl font-bold mb-4">Tipos de Diplomados</h3>
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                i === selected
                  ? "bg-blue-600 text-white font-semibold shadow-lg"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-[#1e1e1e] dark:text-gray-300 dark:hover:bg-[#2a2a2a]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </aside>

        {/* Contenido derecho */}
        <div className="w-full md:w-3/4 space-y-6">
          {/* Imagen destacada */}
          <div className="w-full h-48 md:h-64 rounded-2xl overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.image}
                src={current.image}
                alt={current.name}
                initial={{ opacity: 0.2, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Slider de cursos */}
          <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {current.courses.map((course, idx) => (
              <SwiperSlide key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-100 dark:bg-[#1a1a1a] p-4 rounded-xl shadow-md hover:shadow-blue-500/40 transition-all duration-300"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-40 w-full object-cover rounded-lg mb-4"
                  />
                  <h4 className="text-lg font-bold mb-1">{course.title}</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{course.description}</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-sm px-4 py-2 rounded-full text-white transition">
                    Ver más
                  </button>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
}
