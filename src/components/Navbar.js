import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = (props) => {

  const [active, setActive] = useState('home');

  const handleClickActive = (tab) => {

    setActive(tab);

  }

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">News</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${active == "home" ? "active" : ""}`} onClick={() => { handleClickActive('home') }} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item"><Link onClick={() => { handleClickActive('business') }} className={`nav-link ${active == "business" ? "active" : ""}`} to="/business">Business</Link></li>
              <li className="nav-item"><Link onClick={() => { handleClickActive('entertainment') }} className={`nav-link ${active == "entertainment" ? "active" : ""}`} to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link onClick={() => { handleClickActive('general') }} className={`nav-link ${active == "general" ? "active" : ""}`} to="/general">General</Link></li>
              <li className="nav-item"><Link onClick={() => { handleClickActive('health') }} className={`nav-link ${active == "health" ? "active" : ""}`} to="/health">Health</Link></li>
              <li className="nav-item"><Link onClick={() => { handleClickActive('science') }} className={`nav-link ${active == "science" ? "active" : ""}`} to="/science">Science</Link></li>
              <li className="nav-item"><Link onClick={() => { handleClickActive('sports') }} className={`nav-link ${active == "sports" ? "active" : ""}`} to="/sports">Sports</Link></li>
              <li className="nav-item"><Link onClick={() => { handleClickActive('technology') }} className={`nav-link ${active == "technology" ? "active" : ""}`} to="/technology">Technology</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar