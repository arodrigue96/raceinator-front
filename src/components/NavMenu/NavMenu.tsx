import { NavLink } from "react-router";
import "./NavMenu.css";

const NavMenu: React.FC = () => {
  return (
    <div className="nav-container">
      <nav className="main-navigation">
        <NavLink
          to="/home"
          className="main-navigation__item"
          children={({ isActive }) => {
            return (
              <>
                <img
                  src={isActive ? "icons/home_black.svg" : "/icons/home.svg"}
                  alt="Redirect to home page"
                  width={30}
                  height={30}
                />
                <span className="main-navigation__text">Home</span>
              </>
            );
          }}
        />
      </nav>
    </div>
  );
};

export default NavMenu;
