import React from 'react';
import { Linkedin, ExternalLink, MapPin } from 'lucide-react';
import { Member } from '../types/Member';

interface MemberCardProps {
  member: Member;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <div className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
      <div className="relative overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
            <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed">{member.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {member.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a
            href={member.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          
          {member.portfolioUrl && (
            <a
              href={member.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Portfólio</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;