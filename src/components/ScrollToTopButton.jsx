import { useEffect, useState } from "react";
import '../css/scroll.css'
import { FaArrowUp } from "react-icons/fa";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button className="scroll-top-btn" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    )
  );
}

export default ScrollToTopButton;