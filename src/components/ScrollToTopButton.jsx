function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // smooth scrolling
    });
  };

  return (
    <button className="scrollToTop" onClick={scrollToTop}>
      ↑
    </button>
  );
}

export default ScrollToTopButton;
