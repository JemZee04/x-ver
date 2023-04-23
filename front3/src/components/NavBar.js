import React, {useContext} from 'react';
import {Context} from "../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {ADMIN_ROUTE, MAIN_ROUTE} from "../utils/consts";
import {Button, NavLink} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import './NavBar.css';
import logo from '../photo/logo.svg';
import mail from '../photo/mail.png'
import bell from '../photo/bell.png'
import bookmark from '../photo/bookmark.png'
import {useNavigate} from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    return (
        <Navbar bg="primary" variant="dark" className={'nav'}>
            <Container className={'my-2'}>
                {/*<NavLink class={'NavLink'} to={MAIN_ROUTE}>WebLite</NavLink>*/}
                <Navbar.Brand href={MAIN_ROUTE}>
                    <img
                        src={logo}
                        // className="d-inlines-block align-top mb-4 logo"
                        className="logo"
                        alt="Logo"
                    />
                </Navbar.Brand>
                {user.isAuth ?
                <Nav className="ml-auto btn-name">
                    <Navbar.Brand href={MAIN_ROUTE}>
                        <img
                            src={bookmark}
                            className="d-inlines-block align-top mb-4 icons"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href={MAIN_ROUTE}>
                        <img
                            src={bell}
                            className="d-inlines-block align-top icons"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href={MAIN_ROUTE}>
                        <img
                            src={mail}
                            className="d-inlines-block align-top icons"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Button variant={"outline-light mx-2 btn"} onClick={()=> navigate(ADMIN_ROUTE)}>Админ панель</Button>
                    <Button variant={"outline-light btn"}  onClick={() => user.setIsAuth(false)}>Выйти</Button>
                </Nav>
                    :
                <Nav className="ml-auto" style={{color:'white'}}>
                   <Button variant={"outline-light btn"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;