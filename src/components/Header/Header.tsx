import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        PEDRO<span>.DEV</span>
      </div>

      <nav className="header__navigation">
        <a href="#about">SOBRE</a>
        <a href="#skills">HABILIDADES</a>
        <a href="#experience">EXPERIÊNCIA</a>
        <a href="#projects">PROJETOS</a>
        <a href="#contact">CONTATO</a>
      </nav>

      <div className="header__status">
        <span className="header__status-dot" />
        ONLINE
      </div>
    </header>
  );
}

export default Header;