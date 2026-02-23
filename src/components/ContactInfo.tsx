'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, MessageCircle, Send } from 'lucide-react';

const contacto = {
  telefono: '+51 987 654 321',
  whatsapp: 'https://wa.me/51987654321',
  correo: 'info@onefour.edu.pe',
  direccion: 'Av. Corrientes 1234, Lima, Perú',
  redes: [
    { name: 'Facebook', icon: <Facebook />, url: '#' },
    { name: 'Instagram', icon: <Instagram />, url: '#' },
    { name: 'Linkedin', icon: <Linkedin />, url: '#' },
  ],
};

export default function ContactInfo() {
  return (
    <section className="py-24 bg-[#050505] px-6" id="contacto">
      <div className="container mx-auto">
        <div className="glass-card rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div className="space-y-10">
              <div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                  Estamos <br /><span className="text-gradient uppercase">CONECTADOS</span>
                </h2>
                <p className="text-gray-400 text-lg font-light max-w-md">
                  ¿Tienes alguna duda específica? Nuestro equipo de admisiones está listo para ayudarte en tu camino al éxito.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: <Phone className="text-blue-500" />, label: 'Llámanos', val: contacto.telefono, href: `tel:${contacto.telefono}` },
                  { icon: <MessageCircle className="text-green-500" />, label: 'WhatsApp', val: 'Chat en vivo', href: contacto.whatsapp },
                  { icon: <Mail className="text-blue-400" />, label: 'Email', val: contacto.correo, href: `mailto:${contacto.correo}` },
                  { icon: <MapPin className="text-red-400" />, label: 'Ubicación', val: contacto.direccion, href: '#' },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6 group hover:bg-white/5 p-4 rounded-2xl transition-colors"
                  >
                    <div className="bg-white/5 p-4 rounded-xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{item.label}</p>
                      <p className="text-lg font-medium">{item.val}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass-card bg-white/5 border-white/10 p-8 md:p-12 rounded-[2.5rem]">
              <h3 className="text-2xl font-bold mb-8 italic">Envíanos un mensaje rápido</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-6">
                  <input type="text" placeholder="Nombre completo" className="bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-blue-500 transition-colors" />
                  <input type="email" placeholder="Email profesional" className="bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
                <textarea placeholder="¿En qué diplomado estás interesado?" rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-blue-500 transition-colors"></textarea>
                <button className="w-full btn-primary flex items-center justify-center gap-3 py-4 text-lg">
                  Enviar Mensaje <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Social Bar */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/5 pt-12">
          <p className="text-gray-500 font-medium">© 2026 Instituto One Four. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            {contacto.redes.map((red, i) => (
              <a key={i} href={red.url} className="text-gray-400 hover:text-white transition-colors bg-white/5 p-3 rounded-full hover:bg-blue-600">
                {red.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
