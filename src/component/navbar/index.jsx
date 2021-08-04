import React from "react";
import { Nav, NavLink, Bars, Navmenu, NavBtn, NavBtnLink } from "./Navbar";
const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavLink to="/" id="f">
          Home
        </NavLink>
        <Bars />
        <Navmenu>
          <NavLink to="/About" activeStyle>
            About
          </NavLink>
          <NavLink to="/ services" activeStyle>
            services
          </NavLink>
          <NavLink to="/contactUs" activeStyle>
            contactUs
          </NavLink>
          <NavLink to="/signUp" activeStyle>
            signUp
          </NavLink>
        </Navmenu>

        <NavBtn>
          <NavBtnLink to="sign in">sign in</NavBtnLink>
        </NavBtn>
      </Nav>
    </div>
  );
};

export default Navbar;
