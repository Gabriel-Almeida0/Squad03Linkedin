import React from 'react';
import { Sparkles, Target, Zap, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-2 mb-6">
            <Sparkles className="w-8 h-8 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Conheça Nossa Equipe
            </span>
            <Sparkles className="w-8 h-8 text-blue-600" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transformando Ideias Em
            <span className="block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Excelência Digital
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Somos um time apaixonado de desenvolvedores, designers e inovadores dedicados a criar 
            experiências digitais excepcionais que geram resultados e superam expectativas.
          </p>
          
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-3 sm:p-4 md:p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 sm:mb-4">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Orientados por Missão</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center">Focados em entregar soluções que importam</p>
            </div>
            
            <div className="flex flex-col items-center p-3 sm:p-4 md:p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-full flex items-center justify-center mb-2 sm:mb-4">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Inovação em Primeiro Lugar</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center">Abraçando tecnologias de ponta</p>
            </div>
            
            <div className="flex flex-col items-center p-3 sm:p-4 md:p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2 sm:mb-4">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">União da Equipe</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center">A colaboração impulsiona nosso sucesso</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;