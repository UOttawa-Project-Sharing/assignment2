import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { useRedirectToBooking } from "../utils/redirection.js";

import { MembershipPlans as plans, MembershipTypeMap } from "../utils/data.js";

function MembershipPage() {
    const redirectToBooking = useRedirectToBooking();

    return (
        <Container>
            <h2 className="text-center mt-5 mb-4 fw-medium">
                Membership
            </h2>
            <Row className="justify-content-center align-items-end gx-3">
                {plans.map((plan) => (
                    <Col
                        key={plan.title}
                        xs={12}
                        md={4}
                        className={`d-flex justify-content-center mb-4 ${plan.highlight ? "position-relative z-2" : ""}`}
                    >
                        <Card
                            className={`text-center shadow ${plan.highlight ? "border-primary border-2" : "border-0"} bg-secondary`}
                            style={{
                                borderRadius: 12,
                                minWidth: 260,
                                maxWidth: 340,
                                padding: plan.highlight ? "32px 20px 30px" : "24px 20px 24px",
                                position: "relative",
                                transform: plan.highlight ? "scale(1.07)" : "scale(1)"
                            }}
                        >
                            {plan.highlight && (
                                <Badge
                                    bg="info"
                                    className="position-absolute top-0 end-0 p-2 fs-6 fw-semibold rounded-3"
                                    style={{
                                        zIndex: 3, transform: "translate(-25%, 55%) rotate(15deg)"
                                    }}
                                >
                                    {plan.tag}
                                </Badge>
                            )}
                            <Card.Body>
                                <div className="fs-3 fw-bold mb-2">{plan.title}</div>
                                <div className="fs-1 fw-bolder mb-0">
                                    {plan.price}
                                    <span className="fs-4 fw-normal">$</span>
                                </div>
                                <div className="fs-5 fw-normal mb-2">
                                    /{plan.per}
                                </div>
                                <div className="fs-6 text-secondary mb-3">
                                    {plan.description}
                                </div>
                                <div>
                                    {plan.features.map((feat) => (
                                        <div
                                            key={feat.text}
                                            className="bg-white text-dark rounded mb-2 fw-medium d-flex align-items-center justify-content-center gap-2"
                                            style={{
                                                padding: "7px 8px", fontSize: 15,
                                            }}
                                        >
                                            <span>
                                                <i className="bi bi-check-circle-fill text-info" style={{ fontSize: 17 }} />
                                            </span>
                                            {feat.text}
                                        </div>
                                    ))}
                                </div>
                                <Button
                                    variant="info"
                                    className="w-100 fw-bold fs-5 rounded mt-2 text-dark"
                                    onClick={() => redirectToBooking(MembershipTypeMap[plan.title])}
                                >
                                    Subscribe
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default MembershipPage;