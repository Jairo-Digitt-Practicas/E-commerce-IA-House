/** @format */

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../assets/img/Logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
    return (
        <Navbar collapseOnSelect expand='lg' className='bg-body-tertiary'>
            <div className='flex-grow-1 d-flex justify-content-center align-items-center'>
                <CartWidget className='cart-widget' />
            </div>
            <Container className='store-icon'>
                <Navbar.Brand href='/'>
                    <img src={Logo} className='logo' alt='/' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link>
                            <Link className='menu-inicio' to='/'>
                                Inicio
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link
                                className='menu-promociones'
                                to='/promociones'>
                                Promociones
                            </Link>
                        </Nav.Link>
                        <NavDropdown
                            title='Categorias'
                            id='collapsible-nav-dropdown'>
                            <NavDropdown.Item>
                                <Link
                                    className='menu-categoria-1'
                                    to='/categoria/1'>
                                    Iluminación inteligente
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link
                                    className='menu-categoria-2'
                                    to='/categoria/2'>
                                    Seguridad y vigilancia
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link
                                    className='menu-categoria-3'
                                    to='/categoria/3'>
                                    Electrodomésticos inteligentes
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <Link
                                    className='menu-categoria-4'
                                    to='/categoria/4'>
                                    Hogar conectado
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <Link
                                className='menu-sobre-nosotros'
                                to='/sobrenosotros'>
                                Sobre Nosotros
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='menu-contacto' to='/contacto'>
                                Contacto
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
