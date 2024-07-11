import { useScroll, m, useTransform } from "framer-motion";
import "./sec1.css";
import { useRef } from "react";
import WobblyLine from "../../misc/WobblyLine";
import Magnetic from "../../../utils/Magnetic";
import { Link } from "react-router-dom";
import MaskText from "../../../utils/maskedText/MaskText";

function Sec1() {
  const container = useRef(null);

  const { scrollYProgress: scrollYProgressButton } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgressButton, [0, 1], [-20, -250]);

  const phrases = [
    "Världen utvecklas, förändras i varje minut",
    "framsteg som aldrig förr, i evig flut.",
    "I detta nya skede, där allt går online in,",
    "att synas online är viktigare än någonsin.",
  ];
  return (
    <section className="sec1_section section">
      <div className="sec1_container container">
        <h1 className="section_subtitle sec1_subtitle">- Adevio -</h1>
        <h1 className="section_title sec1_title">Att Synas Online</h1>
        <div ref={container} className="sec1_content content grid">
          <div className="sec1_p_div">
            <MaskText phrases={phrases}></MaskText>
          </div>

          <p className="p2">
            Vi på Adevio hjälper dig och ditt företag att synas online, oavsett
            om du behöver hjälp med annonser eller med skapandet av en hemsida!
          </p>
        </div>
        <div className="button_container content">
          <div className=""></div>
          <div className=""></div>
          <m.div style={{ y }} className="">
            <Magnetic>
              <Link to="kontakt" className="sec1_button button_round">
                Kontakta Oss
              </Link>
            </Magnetic>
          </m.div>
        </div>
        <WobblyLine />
      </div>
    </section>
  );
}

export default Sec1;
