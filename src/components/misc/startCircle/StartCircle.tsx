import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./startCircle.css";

function StartCircle() {
  const ref = useRef(null);
  // Circle
  const { scrollYProgress: h } = useScroll({
    target: ref,
    offset: ["start start", "start end"],
  });
  const height = useTransform(h, [0, 1], [50, 0]);

  return (
    <>
      <motion.div style={{ height }} className="start_circle_container">
        <div className="start_circle"></div>
      </motion.div>
      <div ref={ref} className=""></div>
    </>
  );
}

export default StartCircle;
