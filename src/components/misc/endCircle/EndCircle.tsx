import { motion, useScroll, useTransform } from "framer-motion";
import "./endCircle.css";
import { useRef } from "react";

function EndCircle() {
  const ref = useRef(null);
  // Circle
  const { scrollYProgress: h } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const height = useTransform(h, [0, 1], [30, 0]);

  return (
    <>
      <div ref={ref} className=""></div>
      <motion.div style={{ height }} className="end_circle_container">
        <div className="end_circle"></div>
      </motion.div>
    </>
  );
}

export default EndCircle;
