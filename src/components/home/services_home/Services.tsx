import { useRef, useState } from "react";
import "./services.css";
import Service from "./service/Service";
import Modal from "./modal/Modal";
import SEM from "/home/services/SEM.svg";
import SEO from "/home/services/SEO.svg";
import WEB from "/home/services/WEB.svg";

function Services() {
  const ref = useRef(null);

  const green = "#3ab24c";
  const cyan = "#32b4ae";
  const pink = "#f778ba";

  const services = [
    {
      title: "Search Engine Marketing",
      abbr: "SEM",
      color: green,
      colorClass: "green",
      img: SEM,
    },
    {
      title: "Search Engine Optimization",
      abbr: "SEO",
      color: cyan,
      colorClass: "cyan",
      img: SEO,
    },
    {
      title: "Webbutveckling",
      abbr: "WEB",
      color: pink,
      colorClass: "pink",
      img: WEB,
    },
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <section ref={ref} className="services_section">
      <div className="services_container container grid">
        <div className="services_content grid">
          {services.map((service, index) => {
            return (
              <Service
                key={index}
                index={index}
                title={service.title}
                abbr={service.abbr}
                colorClass={service.colorClass}
                setModal={setModal}
              />
            );
          })}
        </div>
        <Modal modal={modal} services={services} />
      </div>
    </section>
  );
}

export default Services;
