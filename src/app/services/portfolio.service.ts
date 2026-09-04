import { Injectable } from '@angular/core';

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
  highlighted?: boolean;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  experiences: Experience[] = [
    {
      id: 1,
      company: 'Fagron Tech',
      position: 'Analista de Sistemas Sênior',
      period: 'outubro 2024 - Presente',
      location: 'São Paulo, Brasil',
      description: [
        'Desenvolvimento e manutenção de aplicações com .NET e Angular',
        'Trabalho com microserviços, microfrontends e arquitetura escalável',
        'Implementação e otimização de pipelines com Azure DevOps',
        'Monitoramento proativo e otimização de sistemas para alta disponibilidade',
        'Integração com RabbitMQ e outras tecnologias de mensageria'
      ],
      technologies: ['.NET', 'Angular', 'Microserviços', 'RabbitMQ', 'Azure DevOps', 'Docker', 'SQL Server'],
      highlighted: true
    },
    {
      id: 2,
      company: 'Impulso',
      position: 'Analista de Sistemas Sênior',
      period: 'outubro 2024 - março 2025 (6 meses)',
      location: 'Alocado na Fagron Tech',
      description: [
        'Desenvolvimento e manutenção de aplicações com .NET e Angular',
        'Arquitetura com microserviços e microfrontends',
        'Implementação de CI/CD pipelines',
        'Monitoramento proativo de sistemas'
      ],
      technologies: ['.NET', 'Angular', 'Microserviços', 'Azure DevOps', 'RabbitMQ']
    },
    {
      id: 3,
      company: 'Confitec',
      position: 'Analista de Sistemas Sênior',
      period: 'abril 2023 - outubro 2024 (1 ano 7 meses)',
      location: 'São Paulo, Brasil',
      description: [
        'Liderança técnica de projetos de inovação com Inteligência Artificial',
        'Condução de migração de sistemas legados para arquiteturas modernas',
        'Validação de código e definição de padrões de qualidade',
        'Administração de banco de dados com otimização de queries',
        'Deploy em ambientes de produção com Azure DevOps'
      ],
      technologies: ['.NET', 'Angular', 'Kafka', 'SQL Server', 'Azure DevOps', 'IA/ML', 'CQRS', 'Onion Architecture']
    },
    {
      id: 4,
      company: 'MJV Technology & Innovation',
      position: 'Mobile Developer',
      period: 'agosto 2022 - abril 2023 (9 meses)',
      location: 'Brasil',
      description: [
        'Desenvolvimento de aplicativos móveis para Internet Banking',
        'Foco em UI/UX e experiência do usuário',
        'Publicação de aplicativos nas lojas Google Play e Apple Store',
        'Integração com serviços bancários'
      ],
      technologies: ['Ionic', 'Angular', 'APIs REST', 'TypeScript', 'Git', 'CI/CD']
    },
    {
      id: 5,
      company: 'Gentus',
      position: 'Analista de Sistemas',
      period: 'janeiro 2019 - julho 2022 (3 anos 7 meses)',
      location: 'Pato Branco, Paraná',
      description: [
        'Desenvolvimento de soluções para clínicas e consultórios médicos',
        'Arquitetura de software e definição de APIs',
        'Liderança técnica e tomada de decisões arquiteturais',
        'Implementação de integrações com OneSignal, Twilio e SignalR',
        'Deploy em IIS, AWS e Azure'
      ],
      technologies: ['Angular', 'Ionic', '.NET', 'SQL Server', 'PostgreSQL', 'AWS', 'Azure', 'JWT/OAuth2', 'Entity Framework']
    },
    {
      id: 6,
      company: 'Faculdade de Pato Branco (FADEP)',
      position: 'Professor',
      period: 'outubro 2018 - fevereiro 2019 (5 meses)',
      location: 'Pato Branco e Região, Brasil',
      description: [
        'Ministrava aulas de lógica de programação e modelagem de banco de dados',
        'Ensino de banco de dados, Delphi, Python e HTML/CSS',
        'Formação acadêmica de alunos em análise e desenvolvimento de sistemas'
      ],
      technologies: ['Python', 'Delphi', 'HTML/CSS', 'Banco de Dados', 'Lógica de Programação']
    },
    {
      id: 7,
      company: 'Devionn Soluções Tecnológicas',
      position: 'Desenvolvedor Full Stack',
      period: 'agosto 2016 - outubro 2018 (2 anos 3 meses)',
      location: 'Pato Branco, Paraná',
      description: [
        'Desenvolvimento de soluções para força de vendas e monitoramento',
        'Liderança de equipes de desenvolvimento',
        'Arquitetura de sistemas completos',
        'Implementação e manutenção em ambiente de produção'
      ],
      technologies: ['Angular', 'Ionic', 'Python', 'Java', 'PostgreSQL', 'AWS']
    }
  ];

  skills: Skill[] = [
    {
      category: 'Frontend',
      items: ['Angular (v5 ao v18)', 'AngularJS', 'Ionic', 'TypeScript', 'JavaScript', 'RxJS', 'Progressive Web Apps (PWA)', 'HTML5', 'CSS/SCSS', 'Bootstrap', 'Material Design']
    },
    {
      category: 'Backend',
      items: ['.NET (CQRS, Onion Architecture)', '.NET Core', 'Node.js', 'Entity Framework', 'APIs REST', 'Microserviços', 'Design Patterns', 'SOLID Principles', 'Clean Code']
    },
    {
      category: 'Banco de Dados',
      items: ['SQL Server', 'MongoDB', 'PostgreSQL', 'Query Optimization', 'Views', 'Procedures', 'DBA', 'Índices', 'Performance Tuning', 'Replicação']
    },
    {
      category: 'Arquitetura & DevOps',
      items: ['Microserviços', 'CQRS', 'Onion Architecture', 'Docker', 'Kubernetes', 'Azure DevOps', 'CI/CD', 'RabbitMQ', 'Apache Kafka', 'Elasticsearch', 'Datadog', 'Logging']
    },
    {
      category: 'Integrações & Segurança',
      items: ['JWT/OAuth2', 'OneSignal', 'Twilio', 'SignalR', 'APIs Banking', 'Message Queue', 'gRPC', 'WebSockets', 'API Security']
    },
    {
      category: 'Cloud & Infraestrutura',
      items: ['Azure', 'AWS', 'Windows Server', 'IIS', 'Docker', 'Monitoramento Proativo', 'Observabilidade', 'Alerting', 'Load Balancing', 'Scaling']
    }
  ];

  certifications: Certification[] = [
    {
      title: 'Fundamentos de Microsserviços',
      issuer: 'MongoDB'
    },
    {
      title: 'Atlas Vector Search',
      issuer: 'MongoDB'
    },
    {
      title: 'Dominando o Apache Kafka',
      issuer: 'MongoDB'
    },
    {
      title: 'Using Atlas Vector Search for RAG Applications',
      issuer: 'MongoDB'
    },
    {
      title: 'Managing Atlas Vector Search Indexes',
      issuer: 'MongoDB'
    }
  ];

  profile = {
    name: 'Jean Carlos Lefchak',
    title: 'Analista de Sistemas - .NET | ANGULAR',
    location: 'Itapejara d\'Oeste, Paraná, Brasil',
    bio: 'Desenvolvedor fullstack desde 2017, apaixonado por tecnologia e inovação. Especialista em arquitetura de software, microserviços e desenvolvimento fullstack com .NET e Angular.',
    email: 'jeanlefchak2@gmail.com',
    phone: '(46) 98802-7593',
    linkedin: 'https://www.linkedin.com/in/jeeeanlefchak',
    github: '#'
  };

  constructor() { }

  getExperiences(): Experience[] {
    return this.experiences;
  }

  getHighlightedExperience(): Experience | undefined {
    return this.experiences.find(exp => exp.highlighted);
  }

  getSkills(): Skill[] {
    return this.skills;
  }

  getCertifications(): Certification[] {
    return this.certifications;
  }

  getProfile() {
    return this.profile;
  }
}
