function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo y Título */}
          <div className="flex items-center space-x-3">
            <div className="bg-white rounded-full p-2">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-4.52-1.28-7-5.32-7-9V8.3l7-3.11v14.81z"/>
              </svg>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold">Safiro</h1>
          </div>

          {/* Título descriptivo - oculto en móviles */}
          <div className="hidden md:block">
            <p className="text-sm md:text-base font-medium">Plataforma de Estudio</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar