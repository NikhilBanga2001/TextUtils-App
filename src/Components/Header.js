import React from "react";
import PropTypes from "prop-types";
export default function Header(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.appname}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {props.home}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                {props.about}
              </a>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">
            Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  appname: PropTypes.string,
  home: PropTypes.string,
  about: PropTypes.string,
};

Header.defaultProps = {
  appname: "App Name Here",
  home: "Home",
  about: "About",
};
