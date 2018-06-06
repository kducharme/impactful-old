import React from 'react';
import { Link } from 'react-router-dom';

class SecondaryNavigation extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          pagination: {
              levelOne: 'All Programs',
              levelTwo: true,
              levelThree: false
          }
      }
  }
  render() {
    return (
      <div className='sub'>
          {/* Navigation within the programs feature */}
          <span className='sub__nav'>
            <Link
              className={`sub__nav--link ${window.location.pathname === "/programs" ? "sub__active" : null }`} to="/">{this.state.pagination.levelOne}
            </Link>
            <svg className={`${!this.state.pagination.levelTwo ? "sub__divider--hide" : null}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path className='sub__divider' d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
            </svg>
            <Link
              className={`sub__nav--link ${window.location.pathname === "/programs" ? "sub__active" : null }`} to="/">{this.state.pagination.levelOne}
            </Link>
            <svg className={`${!this.state.pagination.levelTwo ? "sub__divider--hide" : null}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path className='sub__divider' d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
            </svg>
            <Link
              className={`sub__nav--link ${window.location.pathname === "/programs" ? "sub__active" : null }`} to="/">{this.state.pagination.levelOne}
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
