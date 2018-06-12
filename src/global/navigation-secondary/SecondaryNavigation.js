import React from "react";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "../components/button/ButtonPrimary";
import { GlobalContext } from "../../providers/GlobalProvider";

class SecondaryNavigation extends React.Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {value => {
          return (
            <div className="sub">
              <span className="sub__nav">
                {/* Programs */}
                <Link
                  className={`sub__nav--link
                      ${
                        window.location.pathname === "/programs"
                          ? "sub__active"
                          : null
                      }`}
                  to="/programs"
                  onClick={() => value.showAllPrograms()}
                >
                  All Programs
                </Link>

                {/* ARROW DIVIDER */}
                <svg
                  className={`${
                    value.programActive === null ? "sub__divider--hide" : null
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    className="sub__divider"
                    d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                  />
                </svg>

                {/* Programs => {Program Name}*/}
                <Link
                  className={`
                  sub__nav--link
                  ${
                    window.location.pathname ===
                    `/programs/${value.programActiveName}`
                    ? "sub__active"
                    : null
                  } ${
                    value.programActive === null ? "sub__hide" : null
                  } `}
                  to={`/programs/${value.programActiveName}`}
                  >
                  {value.programActiveName}
                </Link>

                {/* ARROW DIVIDER */}
                <svg
                  className={`${
                    value.projectActive === null ? "sub__divider--hide" : null
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    className="sub__divider"
                    d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                  />
                </svg>

                {/* Programs => {Program Name} => {Project Name}*/}
                <Link
                  className={`
              sub__nav--link
              ${window.location.pathname === "/programs" ? "sub__active" : null}
              ${value.projectActive === null ? "sub__hide" : null}
              `}
                  to={`/programs/${value.programActiveName}/${
                    value.projectActive
                  }`}
                >
                  {value.projectActiveName}
                </Link>
              </span>

              <span className="sub__links" />

              <span className="sub__actions">
                <ButtonPrimary
                  text="New program"
                  style="sub__actions--button"
                  event={() => console.log("clicked")}
                />
              </span>
            </div>
          );
        }}
      </GlobalContext.Consumer>
    );
  }
}

export default SecondaryNavigation;
