import React from "react";
import "./aboutHero.css";
import WobblyLine from "../../misc/WobblyLine";

const AboutHero: React.FC = () => {
  return (
    <section className="about_hero_section section z1">
      <div className="about_hero_container container grid">
        <div className="about_hero_content content">
          <h1 className="about_title section_title">
            Vi hjälper företag gå digitalt
          </h1>
        </div>
        <WobblyLine />
      </div>
    </section>
  );
};

export default AboutHero;
