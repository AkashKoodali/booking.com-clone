import "./Navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">lambooking</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">login</button>
        </div>
      </div>
    </div>

  )
}

export default NavBar