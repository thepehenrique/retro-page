import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience__heading">
        <span>&gt; ./experiencia --detalhes</span>

        <h2>
          Experiência<span>.</span>
        </h2>
      </div>

      <div className="experience__timeline">
        <article className="experience__item">
          <div className="experience__marker">
            <span />
          </div>

          <div className="experience__date">
            2023 — PRESENTE
          </div>

          <div className="experience__content">
            <div className="experience__top">
              <div>
                <h3>Desenvolvedor Backend Júnior</h3>

                <p className="experience__company">
                  EMPRESA PRIVADA
                </p>

              </div>

              <span className="experience__status">
                ATUAL
              </span>
            </div>

            <p className="experience__description">
              Atuação no desenvolvimento e manutenção de
              aplicações backend, APIs e sistemas orientados
              a regras de negócio, contribuindo na implementação
              de funcionalidades e soluções para sistemas
              corporativos.
            </p>

            <div className="experience__technologies">
              <span>NestJS</span>
              <span>Node.js</span>
              <span>TypeScript</span>
              <span>Oracle</span>
              <span>PostgreSQL</span>
              <span>Jest</span>
              <span>Docker</span>
            </div>
          </div>
        </article>
      </div>

      <div className="experience__footer">
        <span>STATUS_DO_HISTÓRICO:</span>

        <strong>HISTÓRICO_PROFISSIONAL_ATUALIZADO</strong>
      </div>
    </section>
  );
}

export default Experience;