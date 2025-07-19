'use client'

export default function Navbar() {
  return (
    <header className="w-full px-6 py-4 border-b border-container flex items-center justify-between bg-background">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-white rounded-full text-black flex items-center justify-center font-bold text-lg">1F</div>
        <span className="font-bold text-xl">ONE FOUR</span>
      </div>
      <nav className="flex items-center gap-6">
        <a href="#" className="text-sm font-medium text-secondary hover:text-primary">Inicio</a>
        <a href="#" className="text-sm font-medium text-secondary hover:text-primary">Diplomados</a>
        <a href="#" className="text-sm font-medium text-secondary hover:text-primary">Nosotros</a>
        <a
          href="/Campus"
          className="bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition"
        >
          Aula Virtual
        </a>
      </nav>
    </header>
  )
}
