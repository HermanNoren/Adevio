import { m, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import "./hero.css";

function Hero() {
  // Parallax Scrolling
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const heroPosY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  //

  // Text Animation
  const slider = useRef(null);
  const sliderTextRef1 = useRef(null);
  const sliderTextRef2 = useRef(null);

  let xPercentRight = -100;
  let xPercentLeft = 0;
  let speed = 0.05;
  let direction = 1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(textAnimation);

    let g = gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: true,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-=300px",
    });

    return () => {
      g.kill();
    };
  }, []);

  const textAnimation = () => {
    if (xPercentRight >= 0) {
      xPercentRight = -100;
    }
    if (xPercentRight < -100) {
      xPercentRight = 0;
    }
    if (xPercentLeft <= -100) {
      xPercentLeft = 0;
    }
    if (xPercentLeft > 0) {
      xPercentLeft = -100;
    }
    gsap.set(sliderTextRef1.current, { xPercent: xPercentRight });
    gsap.set(sliderTextRef2.current, { xPercent: xPercentRight });
    xPercentRight += speed * direction;
    requestAnimationFrame(textAnimation);
  };
  //

  const sliderText = " ADEVIO - ADEVIO - ADEVIO - ADEVIO -";
  return (
    <m.section
      ref={ref}
      style={{ y: heroPosY }}
      className="hero_section section"
    >
      <div className="hero_container container grid">
        <div className="hero_header grid">
          <div className="slider_container">
            <div ref={slider} className="hero_header_slider">
              <span ref={sliderTextRef1} className="slider_text filled_text">
                {sliderText}
              </span>
              <span ref={sliderTextRef2} className="slider_text filled_text">
                {sliderText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </m.section>
  );
}

export default Hero;
