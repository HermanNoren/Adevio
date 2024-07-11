import "./aboutMe.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutMe({
  name,
  role,
  description,
  imgPath,
  dOrder,
  imgOrder,
}: {
  name: string;
  role: string;
  description: string;
  imgPath: string;
  dOrder: string;
  imgOrder: string;
}) {
  const container = useRef(null);

  const { scrollYProgress: scrollYProgressButton } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgressButton, [0, 1], [0, 150]);
  return (
    <section ref={container} className="about_me_section section z1">
      <div className="about_me_container container grid">
        <div className="about_me_content content grid">
          <motion.div
            style={{ y }}
            className={`about_me_desc_container ${dOrder}`}
          >
            <h2 className="about_me_name">{name}</h2>
            <p className="about_me_role">{role}</p>
            <p className="about_me_desc">{description}</p>
          </motion.div>
          <img src={imgPath} alt="" className={`about_me_img ${imgOrder}`} />
        </div>
      </div>
    </section>
  );
}
