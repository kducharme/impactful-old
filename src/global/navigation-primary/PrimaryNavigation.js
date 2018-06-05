import React from "react";
import { Link } from "react-router-dom";

class PrimaryNavigation extends React.Component {
  render() {
    return (
      <nav>
        <Link
          className={`nav__link ${window.location.pathname === "/" ? "active" : null }`} to="/">Dashboard
        </Link>
        <Link
          className={`nav__link ${window.location.pathname === "/programs" ? "active" : null }`} to="/programs">Programs
        </Link>
        <Link
          className={`nav__link ${window.location.pathname === "/settings" ? "active" : null }`} to="/settings">Settings
        </Link>

      </nav>
    );
  }
}

export default PrimaryNavigation;
