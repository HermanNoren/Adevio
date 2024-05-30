import Magnetic from "../../utils/Magnetic";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  /* =============== Scroll Events Header =============== */
  /*
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (header) {
      if (this.scrollY >= 10) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");
    }
  });
  */

  return (
    <header className="header">
      <nav className="nav container">
        <Magnetic>
          <Link to="/" className="escape_hatch">
            Adevio
          </Link>
        </Magnetic>

        <div className="nav_menu">
          <ul className="nav_list">
            <Magnetic>
              <li className="nav_link">
                <Link to="/om-oss" className="nav_item">
                  Om Oss
                </Link>
              </li>
            </Magnetic>
            <Magnetic>
              <li className="nav_link">
                <Link to="/tjanster" className="nav_item">
                  Tjänster
                </Link>
              </li>
            </Magnetic>
            <Magnetic>
              <Link to="kontakt" className="nav_button button">
                Kontakt
              </Link>
            </Magnetic>
          </ul>
        </div>
      </nav>
      <div className={"header_line"}></div>
    </header>
  );
}

export default Header;
