import { useState } from "react";
import style from "./ScrollTopStyle.module.scss";

//Responsible to scroll up
const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className={style["scrollToTop"]}>
      <a onClick={scrollToTop} style={{ display: visible ? "inline" : "none" }}>
        <i className="fas fa-arrow-alt-circle-up fa-3x"></i>
      </a>
    </div>
  );
};

export default ScrollTop;
