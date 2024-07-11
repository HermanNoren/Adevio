import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import "./modal.css";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

function Modal({ modal, services }: { modal: any; services: any }) {
  const { active, index } = modal;
  const container = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    const moveCursorX = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const moveCursorY = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    const moveCursorLabelX = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    const moveCursorLabelY = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      const { clientX, clientY } = e;
      moveContainerX(clientX);
      moveContainerY(clientY);
      moveCursorX(clientX);
      moveCursorY(clientY);
      moveCursorLabelX(clientX);
      moveCursorLabelY(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup function
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={container}
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "open" : "closed"}
        className="modal_container"
      >
        <div style={{ top: index * -100 + "%" }} className="modal_slider">
          {services.map((course: any, index: number) => {
            const { color, img } = course;
            return (
              <div
                key={`modal_${index}`}
                style={{ backgroundColor: color }}
                className="modal"
              >
                <div className="modal_description_wrapper">
                  <div className="bg"></div>
                  <img src={img} className="modal_img" />
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "open" : "closed"}
        ref={cursor}
        className="cursor"
      ></motion.div>
      <motion.div
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "open" : "closed"}
        ref={cursorLabel}
        className="cursor_label"
      >
        Mer
      </motion.div>
    </>
  );
}

export default Modal;
