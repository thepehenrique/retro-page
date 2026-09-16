import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__heading">
        <span>&gt; ./contato --conectar</span>

        <h2>
          Contato<span>.</span>
        </h2>

        <p>
          Entre em contato através dos meus canais
          profissionais.
        </p>
      </div>

      <div className="contact__terminal">
        <div className="contact__titlebar">
          <span>CONTATO.EXE</span>

          <div className="contact__controls">
            <span>−</span>
            <span>□</span>
            <span>×</span>
          </div>
        </div>

        <div className="contact__body">
          <div className="contact__information">
            <div className="contact__prompt">
              <span>&gt;</span> conexão disponível...
            </div>

            <h3>
              Vamos conversar.
            </h3>

            <p>
              Estou aberto a oportunidades, projetos e
              conversas relacionadas a desenvolvimento
              backend e tecnologia.
            </p>

            <div className="contact__links">
              <a
                href="https://github.com/thepehenrique"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact__link-label">
                  GITHUB
                </span>

                <span className="contact__link-value">
                  github.com/thepehenrique
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/the-pe-henrique/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact__link-label">
                  LINKEDIN
                </span>

                <span className="contact__link-value">
                  linkedin.com/in/the-pe-henrique
                </span>
              </a>
            </div>
          </div>

          <div className="contact__availability">
            <span className="contact__availability-label">
              STATUS
            </span>

            <strong>
              DISPONÍVEL PARA CONTATO
            </strong>

            <div className="contact__availability-line">
              <span />
            </div>

            <p>
              Para oportunidades profissionais,
              projetos ou colaboração, entre em contato
              através dos canais disponíveis.
            </p>
          </div>
        </div>

        <div className="contact__status">
          <span>STATUS_DA_CONEXÃO:</span>

          <strong>
            PRONTO_PARA_RECEBER
          </strong>
        </div>
      </div>

      <div className="contact__footer">
        <span>$ sair do_terminal</span>

        <span>FIM_DA_TRANSMISSÃO</span>
      </div>
    </section>
  );
}

export default Contact;