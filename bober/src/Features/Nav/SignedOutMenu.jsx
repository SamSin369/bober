import { limitToLast } from "firebase/firestore";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { Button, Container, Dropdown, Image, Menu } from "semantic-ui-react";
import { signOutFirebase } from "../../firestore/firebase-config";
import { useNavigate } from "react-router-dom";
import { handleSignOut } from "../../store/global-state/globalReducer";
import Profile from "../../resources/images/Profile.png";
const SignedOutMenu = () => {
  const isAuth = useSelector((state) => state.auth.authenticated);
  console.log(isAuth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOutLocal = () => {
    dispatch(handleSignOut(navigate));
  };

  return (
    <>
      <Menu.Item position="right">
        {!isAuth ? (
          <Button as={NavLink} to="/Login" basic inverted content="Войти" />
        ) : undefined}
      
        {/* <Button basic inverted content="Register" style={{marginLeft: '0.5em'}}/> */}
      </Menu.Item>
      {isAuth ?<Menu.Item position="right">
        <Image avatar space="right" src={Profile} />
        <Dropdown pointing="top left" text="Bob">
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/MyProfile" text="Мой Профиль" icon="user" />
            <Dropdown.Item  > <Button
            content="Выйти"
            color="red"
            icon="power"
            id="sign-out"
            onClick={handleSignOutLocal}
          /></Dropdown.Item>
            {/* <Dropdown.Item as={Link} to="/createEvent" text />
         <Dropdown.Item as={Link} to="/createEvent" text /> */}
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item> : null}
    </>
  );
};

export default SignedOutMenu;
