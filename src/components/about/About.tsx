import Curve from "../../utils/curve/Curve";
import CTA from "../cta/CTA";
import AboutAdevio from "./aboutAdevio/AboutAdevio";
import AboutHero from "./aboutHero/AboutHero";
import AboutMe from "./aboutJ/AboutMe";
import SlidePhrases from "../slidePhrases/SlidePhrases";
import EndCircle from "../misc/endCircle/EndCircle";

function Home() {
  const order = {
    dFirst: "dFirst",
    dSecond: "dSecond",
    imgFirst: "imgFirst",
    imgSecond: "imgSecond",
  };

  const jonathan =
    "Lorem Ipsum bla bla tillfällig text för att ta plats. Jag heter Jonathan och har ett band i garaget.";

  const herman =
    "Lorem Ipsum bla bla tillfällig text för att ta plats. Jag heter Jonathan och har ett band i garaget.";

  const louise =
    "Lorem Ipsum bla bla tillfällig text för att ta plats. Jag heter Jonathan och har ett band i garaget.";

  return (
    <Curve>
      <AboutHero />
      <AboutAdevio />
      <AboutMe
        name={"Jonathan Sjöberg"}
        role={"VD"}
        description={jonathan}
        imgPath=""
        dOrder={order.dFirst}
        imgOrder={order.imgSecond}
      />
      <AboutMe
        name={"Herman Norén"}
        role={"IT-ansvarig"}
        description={herman}
        imgPath=""
        dOrder={order.dSecond}
        imgOrder={order.imgFirst}
      />
      <AboutMe
        name={"Louise Viberg"}
        role={"VD"}
        description={louise}
        imgPath=""
        dOrder={order.dFirst}
        imgOrder={order.imgSecond}
      />
      <SlidePhrases
        phrase1={"Digital Marknadsföring -"}
        phrase2={"Webbutveckling -"}
        phrase3={"Adevio hjälper dig -"}
      />
      <EndCircle />
      <CTA />
    </Curve>
  );
}

export default Home;
