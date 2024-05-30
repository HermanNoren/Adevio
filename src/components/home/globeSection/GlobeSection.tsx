import Globe1 from "../../../utils/globe/Globe1";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./globeSection.css";
import Logo from "/nylogga.svg";

const GlobeSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "180deg"]);

  return (
    <section className="gs_section">
      <div className="gs_container container grid">
        <div ref={container} className="gs_content content grid">
          <div className="gs_globe">
            <Globe1 />
          </div>
          <div className=""></div>
          <div className="gs_text_container container grid">
            <div className="gs_text_content grid">
              <motion.img
                src={Logo}
                alt=""
                style={{ rotate }}
                className="gs_logo"
              />
              <h1 className="gs_title title">
                Ta ditt varumärke till den digitala världen
              </h1>
              <p className="gs_p">
                Genom att göra varumärke digitalt kan du enkelt nå fler kunder i
                den räckvidd du bestämmer, oavsett om det är lokalt eller
                globalt. Vi på Adevio hjälper dig att uppnå dina mål.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobeSection;
