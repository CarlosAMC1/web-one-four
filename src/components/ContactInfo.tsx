'use client';

import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const contacto = {
  telefono: '+51 987 654 321',
  whatsapp: 'https://wa.me/51987654321',
  correo: 'info@onefour.edu.pe',
  direccion: 'Av. Siempre Viva 123, Lima, Perú',
  redes: {
    facebook: 'https://facebook.com/onefour',
    instagram: 'https://instagram.com/onefour',
    linkedin: 'https://linkedin.com/company/onefour',
  },
};

export default function ContactInfo() {
  return (
    <section className="bg-white dark:bg-background text-black dark:text-white py-20 px-6 md:px-12 transition-colors duration-300" id="contacto">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Contáctanos</h2>

        <div className="grid sm:grid-cols-2 gap-8 text-left">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-blue-500" />
              <a href={`tel:${contacto.telefono}`} className="hover:underline">{contacto.telefono}</a>
            </div>
            <div className="flex items-center gap-4">
              <MessageCircle className="w-5 h-5 text-green-500" />
              <a href={contacto.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:underline">
                Enviar WhatsApp
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-red-500" />
              <a href={`mailto:${contacto.correo}`} className="hover:underline">{contacto.correo}</a>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-yellow-500" />
              <span>{contacto.direccion}</span>
            </div>
          </div>

          <div className="space-y-6 sm:text-right">
            <p className="font-medium">Síguenos en redes:</p>
            <div className="flex sm:justify-end gap-4">
              <a href={contacto.redes.facebook} target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6 hover:text-blue-600 transition" />
              </a>
              <a href={contacto.redes.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 hover:text-pink-500 transition" />
              </a>
              <a href={contacto.redes.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 hover:text-blue-500 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
