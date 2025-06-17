import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <span className="text-gray-400">Feito com</span>
            <Heart className="w-5 h-5 text-red-500" />
            <Code className="w-5 h-5 text-blue-400" />
            <span className="text-gray-400">e</span>
            <Coffee className="w-5 h-5 text-amber-600" />
          </div>
          
          <p className="text-gray-400 mb-6">
            Criado pelo Squad03 • Prontos para dar vida às suas ideias
          </p>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © 2025 Squad03. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;