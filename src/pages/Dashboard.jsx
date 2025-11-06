import React from 'react';
import { BookOpen, Calculator, Beaker, Code, Languages, Facebook, Twitter, Instagram } from 'lucide-react';
import { mockCategories } from '../data/mockData';

const iconMap = {
  BookOpen, Calculator, Beaker, Code, Languages
};

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header - Estilo Safiro */}
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            
            
          </div>
          <nav className="text-sm">
            
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Categorías de Materias</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCategories.map((category) => {
            const IconComponent = iconMap[category.icon];
            
            return (
              <div
                key={category.id}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 cursor-pointer border border-gray-100 hover:border-blue-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`${category.color} p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {category.students} estudiantes
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4">
                  Explora cursos y materiales de aprendizaje
                </p>
                
                <div className="flex items-center text-blue-600 text-sm font-semibold group-hover:translate-x-2 transition-transform">
                  Ver cursos →
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Footer - Estilo Safiro */}
      <footer className="bg-gray-800 text-white mt-16">
        
      </footer>
    </div>
  );
}

export default Dashboard;
