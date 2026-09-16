import './Projects.css';

interface Project {
  number: string;
  type: string;
  title: string;
  description: string;
  technologies: string[];
  status: string;
  link?: string;
}

const projects: Project[] = [
  {
    number: '01',
    type: 'SISTEMA WEB',
    title: 'GAC FAETERJ',
    description:
      'Sistema web desenvolvido para gerenciamento de atividades complementares da FAETERJ Paracambi, permitindo o envio, acompanhamento e análise das atividades realizadas pelos alunos. Projeto de uso exclusivo da instituição.',
    technologies: [
      'Angular',
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'TypeORM',
      'Supabase',
    ],
    status: 'DESENVOLVIDO',
    link: 'https://gac-web-main.vercel.app/login',
  },
  {
    number: '02',
    type: 'API BACKEND',
    title: 'PH-NEST-API',
    description:
      'Projeto de estudo e desenvolvimento backend explorando recursos do ecossistema NestJS, autenticação, autorização, banco de dados e infraestrutura.',
    technologies: [
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'TypeORM',
      'Docker',
      'JWT',
    ],
    status: 'EM DESENVOLVIMENTO',
  },
  {
    number: '03',
    type: 'DESKTOP / TEMPO REAL',
    title: 'DeskChat',
    description:
      'Aplicação desktop de comunicação em tempo real desenvolvida com Electron, utilizando o PH-Nest-API como backend. A primeira versão prevê funcionalidades como cadastro, login, recuperação de senha, verificação de e-mail, envio de mensagens de texto, chamadas e indicação do status online ou offline dos usuários.',
    technologies: [
      'Electron',
      'NestJS',
      'Socket.IO',
      'TypeScript',
      'JWT',
      'WebRTC',
    ],
    status: 'EM DESENVOLVIMENTO',
  },
  {
    number: '04',
    type: 'JOGO / PESSOAL',
    title: 'RPG.IO',
    description:
      'Protótipo de RPG 2D top-down com temática dark fantasy, desenvolvido para explorar criação de jogos, mapas, combate e sistemas de progressão.',
    technologies: [
      'TypeScript',
      'Phaser',
      'Vite',
      'Tiled',
      'React',
    ],
    status: 'EM DESENVOLVIMENTO',
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__heading">
        <div>
          <span className="projects__command">
            &gt; ./projetos --destaques
          </span>

          <h2>
            Projetos<span>.</span>
          </h2>
        </div>

        <p>
          Projetos, experimentos e sistemas desenvolvidos
          em diferentes áreas do desenvolvimento de software.
        </p>
      </div>

      <div className="projects__grid">
        {projects.map((project) => (
          <article
            key={project.number}
            className="project-card"
          >
            <div className="project-card__header">
              <span>{project.number}</span>

              <span>{project.type}</span>
            </div>

            <div className="project-card__body">
              <div className="project-card__title">
                <span>&gt;</span>

                <h3>{project.title}</h3>
              </div>

              <p className="project-card__description">
                {project.description}
              </p>

              <div className="project-card__technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-card__footer">
              <span>STATUS</span>

              <strong>{project.status}</strong>
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-card__link"
              >
                &gt; ACESSAR SISTEMA
              </a>
            )}
          </article>
        ))}
      </div>

      <div className="projects__footer">
        <span className="projects__prompt">
          $ ls ./projetos
        </span>

        <span>
          {projects.length} PROJETOS_ENCONTRADOS
        </span>
      </div>
    </section>
  );
}

export default Projects;