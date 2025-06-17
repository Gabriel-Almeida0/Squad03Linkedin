import { Member } from '../types/Member';

// Import images
import rebecaImg from '../imagens/Rebeca.png';
import daviImg from '../imagens/davi.png';
import juliaImg from '../imagens/Julia.png';
import gabrielImg from '../imagens/Gabriel.png';
import laraImg from '../imagens/Lara.png';
import alexandreImg from '../imagens/alexandre.png';
import carlaImg from '../imagens/carla.png';
import guilhermeImg from '../imagens/Guilherme.png';
import joaoArthurImg from '../imagens/Joao Arthur.png';

export const squadMembers: Member[] = [
  {
    id: 1,
    name: "Gabriel",
    role: "Líder, Arquiteto de Software e Programador",
    description: "Responsável pela liderança técnica, arquitetura e desenvolvimento do sistema de gerenciamento de amostras biológicas.",
    image: gabrielImg,
    linkedinUrl: "https://www.linkedin.com/in/gabriel-almeida-695b9933b/",
    portfolioUrl: "https://gabriel-almeida0.github.io/portifolio/",
    skills: ["Java", "H2", "Spring Boot"]
  },
  {
    id: 2,
    name: "Rebeca",
    role: "Testes e Requisitos",
    description: "Responsável pela elaboração de requisitos e realização de testes para garantir a qualidade do sistema.",
    image: rebecaImg,
    linkedinUrl: "https://linkedin.com/in/rebeca",
    portfolioUrl: null,
    skills: ["Postman", "Java", "Testes"]
  },
  {
    id: 3,
    name: "Davi",
    role: "Documentação",
    description: "Responsável pela documentação técnica e de usuário do sistema de gerenciamento de amostras biológicas.",
    image: daviImg,
    linkedinUrl: "https://www.linkedin.com/in/davi-todt-471019363/",
    portfolioUrl: null,
    skills: ["Documentação", "Markdown", "UML"]
  },
  {
    id: 4,
    name: "Alexandre",
    role: "Requisitos e Modelagem de Banco",
    description: "Responsável pela elaboração de requisitos e modelagem do banco de dados do sistema.",
    image: alexandreImg,
    linkedinUrl: "https://www.linkedin.com/in/alexandre-matos-83621729b",
    portfolioUrl: "https://github.com/justxandao",
    skills: ["Modelagem de Dados", "SQL", "Requisitos"]
  },
  {
    id: 5,
    name: "Julia",
    role: "Programadora e Auxiliar de Teste",
    description: "Desenvolvedora de software e auxílio na realização de testes do sistema.",
    image: juliaImg,
    linkedinUrl: "https://www.linkedin.com/in/júlia-costa-274819244",
    portfolioUrl: null,
    skills: ["Postman", "Java", "Testes"]
  },
  {
    id: 6,
    name: "Lara",
    role: "Testes e Requisitos",
    description: "Responsável pela elaboração de requisitos e realização de testes para garantir a qualidade do sistema.",
    image: laraImg,
    linkedinUrl: "https://linkedin.com/in/lara",
    portfolioUrl: null,
    skills: ["Postman", "Testes", "Requisitos"]
  },
  {
    id: 7,
    name: "Carla",
    role: "Documentação",
    description: "Responsável pela documentação técnica e de usuário do sistema de gerenciamento de amostras biológicas.",
    image: carlaImg,
    linkedinUrl: "https://linkedin.com/in/carla",
    portfolioUrl: null,
    skills: ["Documentação", "Markdown", "UML"]
  },
  {
    id: 8,
    name: "Guilherme",
    role: "Modelagem de Banco de Dados",
    description: "Especialista em modelagem de banco de dados para o sistema de gerenciamento de amostras.",
    image: guilhermeImg,
    linkedinUrl: "https://www.linkedin.com/in/guilherme-silva-56b7342b1/",
    portfolioUrl: null,
    skills: ["Lucidchart", "SQL", "Modelagem de Dados"]
  },
  {
    id: 9,
    name: "João Arthur",
    role: "Documentação e Testes",
    description: "Responsável pela documentação e realização de testes do sistema.",
    image: joaoArthurImg,
    linkedinUrl: "https://br.linkedin.com/in/joão-arthur-6014b4339",
    portfolioUrl: null,
    skills: ["Documentação", "Testes", "QA"]
  }
];