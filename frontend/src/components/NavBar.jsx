import './styles/NavBar.css'; // Import the CSS file

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">Hotseat</div>
        <ul className="navbar__menu">
          <li>
            <a href="#home" className="navbar__link">Home</a>
          </li>
          <li>
            <a href="#about" className="navbar__link">Rooms</a>
          </li>
          <li>
            <a href="#features" className="navbar__link">Log In</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;