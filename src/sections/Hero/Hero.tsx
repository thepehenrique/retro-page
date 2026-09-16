import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__terminal">
          <p>
            <span>&gt;</span> iniciando portfólio...
          </p>

          <p>
            <span>&gt;</span> carregando perfil_desenvolvedor...
          </p>

          <p>
            <span>&gt;</span> sistema pronto
            <span className="cursor">_</span>
          </p>
        </div>

        <div className="hero__main">
          <p className="hero__eyebrow">
            DESENVOLVEDOR BACKEND
          </p>

          <h1>
            PEDRO<span>.</span>
          </h1>

          <p className="hero__description">
            Desenvolvedor backend focado na construção de
            APIs, sistemas e soluções baseadas em regras
            de negócio.
          </p>

          <div className="hero__specialties">
            <span>BACKEND</span>
            <span>APIs</span>
            <span>BANCOS DE DADOS</span>
            <span>ARQUITETURA</span>
          </div>

          <div className="hero__technologies">
            <span>NestJS</span>
            <span>Node.js</span>
            <span>TypeScript</span>
            <span>PostgreSQL</span>
            <span>Oracle</span>
            <span>Docker</span>
          </div>

          <p className="hero__secondary">
            Também possuo conhecimentos em desenvolvimento
            frontend utilizando Angular e React.
          </p>

          <div className="hero__actions">
            <a href="#projects">
              PROJETOS
            </a>

            <a href="#contact">
              CONTATO
            </a>
          </div>
        </div>
      </div>

      <aside className="system-panel">
        <div className="system-panel__header">
          <span>STATUS_DO_SISTEMA.EXE</span>

          <span className="system-panel__indicator">
            ●
          </span>
        </div>

        <div className="system-panel__body">
          <div className="stat">
            <div className="stat__label">
              <span>BACKEND</span>
              <span>PRINCIPAL</span>
            </div>

            <div className="stat__bar">
              <span style={{ width: '92%' }} />
            </div>
          </div>

          <div className="stat">
            <div className="stat__label">
              <span>BANCOS DE DADOS</span>
              <span>ATIVO</span>
            </div>

            <div className="stat__bar">
              <span style={{ width: '85%' }} />
            </div>
          </div>

          <div className="stat">
            <div className="stat__label">
              <span>FRONTEND</span>
              <span>COMPLEMENTAR</span>
            </div>

            <div className="stat__bar">
              <span style={{ width: '65%' }} />
            </div>
          </div>

          <div className="system-panel__divider" />

          <div className="system-panel__info">
            <span>ATUAÇÃO</span>
            <span>BACKEND</span>
          </div>

          <div className="system-panel__info">
            <span>STACK</span>
            <span>NESTJS / NODE</span>
          </div>

          <div className="system-panel__info">
            <span>STATUS</span>
            <span className="online">ONLINE</span>
          </div>
        </div>
      </aside>
    </section>
  );
}

export default Hero;