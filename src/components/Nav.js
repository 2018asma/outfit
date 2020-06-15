import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
class Nav extends React.Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to='/outfit' className="navbar-brand">
      <img src={logo} alt="logo"/>
    </Link>
       
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse show navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/women' className="nav-link" href="#">
                النساء
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/men' className="nav-link" href="#">
                الرجال
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/kids' className="nav-link" href="#">
                الأطفال
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
