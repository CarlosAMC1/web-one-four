export default function Hero() {
  return (
    <section className="bg-container py-20 px-6 rounded-3xl mt-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight mb-4">
          Educación que transforma tu futuro
        </h1>
        <p className="text-secondary text-md md:text-lg mb-8">
          Aprende informática, contabilidad y habilidades blandas desde cero. Accede a diplomados prácticos y accesibles.
        </p>

        <div className="max-w-xl mx-auto bg-background border border-container rounded-full flex items-center px-4 py-2">
          <input
            type="text"
            placeholder="Busca tu Diplomado"
            className="flex-grow bg-transparent outline-none px-4 py-2 text-sm text-primary placeholder-secondary"
          />
          <button className="bg-accent text-white p-2 rounded-full hover:bg-blue-700 transition">
            🔍
          </button>
        </div>
      </div>
    </section>
  )
}
