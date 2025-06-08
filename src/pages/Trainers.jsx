import React from "react";
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import {Link} from "react-router";

// Example trainer data
const trainers = [{
    name: "George",
    description: "George is a certified personal trainer with over a decade of experience helping clients achieve their fitness goals. Passionate and motivating, he specializes in strength training and functional movement.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    link: "/trainers/george",
}, {
    name: "Michel",
    description: "Michel is a dynamic and enthusiastic trainer known for his personalized approach to fitness. With a background in sports science, he crafts effective workout plans for all levels.",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    link: "/trainers/michel",
}, {
    name: "Lucy",
    description: "George is a certified personal trainer with over a decade of experience helping clients achieve their fitness goals. Passionate and motivating, he specializes in strength training and functional movement.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    link: "/trainers/george2",
}, {
    name: "Michel",
    description: "Michel is a dynamic and enthusiastic trainer known for his personalized approach to fitness. With a background in sports science, he crafts effective workout plans for all levels.",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    link: "/trainers/michel2",
},];

function TrainersPage() {
    return (<>
        <Container>
            <h2 className="text-center mb-5 mt-5 text-body fw-medium">
                Our Trainers
            </h2>
            <Row className="justify-content-center">
                {trainers.map((trainer, idx) => (<Col
                    key={trainer.name}
                    xs={12}
                    md={6}
                    lg={5}
                    className="d-flex justify-content-center mb-4"
                >
                    <Card
                        className="w-100 text-dark align-items-center bg-light border-0 shadow"
                        style={{
                            borderRadius: 0, maxWidth: 400, minHeight: 420,
                        }}
                    >
                        <div className="w-100 d-flex justify-content-center mt-4 mb-3">
                            <img
                                src={trainer.image}
                                alt={trainer.name}
                                style={{
                                    width: 120,
                                    height: 180,
                                    objectFit: "cover",
                                    border: "2px solid var(--bs-secondary)",
                                    background: "var(--bs-light)",
                                }}
                            />
                        </div>
                        <Card.Body className="w-100 d-flex flex-column align-items-start px-4">
                            <Card.Title
                                style={{
                                    fontSize: 28, fontWeight: 500, marginBottom: 0, color: "var(--bs-dark)",
                                }}
                            >
                                {trainer.name}
                            </Card.Title>
                            <Card.Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: 400,
                                    color: "var(--bs-dark)",
                                    marginBottom: "2.5rem",
                                    marginTop: 10,
                                }}
                            >
                                {trainer.description}
                            </Card.Text>
                            <div className="w-100 d-flex justify-content-center mt-auto">
                                <Button
                                    variant="primary"
                                    className="rounded py-2 px-4"
                                    style={{
                                        fontSize: 17, minWidth: 140,
                                    }}
                                    as={Link}
                                    to={trainer.link}
                                >
                                    More Info
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>))}
            </Row>
        </Container>
    </>);
}

export default TrainersPage;