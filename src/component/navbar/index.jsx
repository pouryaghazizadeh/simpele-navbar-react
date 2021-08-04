import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  // function useWindowSize() {
  //   const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  //   useEffect(() => {
  //     const resize = () => {
  //       setSize([window.innerWidth, window.innerHeight]);
  //     };
  //     window.addEventListener("resize", resize);
  //   }, []);
  //   return size;
  // }
  // const [width] = useWindowSize();

  const [Id, setId] = useState(false);
  return (
    <div id={Id ? "#hidden2" : ""}>
    
      <nav className="Nav" id={Id ? "Nav2" : ""}>
        <h1 className="logo" id={Id ? "logo2" : ""}>
          TvMaze
        </h1>
        <FaBars
          className="Bars"
          onClick={() => {
            setId(!Id);
          }}
        />
        <div className="Navmenu" id={Id ? "hidden" : " "}>
          <Link className="NsvLink" id={Id ? "nav" : ""} to="/">
            Home
          </Link>
          <Link className="NsvLink" to="/About" activeStyle>
            About
          </Link>
          <Link className="NsvLink" to="/ services" activeStyle>
            services
          </Link>
          <Link className="NsvLink" to="/contactUs" activeStyle>
            contactUs
          </Link>
          <Link className="NavBtnLink" to="/sign in">
            sign in
          </Link>
          {/* <Link className="NsvLink" to="/signUp" activeStyle>
            signUp
          </Link> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
