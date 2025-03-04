import { Link } from "react-router-dom";
import "./styles/NavBar.css"; // Import the CSS file

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/"  className="navbar__logo">Hotseat</Link>
        <ul className="navbar__menu">
          <li>
            <a href="#about" className="navbar__link">
              Rooms
            </a>
          </li>
          <li>
            <Link to="/login" className="navbar__link">
              Log In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
