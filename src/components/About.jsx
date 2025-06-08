import React from "react";
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import {Link} from "react-router";
import GymName from "./GymName.jsx";
// Make sure to import bootstrap-icons in your main entry point or index.html

const services = [{
    icon: "bi-person-walking", title: "Open Gym", desc: "Fully-equipped space for independent workouts",
}, {
    icon: "bi-fire", title: "CrossFit", desc: "High-intensity functional fitness classes",
}, {
    icon: "bi-person-arms-up", title: "Pilates", desc: "Core-strengthening and flexibility training",
}, {
    icon: "bi-flower2", title: "Yoga", desc: "Mind-body balance and wellness practices",
}, {
    icon: "bi-people-fill", title: "Personal Training", desc: "One-on-one coaching with certified trainers",
},];

function AboutGymJim() {
    return (<Container className="py-5">
        <Row className="justify-content-center">
            <Col lg={10}>
                <Card className="shadow-lg border-0">
                    <Card.Header className="bg-primary text-white text-center py-4">
                        <h1 className="display-4 mb-0">About <GymName/></h1>
                    </Card.Header>
                    <Card.Body className="p-5">
                        <Row className="mb-4">
                            <Col>
                                <p className="lead text-muted mb-4">
                                    Welcome to <GymName/>, your premier destination for complete fitness and wellness.
                                    We're more than just a gym – we're a community dedicated to helping you achieve
                                    your health and fitness goals through diverse, high-quality programs tailored to
                                    every lifestyle and fitness level.
                                </p>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col>
                                <h3 className="text-primary mb-3">Our Services</h3>
                                <Row xs={1} sm={2} md={3} lg={3} className="g-4">
                                    {services.map((service, idx) => (<Col key={idx}>
                                        <Card className="h-100 border-0">
                                            <Card.Body
                                                className="d-flex flex-column align-items-center text-center">
                                                <div
                                                    className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mb-3"
                                                    style={{width: "56px", height: "56px", fontSize: "2rem"}}
                                                >
                                                    <i className={`bi ${service.icon}`}></i>
                                                </div>
                                                <h5 className="mb-1">{service.title}</h5>
                                                <small className="text-muted">{service.desc}</small>
                                            </Card.Body>
                                        </Card>
                                    </Col>))}
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="mb-4">
                                    At <GymName/>, we believe fitness should be accessible, enjoyable, and sustainable.
                                    Our experienced instructors and trainers are passionate about creating a
                                    welcoming
                                    environment where beginners feel comfortable starting their journey and seasoned
                                    athletes can push their limits.
                                </p>
                                <p className="mb-0">
                                    We're committed to fostering a supportive community where every member feels
                                    valued,
                                    motivated, and empowered to become their strongest, healthiest self. Join the
                                    <GymName/>
                                    family today and discover the difference that variety, quality instruction, and
                                    genuine
                                    community support can make in your fitness journey.
                                </p>
                            </Col>
                        </Row>
                        <div className="text-center mt-5">
                            <Button variant="primary" size="lg" className="px-5" as={Link} to={"/memberships"}>
                                Join <GymName/> Today
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>);
}

export default AboutGymJim;