import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./cta.css";
import Globe1 from "../../utils/globe/Globe1";
import WobblyLine from "../misc/WobblyLine";
import Magnetic from "../../utils/Magnetic";
import { Link } from "react-router-dom";

function CTA() {
  // Parallax Scrolling
  const section = useRef(null);
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start end", "start start"],
  });
  const ctaPosY = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <m.section
      ref={section}
      style={{ y: ctaPosY }}
      className="cta_section section"
    >
      <div className="cta_globe_container container grid">
        <div className=""></div>
        <div className="cta_globe">
          <Globe1 />
        </div>
      </div>
      <div className="cta_container container grid">
        <div className="cta_content">
          <div className="cta_titles content">
            <h2 className="cta_subtitle">Intresserad?</h2>
            <h1 className="cta_title">Låt oss hjälpa dig!</h1>
          </div>
          <div className="cta_line">
            <WobblyLine />
          </div>
          <div className="cc">
            <div className="cta_button_container content">
              <Magnetic>
                <Link to="kontakt" className="cta_button button">
                  Kontakta Oss
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </m.section>
  );
}

export default CTA;
