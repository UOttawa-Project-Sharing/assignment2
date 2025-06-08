import React from "react";
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import {Link} from "react-router";

const crossfitImg = "https://picsum.photos/170/120";
const yogaImg = "https://picsum.photos/170/120?random=1";
const spinningImg = "https://picsum.photos/170/120?random=2";
const pilatesImg = "https://picsum.photos/170/120?random=3";

const programs = [{
    title: "Cross Fit",
    description: ["This is a short cross fit description. This is a short cross fit description. This is a short cross fit description.",],
    image: crossfitImg,
}, {
    title: "Yoga",
    description: ["This is a short yoga description. This is a short yoga description. This is a short yoga description.",],
    image: yogaImg,
}, {
    title: "Spinning",
    description: ["This is a short spinning description. This is a short spinning description. This is a short spinning description.",],
    image: spinningImg,
}, {
    title: "Pilates",
    description: ["This is a short Pilates description. This is a short Pilates description. This is a short Pilates description.",],
    image: pilatesImg,
},];

function ProgramsPage() {
    return (<>
        <Container fluid>
            <h2 className="text-center mb-5 mt-3 fw-medium text-light">Our Programs</h2>
            {programs.map((program, idx) => {
                const alignLeft = idx % 2 === 0;
                return (<Row
                    key={program.title}
                    className="mb-5"
                    style={{
                        marginLeft: 0, marginRight: 0, justifyContent: alignLeft ? "flex-start" : "flex-end"
                    }}
                >
                    <Col xs={12} className="px-0">
                        <div style={{
                            display: "flex", justifyContent: alignLeft ? "flex-start" : "flex-end"
                        }}>
                            <Card
                                className="shadow border-0 bg-light text-dark"
                                style={{
                                    borderRadius: "0.5rem",
                                    overflow: "hidden",
                                    height: "300px",
                                    width: "100%",
                                    maxWidth: 1000,
                                    marginLeft: alignLeft ? 0 : "auto",
                                    marginRight: alignLeft ? "auto" : 0,
                                    display: "flex",
                                }}
                            >
                                <div
                                    className={`d-flex flex-row h-100 w-100 ${alignLeft ? "flex-row-reverse" : ""}`}
                                >
                                    <div style={{width: "40%", height: "100%"}}>
                                        <img
                                            src={program.image}
                                            alt={program.title}
                                            style={{
                                                width: "100%", height: "100%", objectFit: "cover", borderRadius: 0
                                            }}
                                        />
                                    </div>
                                    <div style={{width: "60%", height: "100%"}}>
                                        <Card.Body
                                            className={`h-100 d-flex flex-column justify-content-center ${alignLeft ? "text-end" : ""}`}>
                                            <Card.Title className="fs-3 fw-bold mb-2">
                                                {program.title}
                                            </Card.Title>
                                            <Card.Text className="mb-3">
                                                {program.description.map((desc, i) => (<span key={i}>
                                                                {desc}
                                                    <br/>
                                                            </span>))}
                                            </Card.Text>
                                            <Button
                                                variant="primary"
                                                className="rounded-pill px-4"
                                                style={{
                                                    alignSelf: alignLeft ? "flex-end" : "flex-start"
                                                }}
                                                as={Link}
                                                to={`/programs/${program.title.toLowerCase().replace(/\s+/g, "")}`}
                                            >
                                                More Info
                                            </Button>
                                        </Card.Body>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>);
            })}
        </Container>
    </>);
}

export default ProgramsPage;