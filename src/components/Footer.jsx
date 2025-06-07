import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router";

function Footer() {
    return (
        <footer className="bg-primary text-white pt-4 pb-2 mt-auto">
        <Container>
            <Row className="align-items-center">
                <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
                    <h5 className="mb-1 fw-bold">GymJim</h5>
                    <small>&copy; {new Date().getFullYear()} GymJim. All rights reserved.</small>
                </Col>
                <Col md={4} className="text-center mb-3 mb-md-0">
                    <div>
                        <a
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-decoration-none"
                        >
                            <i className="bi bi-geo-alt-fill me-1"></i>
                            123 Fitness Street, Cityville
                        </a>
                    </div>
                    <div>
                        <a href="tel:+11234567890" className="text-white text-decoration-none">
                            <i className="bi bi-telephone-fill me-1"></i>
                            +1 (123) 456-7890
                        </a>
                    </div>
                    <div>
                        <a href="mailto:info@gymjim.com" className="text-white text-decoration-none">
                            <i className="bi bi-envelope-fill me-1"></i>
                            contact@gymjim.com
                        </a>
                    </div>
                </Col>
                <Col md={4} className="text-center text-md-end">
                    <a href="#" className="text-white me-3 fs-5" aria-label="Facebook">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="text-white me-3 fs-5" aria-label="Instagram">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" className="text-white fs-5" aria-label="Twitter">
                        <i className="bi bi-twitter-x"></i>
                    </a>
                </Col>
            </Row>
            <Row>
                <Col className="text-center mt-3">
                    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2">
                        <span>Made by <a href="https://www.linkedin.com/in/tristan-robichaud-2448b1293/" className="text-white text-decoration-underline">Tristan Robichaud</a> and <a href="https://www.linkedin.com/in/zachshewan/" className="text-white text-decoration-underline">Zachary Shewan</a></span>
                        <span className="d-none d-md-inline mx-2">|</span>
                        <span>
                <Link to="/privacy" className="text-white text-decoration-underline me-3">
                  Privacy Policy
                </Link>
                <Link to="/tos" className="text-white text-decoration-underline">
                  Terms of Service
                </Link>
              </span>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>);
}

export default Footer;