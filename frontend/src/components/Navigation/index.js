import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";
import title from "../../assets/supr-title.png"

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink className="navlinks" to="/signup">
          Sign Up
        </NavLink>
      </>
    );
  }

  return (
    <nav className="topnav">
      <NavLink exact to="/">
        <img src={title} className="nav__img" />
      </NavLink>
      <ul>
        <li>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
