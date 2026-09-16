import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__header">
        <div>
          <span className="skills__command">
            &gt; ./habilidades --listar
          </span>

          <h2>
            Habilidades
            <br />
            <span>Técnicas.</span>
          </h2>
        </div>

        <p>
          Tecnologias e ferramentas que utilizo para
          desenvolver sistemas e aplicações backend.
        </p>
      </div>

      <div className="skills__grid">
        <article className="skill-card skill-card--primary">
          <div className="skill-card__header">
            <span>01</span>
            <span>NÚCLEO</span>
          </div>

          <h3>BACKEND</h3>

          <p>
            Minha principal área de atuação, com foco no
            desenvolvimento de APIs, serviços e regras
            de negócio.
          </p>

          <div className="skill-card__tags">
            <span>Node.js</span>
            <span>NestJS</span>
            <span>TypeScript</span>
            <span>REST APIs</span>
            <span>JWT</span>
            <span>WebSocket</span>
            <span>Socket.IO</span>
            <span>WebRTC</span>
            <span>OAuth 2.0</span>
            <span>Swagger / OpenAPI</span>
          </div>
        </article>

        <article className="skill-card">
          <div className="skill-card__header">
            <span>02</span>
            <span>DADOS</span>
          </div>

          <h3>BANCOS DE DADOS</h3>

          <p>
            Experiência com bancos relacionais, consultas,
            persistência e integração de dados.
          </p>

          <div className="skill-card__tags">
            <span>PostgreSQL</span>
            <span>Oracle</span>
            <span>MySQL</span>
            <span>TypeORM</span>
            <span>SQLite</span>
            <span>Supabase</span>
            <span>Supabase Storage</span>
          </div>
        </article>

        <article className="skill-card">
          <div className="skill-card__header">
            <span>03</span>
            <span>FERRAMENTAS</span>
          </div>

          <h3>DEVOPS</h3>

          <p>
            Ferramentas e práticas utilizadas para
            desenvolver, executar e manter aplicações.
          </p>

          <div className="skill-card__tags">
            <span>Docker</span>
            <span>Git</span>
            <span>npm</span>
            <span>Jest</span>
            <span>Redis</span>
            <span>Vercel</span>
            <span>Render</span>
            <span>BullMQ</span>
            <span>Cron Jobs</span>
          </div>
        </article>

        <article className="skill-card skill-card--secondary">
          <div className="skill-card__header">
            <span>04</span>
            <span>COMPLEMENTAR</span>
          </div>

          <h3>FRONTEND</h3>

          <p>
            Conhecimentos em frontend que complementam
            minha atuação backend e permitem compreender
            aplicações de ponta a ponta.
          </p>

          <div className="skill-card__tags">
            <span>Angular</span>
            <span>Angular Material</span>
            <span>React</span>
            <span>Vite</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
        </article>

        <article className="skill-card">
          <div className="skill-card__header">
            <span>05</span>
            <span>TECNOLOGIA</span>
          </div>

          <h3>INTELIGÊNCIA ARTIFICIAL</h3>

          <p>
            Conhecimentos em ferramentas e recursos de IA
            aplicados ao desenvolvimento de software e à
            exploração de novas soluções.
          </p>

          <div className="skill-card__tags">
            <span>IA Generativa</span>
            <span>LLMs</span>
            <span>Prompt Engineering</span>
            <span>APIs de IA</span>
          </div>
        </article>
      </div>

      <div className="skills__footer">
        <span className="skills__prompt">
          $ echo $ESPECIALIZACAO
        </span>

        <span className="skills__specialization">
          BACKEND / IA
        </span>
      </div>
    </section>
  );
}

export default Skills;