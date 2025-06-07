import React, {useState} from "react";
import {Container, Row, Col, Form, Button, Card} from "react-bootstrap";

function ContactPage() {
    const [form, setForm] = useState({
        name: "", email: "", phone: "", message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setForm({name: "", email: "", phone: "", message: ""});
    };

    return (<>
        <Container>
            <h2 style={{textAlign: "center", marginTop: "36px", fontWeight: 700}}>
                Contact US
            </h2>
            <div style={{textAlign: "center", marginBottom: "30px"}}>
                Any Question or remarks? Just write us a message
            </div>
            <Row className="justify-content-center">
                <Card style={{
                    maxWidth: 1100,
                    borderRadius: 12,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                    margin: "0 auto",
                    border: "none",
                    padding: "0",
                    display: "flex",
                    flexDirection: "row",
                    overflow: "hidden"
                }}>
                    <Col md={8} className="bg-body-tertiary" style={{padding: "40px 36px"}}>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col md={6} className="mb-4">
                                    <Form.Group controlId="contactName">
                                        <Form.Label className="text-dark"
                                                    style={{fontWeight: 500}}>Name</Form.Label>
                                        <Form.Control
                                            className="text-dark"
                                            style={{
                                                border: "none",
                                                borderBottom: "2px solid var(--bs-primary)",
                                                borderRadius: 0,
                                                background: "transparent",
                                                fontSize: 16,
                                                paddingLeft: 0,
                                            }}
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6} className="mb-4">
                                    <Form.Group controlId="contactEmail">
                                        <Form.Label className="text-dark"
                                                    style={{fontWeight: 500}}>Email</Form.Label>
                                        <Form.Control
                                            className="text-dark"
                                            style={{
                                                border: "none",
                                                borderBottom: "2px solid var(--bs-primary)",
                                                borderRadius: 0,
                                                background: "transparent",
                                                fontSize: 16,
                                                paddingLeft: 0,
                                            }}
                                            type="email"
                                            name="email"
                                            placeholder="contact@GymJim.com"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} className="mb-4">
                                    <Form.Group controlId="contactPhone">
                                        <Form.Label className="text-dark"
                                                    style={{fontWeight: 500}}>Phone</Form.Label>
                                        <Form.Control
                                            className="text-dark"
                                            style={{
                                                border: "none",
                                                borderBottom: "2px solid var(--bs-primary)",
                                                borderRadius: 0,
                                                background: "transparent",
                                                fontSize: 16,
                                                paddingLeft: 0,
                                            }}
                                            type="text"
                                            name="phone"
                                            placeholder="+1 (123) 456-7890"
                                            value={form.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}></Col>
                            </Row>
                            <Form.Group controlId="contactMessage" className="mb-4">
                                <Form.Label className="text-dark" style={{fontWeight: 500}}>Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="message"
                                    placeholder="Write your message"
                                    value={form.message}
                                    onChange={handleChange}
                                    className="text-dark"
                                    style={{
                                        border: "none",
                                        borderBottom: "2px solid var(--bs-primary)",
                                        borderRadius: 0,
                                        background: "transparent",
                                        fontSize: 16,
                                        paddingLeft: 0,
                                    }}
                                    required
                                />
                            </Form.Group>
                            <div style={{display: "flex", justifyContent: "flex-end"}}>
                                <Button
                                    type="submit"
                                    className="bg-primary text-white"
                                    style={{
                                        border: "none",
                                        borderRadius: 8,
                                        padding: "10px 34px",
                                        fontWeight: 500,
                                        fontSize: "1.1rem",
                                    }}
                                >
                                    Send Message
                                </Button>
                            </div>
                            {submitted && (<div className="mt-3 text-success">
                                Thank you for contacting us!
                            </div>)}
                        </Form>
                    </Col>
                    {/* --- middle --- */}
                    <Col md={4} className="bg-primary text-body" style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "40px 24px"
                    }}>
                        <div>
                            <h5 style={{fontWeight: 600, marginBottom: 12, textAlign: "center"}}>Contact
                                Information</h5>
                            <div style={{marginBottom: 18, textAlign: "center", fontSize: 15}}>
                                Fill out the form and our team will get back to you as soon as possible.
                            </div>
                            <div style={{marginBottom: 12, display: "flex", alignItems: "center", gap: 10}}>
                  <span className="text-primary-emphasis" style={{fontSize: 18}}>
                    <i className="bi bi-geo-alt-fill"></i>
                  </span>
                                <span style={{fontSize: 15}}>
                        <a
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-decoration-none"
                            style={{textDecoration: "none"}} className={"text-body"}
                        >123 Fitness Street, Cityville</a></span>
                            </div>
                            <div style={{marginBottom: 12, display: "flex", alignItems: "center", gap: 10}}>
                  <span className="text-primary-emphasis" style={{fontSize: 18}}>
                    <i className="bi bi-telephone-fill"></i>
                  </span>
                                <span style={{fontSize: 15}}><a href={"tel:+11234567890"}
                                                                style={{textDecoration: "none"}}
                                                                className={"text-body"}>+1 (123) 456-7890</a></span>
                            </div>
                            <div style={{marginBottom: 32, display: "flex", alignItems: "center", gap: 10}}>
                  <span className="text-primary-emphasis" style={{fontSize: 18}}>
                    <i className="bi bi-envelope-fill"></i>
                  </span>
                                <span style={{fontSize: 15}}><a href={"mailto:contact@gymjim.com"}
                                                                style={{textDecoration: "none"}}
                                                                className={"text-body"}>contact@GymJim.com</a></span>
                            </div>
                            <div style={{display: "flex", justifyContent: "center", gap: 24, fontSize: 20}}>
                                <i className="bi bi-facebook"></i>
                                <i className="bi bi-instagram"></i>
                                <i className="bi bi-linkedin"></i>
                            </div>
                        </div>
                    </Col>
                </Card>
            </Row>
        </Container>
    </>);
}

export default ContactPage;