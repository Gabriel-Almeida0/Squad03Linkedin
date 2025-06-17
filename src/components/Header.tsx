import React from 'react';
import { Users } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Squad03</h1>
              <p className="text-sm text-gray-600">Time de Desenvolvimento</p>
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex space-x-8">
              <a href="#team" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Equipe
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Sobre
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;