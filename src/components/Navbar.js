import React from 'react';
import PropTypes from 'prop-types';

function Navbar(props) {
  return (
      <>
        <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="/" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Home</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.aboutText || 'About Default'}</a>
                </li>
              </ul>
              {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-primary" type="submit">Search</button>
              </form> */}
              <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={props.modeChange} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Dark Mode</label>
              </div>
            </div>
          </div>
        </nav>
      </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

export default Navbar

