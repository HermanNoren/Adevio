import Curve from "../../utils/curve/Curve";
import CTA from "../cta/CTA";
import GlobeSection from "./globeSection/GlobeSection";
import Hero from "./hero/Hero";
import Sec1 from "./section1/Sec1";
import Services from "./services_home/Services";
import EndCircle from "../misc/endCircle/EndCircle";
import SlidePhrases from "../slidePhrases/SlidePhrases";
import StartCircle from "../misc/startCircle/StartCircle";

function Home() {
  return (
    <Curve>
      <Hero />
      <StartCircle />
      <Sec1 />
      <GlobeSection />
      <Services />
      <SlidePhrases
        phrase1={"Digital Marknadsföring -"}
        phrase2={"Webbutveckling -"}
        phrase3={"Adevio hjälper dig -"}
        clr1="green"
        clr2="pink"
        clr3="purple"
      />
      <EndCircle />
      <CTA />
    </Curve>
  );
}

export default Home;
