import React from 'react';
import { Link } from 'react-router-dom';

class SecondaryNavigation extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          program: null,
          project: null
      }
  }
  render() {
    return (
      <div className='sub'>
          <span className='sub__nav'>

        {/* Programs */}
            <Link
              className={`
              sub__nav--link
              ${window.location.pathname === "/programs" ? "sub__active" : null }`}
              to="/programs">All Programs
            </Link>

        {/* ARROW DIVIDER */}
            <svg
              className={`${this.state.program === null ? "sub__divider--hide" : null}`}
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path className='sub__divider' d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
            </svg>

        {/* Programs => {Program Name}*/}
            <Link
              className={`
              sub__nav--link
              ${window.location.pathname === `/programs/${this.state.program}` ? "sub__active" : null }
              ${this.state.program === null ? "sub__hide" : null }
              `}
              to={`/programs/${this.state.program}`}>{this.state.program}
            </Link>

        {/* ARROW DIVIDER */}
            <svg
                className={`${this.state.project === null ? "sub__divider--hide" : null}`}
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path className='sub__divider' d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
            </svg>

        {/* Programs => {Program Name} => {Project Name}*/}
            <Link
              className={`
              sub__nav--link
              ${window.location.pathname === "/programs" ? "sub__active" : null }
              ${this.state.project === null ? "sub__hide" : null }
              `}
              to={`/programs/${this.state.program}/${this.state.project}`}>{this.state.project}
            </Link>

          </span>

          <span className='sub__links'>

          </span>

          <span className='sub__actions'>

          </span>

      </div>
    );
  }
}

export default SecondaryNavigation;
