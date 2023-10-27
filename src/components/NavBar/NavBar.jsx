import { useState } from "react";
import "./NavBar.css";
import { Link } from 'react-router-dom';
import icon from "../../../public/Logo/4.png"

function NavBar() {
  const [isActive, setIsActive] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleHamburgerClick = () => {
    setIsActive(!isActive);
    setAnimate(!animate);
  };

  const handleLinkClick = () => {
    setIsActive(false);
    setAnimate(!animate);
  };

  return (
    <>
      <header className="header">
        <nav className="nav">
            <img className="nav-h2" src={icon} alt="" />
          {/* <h2 className="nav-h2">TOMI</h2> */}
          <ul className="nav-ul">
            <li>
              <Link to={"/"}
                className="nav-items"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              ><span>HOME</span></Link>
            </li>
            <li>
              <Link to={"/about"}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              ><span>FOOD</span></Link>
            </li>
            <li>
              <Link to="drinks"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >DRINKS</Link>
            </li>
            <li>
              <Link to="us"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >US</Link>
            </li>
          </ul>
          <div className="hamburger" onClick={handleHamburgerClick}>
            <div className={`bar1 ${animate ? "firstAnimateBar1" : ""}`}></div>
            <div className={`bar2 ${animate ? "firstAnimateBar2" : ""}`}></div>
            <div className={`bar3 ${animate ? "firstAnimateBar3" : ""}`}></div>
          </div>
        </nav>
      </header>
      <nav className={`mobile-nav ${isActive ? "active" : ""}`}>
        <Link to={"/"} onClick={handleLinkClick}>
          HOME
        </Link>
        <Link to={"/about"} onClick={handleLinkClick}>
          FOOD
        </Link>
        <a href="#projects" onClick={handleLinkClick}>
          DRINKS
        </a>
        <a href="#contact" onClick={handleLinkClick}>
          US
        </a>
      </nav>
    </>
  );
}

export default NavBar