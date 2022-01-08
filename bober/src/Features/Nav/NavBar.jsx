import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { Button, Container, Dropdown, Image, Menu } from "semantic-ui-react";
import boberLogo from "../../resources/images/boberLogo.png";
import Profile from "../../resources/images/Profile.png";
import SignedOutMenu from "./SignedOutMenu";
const NavBar = () => {
  const authenticated = useSelector((state) => state.auth.authenticated);

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} to="/" header>
            <img src={boberLogo} alt="logo" id="boberLogo" />
          </Menu.Item>

          <Menu name="Events" />

          {authenticated && (
            <>
              <Menu.Item as={NavLink} to="/Contracts">
                <Button positive inverted content="Все Контракты" />
              </Menu.Item>
              <Menu.Item as={NavLink} to="/Steps">
                <Button positive inverted content="Итапы" />
              </Menu.Item>
            </>
          )}
          <SignedOutMenu />

          {/* {authenticated ? (
            <SignedInMenu setAuthenticated={setAuthenticated} />
          ) : (
            <SignedOutMenu setAuthenticated={setAuthenticated} />
          )} */}
        </Container>
      </Menu>
    </div>
  );
};

export default NavBar;
