/** @format */

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../assets/img/Logo.png";
import CartWidget from "../CartWidget/CartWidget";

function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand='lg' className='bg-body-tertiary'>
            <Container className='store-icon'>
                <Navbar.Brand href='#home'>
                    <img src={Logo} className='logo' alt='' />
                </Navbar.Brand>
                <CartWidget />
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link href='#inicio'>Inicio</Nav.Link>
                        <Nav.Link href='#pricing'>Promociones</Nav.Link>
                        <NavDropdown
                            title='Categorias'
                            id='collapsible-nav-dropdown'>
                            <NavDropdown.Item href='#action/3.1'>
                                Iluminación inteligente
                            </NavDropdown.Item>
                            <NavDropdown.Item href='#action/3.2'>
                                Seguridad y vigilancia
                            </NavDropdown.Item>
                            <NavDropdown.Item href='#action/3.3'>
                                Electrodomésticos inteligentes
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href='#action/3.4'>
                                Hogar conectado
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href='#deets'>Sobre Nosotros</Nav.Link>
                        <Nav.Link eventKey={2} href='#memes'>
                            Contacto
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;
