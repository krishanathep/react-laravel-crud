import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="navbar-brand-wrapper d-flex justify-content-center">
        <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
          <a className="navbar-brand brand-logo" href="index.html">
            <img src="template/images/logo.svg" alt="logo" />
          </a>
          <a className="navbar-brand brand-logo-mini" href="index.html">
            <img src="template/images/logo-mini.svg" alt="logo" />
          </a>
          <button
            className="navbar-toggler navbar-toggler align-self-center"
            type="button"
            data-toggle="minimize"
          >
            <span className="mdi mdi-sort-variant" />
          </button>
        </div>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <ul className="navbar-nav mr-lg-4 w-100">
          <li className="nav-item nav-search d-none d-lg-block w-100">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="search">
                  <i className="mdi mdi-magnify" />
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Search now"
                aria-label="search"
                aria-describedby="search"
              />
            </div>
          </li>
        </ul>
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item nav-profile dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
              id="profileDropdown"
            >
              <img src="template/images/faces/face1.jpg" alt="profile" />
              <span className="nav-profile-name">Krishanathep.J</span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right navbar-dropdown"
              aria-labelledby="profileDropdown"
            >
              <a className="dropdown-item">
                <i className="mdi mdi-logout text-primary" />
                Logout
              </a>
            </div>
          </li>
        </ul>
        <button
          className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          data-toggle="offcanvas"
        >
          <span className="mdi mdi-menu" />
        </button>
      </div>
    </nav>
  );
}
