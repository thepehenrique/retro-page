import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about__window">
        <div className="about__titlebar">
          <span>SOBRE_MIM.TXT</span>

          <div className="about__controls">
            <span>−</span>
            <span>□</span>
            <span>×</span>
          </div>
        </div>

        <div className="about__content">
          <div className="about__terminal">
            <p>
              <span>&gt;</span> cat sobre_mim.txt
            </p>
          </div>

          <div className="about__body">
            <div className="about__intro">
              <span className="about__label">
                DESENVOLVEDOR BACKEND
              </span>

              <h2>
                Construindo os sistemas
                <br />
                por trás da interface.
              </h2>

              <p>
                Desenvolvedor com foco em backend, interessado
                em construir APIs, sistemas e soluções baseadas
                em regras de negócio.
              </p>

              <p>
                Minha atuação está voltada ao desenvolvimento
                de aplicações server-side, integração entre
                serviços, persistência de dados e organização
                da lógica de negócio.
              </p>
            </div>

            <div className="about__details">
              <div className="about__block">
                <span className="about__block-title">
                  FOCO_PRINCIPAL
                </span>

                <ul>
                  <li>Desenvolvimento Backend</li>
                  <li>REST APIs</li>
                  <li>Regras de Negócio</li>
                  <li>Integração de Dados</li>
                </ul>
              </div>

              <div className="about__block">
                <span className="about__block-title">
                  TECNOLOGIAS_PRINCIPAIS
                </span>

                <ul>
                  <li>Node.js / NestJS</li>
                  <li>TypeScript</li>
                  <li>PostgreSQL / Oracle</li>
                  <li>Docker</li>
                </ul>
              </div>

              <div className="about__block">
                <span className="about__block-title">
                  CONHECIMENTOS_COMPLEMENTARES
                </span>

                <ul>
                  <li>Angular</li>
                  <li>React</li>
                  <li>Integração Frontend</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="about__prompt">
            <span>$</span> _
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;