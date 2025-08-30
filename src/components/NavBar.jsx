import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className="navbar">
        <div className="navLinks">
          <li className="inner-glow-btn">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "active" : ""}
              end
            >
              <span className="material-symbols-outlined">home_app_logo</span>
            </NavLink>
          </li>
          <li className="inner-glow-btn">
            <NavLink 
              to="/projects" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              <span className="material-symbols-outlined">code</span>
            </NavLink>
          </li>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
