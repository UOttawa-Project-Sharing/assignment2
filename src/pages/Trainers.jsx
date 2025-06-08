import React from "react";
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import {Link} from "react-router";

import { trainers } from "../utils/data.js";

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
                                src={trainer.profilePicture}
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
                                    to={`/trainers/${trainer.id}`}
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