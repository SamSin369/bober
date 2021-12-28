import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button, Container, Dropdown, Image, Menu } from 'semantic-ui-react'
// import DefaultAvatar from "../../resources/images/Profile.png"
const SignedInMenu = ({setAuthenticated}) => {
    return (
        <Menu.Item position='right'>
            {/* <Image avator spaced="right" src={require("../../resources/images/Profile.png")}/> */}
            <Dropdown pointing="top left" text="Paulius">
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/CreateContract" text="Создать Контракт" icon="plus"/>
                    <Dropdown.Item as={Link} to="/Profile" text="Мой Профиль" icon="user"/>
                    <Dropdown.Item as={Link} onClick={() => setAuthenticated(false)} to="/" text="Выйти" icon="power"/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    )
}
 
export default SignedInMenu
