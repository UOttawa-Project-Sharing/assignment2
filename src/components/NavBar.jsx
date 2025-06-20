import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router";

import { trainers, ProgramsInfo } from "../utils/data.js";
import GymName from "./GymName.jsx";
import React from "react";

function NavigatorBar() {
    return (
        <Navbar expand="lg" className="bg-primary sticky-top" data-bs-theme="dark">
        <Container>
            <Navbar.Brand as={Link} to="/"><GymName/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <NavDropdown renderMenuOnMount={true}
                                 title={<Link style={{color: 'inherit', textDecoration: 'none'}} to="/programs">Programs</Link>} id="basic-nav-dropdown">
                        {ProgramsInfo.map((program) => (
                            <NavDropdown.Item key={program.name} as={Link} to={`/programs/${program.id}`}>
                                {program.name}
                            </NavDropdown.Item>
                        ))}
                    </NavDropdown>
                    <NavDropdown renderMenuOnMount={true}
                                 title={<Link style={{color: 'inherit', textDecoration: 'none'}} to="/trainers">Trainers</Link>} id="basic-nav-dropdown">
                        {trainers.map((trainer) => (
                            <NavDropdown.Item key={trainer.name} as={Link} to={`/trainers/${trainer.id}`}>
                                {trainer.name}
                            </NavDropdown.Item>
                        ))}
                    </NavDropdown>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    <Nav.Link as={Link} to="/memberships">Memberships</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>);
}

export default NavigatorBar;