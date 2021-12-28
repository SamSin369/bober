import { limitToLast } from 'firebase/firestore'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Button, Container, Menu } from 'semantic-ui-react'
import { signOutFirebase } from '../../firestore/firebase-config'
import {
    useNavigate
 } from 'react-router-dom';
const SignedOutMenu = () => {
    const isAuth = useSelector(state => state.auth.authenticated)
    console.log(isAuth)

    const navigate = useNavigate();
   

    const handleSignOut = async () => {
        try {
            await signOutFirebase();
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
    <Menu.Item position='right'>
        {!isAuth ?<Button as={NavLink} to="/Login" basic inverted content="Войти"/> : undefined}
        {isAuth ? <Button content="Выйти" color="red" icon="power" id="sign-out" onClick={handleSignOut}/> : null}
        {/* <Button basic inverted content="Register" style={{marginLeft: '0.5em'}}/> */}
    </Menu.Item>
    )
}

export default SignedOutMenu
