import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="container navbar-container">

        <div className="logo">
          <NavLink to="/" className="logo-text">
            PULSE
          </NavLink>
        </div>

        <nav className="nav-links">

          <NavLink to="/">Home</NavLink>

          <NavLink to="/products">Products</NavLink>

          <NavLink to="/technology">Technology</NavLink>

          <NavLink to="/applications">Applications</NavLink>

          <NavLink to="/contact">Contact</NavLink>

        </nav>

        <button className="theme-toggle">

          🌙

        </button>

      </div>

    </header>
  );
}

export default Navbar;