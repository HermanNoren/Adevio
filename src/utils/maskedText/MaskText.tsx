import "./maskText.css";
import { m, useInView } from "framer-motion";
import { useRef } from "react";

export default function MaskText({ phrases }: { phrases: any }) {
  const container = useRef(null);

  const isInView = useInView(container, { once: false });

  const animation = {
    initial: { y: "100%" },
    enter: (i: any) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };
  return (
    <div ref={container} className="mask_text_container">
      {phrases.map((phrase: any, index: number) => {
        return (
          <div key={index} className="mask_text">
            <m.p
              custom={index}
              variants={animation}
              initial="initial"
              animate={isInView ? "enter" : "initial"}
            >
              {phrase}
            </m.p>
          </div>
        );
      })}
    </div>
  );
}
