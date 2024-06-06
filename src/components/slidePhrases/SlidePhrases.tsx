import { m, useScroll, useTransform } from "framer-motion";
import "./sliderPhrases.css";
import { useRef } from "react";

export default function SlidePhrases({
  phrase1,
  phrase2,
  phrase3,
  clr1,
  clr2,
  clr3,
}: {
  phrase1: string;
  phrase2: string;
  phrase3: string;
  clr1: string;
  clr2: string;
  clr3: string;
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  return (
    <section className="slider_phrases_section z1">
      <div className="slidep_container">
        <div className="slidep_content">
          <div ref={container} className="">
            <Slider
              src={phrase1}
              left={"-15%"}
              progress={scrollYProgress}
              direction={"left"}
              clr={clr1}
            />
            <Slider
              src={phrase2}
              left={"-5%"}
              progress={scrollYProgress}
              direction={"right"}
              clr={clr2}
            />
            <Slider
              src={phrase3}
              left={"-10%"}
              progress={scrollYProgress}
              direction={"left"}
              clr={clr3}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const Slider = ({
  src,
  left,
  progress,
  direction,
  clr,
}: {
  src: string;
  left: string;
  progress: any;
  direction: string;
  clr: string;
}) => {
  const dir = direction == "left" ? -1 : 1;
  const x = useTransform(progress, [0, 1], [-250 * dir, 250 * dir]);
  return (
    <m.div className="slidep_slider" style={{ left, x }}>
      <div className="slidep_phrase_container">
        <p className={`slidep_phrase slidep_${clr}`}>{src}</p>
      </div>
      <div className="slidep_phrase_container">
        <p className={`slidep_phrase slidep_${clr}`}>{src}</p>
      </div>
      <div className="slidep_phrase_container">
        <p className={`slidep_phrase slidep_${clr}`}>{src}</p>
      </div>
    </m.div>
  );
};
