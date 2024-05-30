import { useRef, useEffect } from "react";
import "./wobblyLine.css";

export default function WobblyLine() {
  const path = useRef<SVGPathElement>(null);
  const boxRef = useRef<HTMLDivElement>(null); // Ref for the box
  let progress: number = 0;
  let time = Math.PI / 2;
  let reqID: number | null = null;
  let x = 0.5;

  useEffect(() => {
    setPath(progress);
    // Initialize Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            manageMouseEnter(); // Call your function here
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    // Observe the box element
    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    // Clean up
    return () => {
      observer.disconnect();
    };
  }, []);

  const setPath = (progress: number) => {
    const { innerWidth } = window;
    const width = innerWidth * 0.9;
    if (path.current) {
      path.current.setAttributeNS(
        "",
        "d",
        `M0 50 Q${width * x} ${50 + progress}, ${width} 50`
      );
    }
  };

  const manageMouseEnter = () => {
    if (reqID) {
      window.cancelAnimationFrame(reqID);
      resetAnimation();
    }
  };

  const manageMouseMove = (e: { movementY: any; clientX: any }) => {
    const { movementY, clientX } = e;
    if (path.current) {
      const { left, width } = path.current.getBoundingClientRect();
      x = (clientX - left) / width;
    }
    progress += movementY;
    setPath(progress);
  };

  const manageMouseLeave = () => {
    animateOut();
  };

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    time += 0.2;
    setPath(newProgress);
    progress = lerp(progress, 0, 0.025);

    if (Math.abs(progress) > 0.75) {
      reqID = window.requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };

  return (
    <div className="line">
      <div
        ref={boxRef}
        onMouseEnter={manageMouseEnter}
        onMouseMove={manageMouseMove}
        onMouseLeave={manageMouseLeave}
        className="box"
      ></div>
      <svg>
        <path ref={path}></path>
      </svg>
    </div>
  );
}
