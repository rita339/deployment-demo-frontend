import { NavLink } from "react-router-dom";

const Nav = () => {
  
  return (
    <nav>
      <NavLink to="/">Employee List</NavLink>
      <NavLink to="/form">Form</NavLink>
    </nav>
  );
};

export default Nav;