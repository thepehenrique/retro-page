import './BackToTop.css';

function BackToTop() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className="back-to-top"
      onClick={handleBackToTop}
      aria-label="Voltar ao início"
      title="Voltar ao início"
    >
      ↑
    </button>
  );
}

export default BackToTop;