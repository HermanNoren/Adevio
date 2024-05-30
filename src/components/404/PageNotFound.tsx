import React from "react";
import "./pageNotFound.css";
import Curve from "../../utils/curve/Curve";

const PageNotFound: React.FC = () => {
  return (
    <Curve>
      <section className="pnf_section section">
        <div className="pnf_container container grid">
          <div className="pnf_header grid">
            <h1 className="pnf_title section_title">404 not found</h1>
          </div>
        </div>
      </section>
    </Curve>
  );
};

export default PageNotFound;
