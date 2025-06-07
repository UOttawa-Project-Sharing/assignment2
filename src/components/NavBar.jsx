import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router";

function NavigatorBar() {
    return (
        <Navbar expand="lg" className="bg-primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">GymJim</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <NavDropdown renderMenuOnMount={true} title={
                            <Link style={{ color: 'inherit', textDecoration: 'none' }} to="about" onClick={e=> { e.stopPropagation(); }}>Programs</Link>
                        } id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown renderMenuOnMount={true} title={
                            <Link style={{ color: 'inherit', textDecoration: 'none' }} href="about" onClick={e=> { e.stopPropagation(); }}>Trainers</Link>
                        } id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/memberships">Memberships</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigatorBar;