const NavBar = () => {
  return (
    <nav className="sticky top-0 w-full bg-white shadow-md z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-semibold text-gray-900">Hotseat</div>
        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="text-gray-900 hover:text-blue-500 transition duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-900 hover:text-blue-500 transition duration-200">
              Rooms
            </a>
          </li>
          <li>
            <a href="#features" className="text-gray-900 hover:text-blue-500 transition duration-200">
              Log In
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;