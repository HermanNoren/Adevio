import { useState, useEffect } from "react";
import { m } from "framer-motion";
import "./curve.css";

const anim = (variants: any) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};

export default function Curve({ children }: { children: any }) {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const resize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const text = {
    initial: {
      opacity: 1,
    },
    enter: {
      opacity: 0,
      top: -100,
      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
      transitionEnd: {
        top: "55%",
      },
    },
    exit: {
      opacity: 1,
      top: "50%",
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: [0.33, 0, 0.68, 1],
      },
    },
  };

  return (
    <div className="curve">
      <m.p {...anim(text)} className="curve_route">
        Adevio
      </m.p>
      <div
        style={{
          opacity: dimensions.width > 0 ? 0 : 1,
        }}
        className="curve_background"
      ></div>
      {dimensions.width > 0 && <SVG {...dimensions} />}
      {children}
    </div>
  );
}

function SVG({ width, height }: { width: number; height: number }) {
  const initialPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 300
    `;

  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 300
`;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      d: initialPath,
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const slide = {
    initial: {
      top: "-300px",
    },
    enter: {
      top: "-100vh",
      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
      transitionEnd: {
        top: "100vh",
      },
    },
    exit: {
      top: "-300px",
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <m.svg {...anim(slide)}>
      <m.path {...anim(curve)}></m.path>
    </m.svg>
  );
}
