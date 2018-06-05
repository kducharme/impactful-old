import React from "react";
import { Link } from "react-router-dom";

class PrimaryNavigation extends React.Component {
  render() {
    return (
      <nav>
          <span className="nav__left">
            <img src={'img/impactful.svg'}></img>
            <Link
            className={`nav__link ${window.location.pathname === "/" ? "active" : null }`} to="/">Dashboard
            </Link>
            <Link
            className={`nav__link ${window.location.pathname === "/programs" ? "active" : null }`} to="/programs">Programs
            </Link>
            <Link
            className={`nav__link ${window.location.pathname === "/settings" ? "active" : null }`} to="/settings">Settings
            </Link>
          </span>
          <span className="nav__right">
            <input className="nav__right--search" placeholder='Search people or projects…' />
            <span className='nav__right--user'><p>Kyle Ducharme</p><img src={'img/chevronLight.svg'}></img></span>
          </span>

      </nav>
    );
  }
}

export default PrimaryNavigation;
