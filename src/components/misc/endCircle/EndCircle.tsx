import { m, useScroll, useTransform } from "framer-motion";
import "./endCircle.css";
import { useEffect, useRef } from "react";

function EndCircle() {
  const ref = useRef(null);
  // Circle
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 1], [20, 0]);

  return (
    <div>
      <div ref={ref} className=""></div>
      <m.div style={{ height }} className="end_circle_container">
        <div className="end_circle"></div>
      </m.div>
    </div>
  );
}

export default EndCircle;
