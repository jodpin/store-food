import { useState } from "react";
import Sidebar from "./Sidebar";
import { FaHome } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";

import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();
  const links = [
    {
      name: "Home",
      path: "/",
      icon: <FaHome />,
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: <CiViewList />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <IoSettingsSharp />,
    },
  ];

  function closeSidebar() {
    setShowSidebar(false);
  }

  return (
    <>
      <div className="navbar container">
        <Link to="/" className="logo" href="">
          F<span>oo</span>diesHub
        </Link>

        <div className="nav-links">
          {links.map((link) => (
            <Link className={location.pathname == link.path? "link-navbar active": "link-navbar"} to={`${link.path}`} key={link.name}>
              {link.name}
            </Link>
          ))}
        </div>

        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className={`sidebar-btn ${showSidebar ? "active" : ""}`}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSidebar && <Sidebar close={closeSidebar} links={links} />}
    </>
  );
};

export default Navbar;
