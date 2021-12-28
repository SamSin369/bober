import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Container, Menu } from 'semantic-ui-react'
import boberLogo from "../../resources/images/boberLogo.png"
import SignedInMenu from './SignedInMenu'
import SignedOutMenu from './SignedOutMenu'
const NavBar = () => {

    const [authenticated, setAuthenticated] = useState(false);
    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item as={NavLink} to="/" header>
                        <img src={boberLogo} alt="logo" id="boberLogo"/>
                    </Menu.Item>
                    <Menu name="Events"/>

                    {authenticated &&
                    <Menu.Item as={NavLink} to="/Contracts">
                        <Button positive inverted content="Add Contract Listing"/>
                    </Menu.Item>}

                    {authenticated ? <SignedInMenu setAuthenticated={setAuthenticated}/> :     <SignedOutMenu setAuthenticated={setAuthenticated}/>}
                 
               
               
                </Container>
            </Menu>
        </div>
    )
}

export default NavBar
