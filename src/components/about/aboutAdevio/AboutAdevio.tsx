import "./aboutAdevio.css";
import { m, useScroll, useTransform } from "framer-motion";
import Magnetic from "../../../utils/Magnetic";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function AboutAdevio() {
  const container = useRef(null);

  const { scrollYProgress: scrollYProgressButton } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgressButton, [0, 1], [30, -150]);
  return (
    <section ref={container} className="adevio_section section z1">
      <div className="adevio_container container grid">
        <div className="adevio_content content grid">
          <h1 className="adevio_title">
            Vi på Adevio har som mål att hjälpa företag nå ut i den digitala
            världen och få fler kunder.
          </h1>
          <p className="">
            Vi gör detta genom att driva trafik till våra klienters hemsidor med
            hjälp av digital marknadsföring. Saknar du hemsida? Vi fixar det
            också!
          </p>
        </div>
        <div className="adevio_button_container content">
          <div className=""></div>
          <div className=""></div>
          <m.div style={{ y }} className="">
            <Magnetic>
              <Link to="kontakt" className="adevio_button button_round">
                Kontakta Oss
              </Link>
            </Magnetic>
          </m.div>
        </div>
      </div>
    </section>
  );
}
