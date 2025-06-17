import React from 'react';
import { squadMembers } from '../data/members';
import MemberCard from './MemberCard';

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Conheça Nossa Equipe Talentosa
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cada membro traz expertise única e paixão para criar experiências digitais excepcionais
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {squadMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;