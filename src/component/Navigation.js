import React from 'react'

export default function Navigation(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="/">Textutils</a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">about</a>
              </li>
            </ul>
            <div className={`custom-control custom-switch text-${props.mode===`light`?`dark`:`light`}`}>
              <label className="custom-control-label light" for="customSwitch2">enable Darkmode </label>
              <input type="checkbox" onClick={props.togglemode} className="custom-control-input" id="customSwitch2" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
