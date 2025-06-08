import React from "react";
import {useParams} from "react-router";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FullCalendar from '@fullcalendar/react'
import timegridPlugin from '@fullcalendar/timegrid'

const trainers = {
    george: {
        name: "George Lechapé",
        tagline: "Personal Trainer",
        title: "STRENGTH & CARDIO COACH",
        description: "With a science-based approach, I empower clients to achieve peak physical health. Let's build your best self together.",
        about: "George is a certified fitness professional with over a decade of experience coaching clients of all levels. His approach combines modern science with practical routines, ensuring every client enjoys sustainable progress. Whether your focus is strength, stamina, or holistic health, George crafts a tailored path for your unique needs. He believes in supporting not just your physical transformation, but also your confidence and motivation to maintain a healthy lifestyle.",
        actions: [{icon: "🏃", label: "Cardio"}, {icon: "📅", label: "Schedule"}, {
            icon: "🍎", label: "Nutrition"
        }, {icon: "💪", label: "Strength"}],
        image: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&w=500&h=360&fit=crop",
        image2: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&w=500&h=360&fit=crop",
        cta: "Book a Session",
        ctaLink: "#book",
        moreLink: "#about"
    }
}

function DiagonalDottedLinesBg() {
    const lines = [0, 1, 2, 3];
    const w = typeof window !== "undefined" ? window.innerWidth : 1920;
    const h = typeof window !== "undefined" ? window.innerHeight : 1080;
    return (<svg
        width="100vw"
        height="100vh"
        style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "100vw",
            height: "100vh",
            pointerEvents: "none",
            zIndex: 0,
            minWidth: "100vw",
            minHeight: "100vh"
        }}
    >
        {lines.map((offset, idx) => (<line
            key={idx}
            x1={w}
            y1={0 + offset * 80}
            x2={0}
            y2={h + offset * 80}
            stroke="var(--bs-primary)"
            strokeWidth={5}
            strokeDasharray="10, 24"
            opacity="0.10"
            vectorEffect="non-scaling-stroke"
        />))}
        <line
            x1="0"
            y1={h * 0.8}
            x2={w}
            y2={h}
            stroke="var(--bs-secondary)"
            strokeWidth={7}
            strokeDasharray="36, 22"
            opacity="0.10"
            vectorEffect="non-scaling-stroke"
        />
        <line
            x1="0"
            y1={h * 0.9}
            x2={w}
            y2={h * 1.1}
            stroke="var(--bs-primary)"
            strokeWidth={7}
            strokeDasharray="36, 22"
            opacity="0.10"
            vectorEffect="non-scaling-stroke"
        />
    </svg>);
}

function TrainerPage() {
    const {TainerName} = useParams();
    const trainer = trainers[TainerName?.toLowerCase()];

    if (!trainer) {
        return (<div
            className="bg-dark text-light d-flex align-items-center justify-content-center"
            style={{minHeight: "100vh", fontSize: 28}}
        >
            Trainer not found.
        </div>);
    }

    return (<>
        <DiagonalDottedLinesBg/>
        <Row
            className="position-absolute"
            style={{
                top: 40, right: 36, gap: 8, opacity: 0.18, zIndex: 2, width: "auto", flexWrap: "nowrap"
            }}
        >
            {[...Array(8)].map((_, i) => (<Col key={i} xs="auto" className="p-0">
                <div
                    className="bg-light"
                    style={{
                        width: 9, height: 9, borderRadius: "50%"
                    }}
                />
            </Col>))}
        </Row>
        <div
            style={{
                position: "absolute",
                top: "18%",
                left: "15%",
                fontSize: 58,
                color: "var(--bs-light)",
                opacity: 0.12,
                fontWeight: "bold",
                zIndex: 1,
                pointerEvents: "none"
            }}
        >
            ×
        </div>
        <div
            style={{
                position: "absolute",
                bottom: "6%",
                right: "15%",
                fontSize: 50,
                color: "var(--bs-light)",
                opacity: 0.12,
                fontWeight: "bold",
                zIndex: 1,
                pointerEvents: "none"
            }}
        >
            ×
        </div>
        <Container
            fluid
            className="h-100"
            style={{
                position: "relative", zIndex: 4, overflowX: "hidden"
            }}
        >
            <Row
                className="align-items-center h-100"
                style={{
                    minHeight: "100vh", paddingRight: "3vw", paddingLeft: "3vw", overflowX: "hidden"
                }}
            >
                <Col
                    md={6}
                    className="d-flex flex-column justify-content-center"
                    style={{
                        maxWidth: 600, zIndex: 3, paddingLeft: "4vw", paddingRight: "2vw"
                    }}
                >
                    <div
                        className="text-primary mt-5"
                        style={{
                            fontSize: 19, fontWeight: 600, marginBottom: 14, letterSpacing: 2
                        }}
                    >
                        {trainer.tagline}
                    </div>
                    <div
                        style={{
                            fontSize: 54,
                            fontWeight: 900,
                            lineHeight: 1.04,
                            marginBottom: 10,
                            letterSpacing: 1,
                            color: "var(--bs-light)",
                            textShadow: "0 2px 20px #000",
                            textTransform: "uppercase"
                        }}
                    >
                        {trainer.title}
                    </div>
                    <div
                        style={{
                            fontSize: 34,
                            fontWeight: 700,
                            margin: "10px 0 20px 0",
                            letterSpacing: 1,
                            color: "var(--bs-light)",
                            textShadow: "0 2px 10px #000"
                        }}
                    >
                        {trainer.name}
                    </div>
                    <Row className="g-2 mb-4">
                        {trainer.actions.map((a) => (<Col key={a.label} xs="auto">
                  <span
                      title={a.label}
                      className="bg-secondary text-primary d-flex align-items-center justify-content-center"
                      style={{
                          width: 42,
                          height: 42,
                          fontSize: 25,
                          borderRadius: "50%",
                          boxShadow: "0 2px 10px var(--bs-primary)",
                          opacity: 0.85
                      }}
                  >
                    {a.icon}
                  </span>
                        </Col>))}
                    </Row>
                    <div
                        className="text-light"
                        style={{
                            fontSize: 20, marginBottom: 40, fontWeight: 400, maxWidth: 420, opacity: 0.92
                        }}
                    >
                        {trainer.description}
                    </div>
                    <Row className="g-3 mb-3">
                        <Col xs="auto">
                            <Button
                                href={trainer.ctaLink}
                                size="lg"
                                className="bg-primary text-light border-0"
                                style={{
                                    padding: "13px 40px",
                                    borderRadius: 23,
                                    fontSize: 20,
                                    fontWeight: 700,
                                    letterSpacing: 1,
                                    boxShadow: "0 2px 12px var(--bs-primary)"
                                }}
                            >
                                {trainer.cta}
                            </Button>
                        </Col>
                        <Col xs="auto">
                            <Button
                                href={trainer.moreLink}
                                size="lg"
                                variant="outline-primary"
                                className="bg-transparent"
                                style={{
                                    color: "var(--bs-primary)",
                                    padding: "13px 30px",
                                    borderRadius: 23,
                                    fontSize: 18,
                                    fontWeight: 500,
                                    background: "rgba(255,255,255,0.06)",
                                    border: "1.5px solid var(--bs-primary)",
                                    transition: "background .18s, color .18s"
                                }}
                            >
                                Read More
                            </Button>
                        </Col>
                    </Row>
                    <div style={{marginTop: 48}}>
                        <Row className="g-1 mb-2">
                            {[...Array(8)].map((_, i) => (<Col key={i} xs="auto" className="p-0">
                                <div
                                    className="bg-primary"
                                    style={{
                                        width: 9, height: 9, borderRadius: "50%", opacity: i < 6 ? 1 : 0.17
                                    }}
                                />
                            </Col>))}
                        </Row>
                        <Row className="g-1">
                            {[...Array(7)].map((_, i) => (<Col key={i} xs="auto" className="p-0">
                                <div
                                    className="bg-light"
                                    style={{
                                        width: 17, height: 8, borderRadius: 3, opacity: 0.13, transform: "skewX(-28deg)"
                                    }}
                                />
                            </Col>))}
                        </Row>
                    </div>
                </Col>
                <Col xs={12} md={6} style={{zIndex: 4}}>
                    <Row className="justify-content-center flex-nowrap flex-md-wrap gx-0">
                        <Col
                            xs={6}
                            md={6}
                            className="d-flex flex-column align-items-center justify-content-center"
                            style={{
                                position: "relative", minHeight: 420, padding: 0
                            }}
                        >
                            <Card
                                className="bg-transparent border-0"
                                style={{
                                    width: "100%",
                                    maxWidth: 325,
                                    height: 390,
                                    borderRadius: 32,
                                    position: "relative",
                                    marginBottom: 40,
                                    marginTop: 0,
                                    overflow: "visible"
                                }}
                            >
                                <Card.Img
                                    src={trainer.image2}
                                    alt={trainer.name + " alternate"}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        borderRadius: 32,
                                        boxShadow: "0 2px 24px var(--bs-secondary)",
                                        border: "4px solid var(--bs-secondary)",
                                        background: "var(--bs-light)",
                                        transition: "all .3s cubic-bezier(.86,0,.07,1)",
                                        zIndex: 2,
                                        position: "relative"
                                    }}
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        left: -20,
                                        top: 25,
                                        width: 180,
                                        height: 18,
                                        zIndex: 5,
                                        opacity: 0.75
                                    }}
                                >
                                    <div
                                        className="bg-light"
                                        style={{
                                            width: "100%", height: "100%", borderRadius: 9
                                        }}
                                    />
                                </div>
                                <div
                                    style={{
                                        position: "absolute",
                                        right: -20,
                                        bottom: 25,
                                        width: 180,
                                        height: 18,
                                        zIndex: 5,
                                        opacity: 0.75
                                    }}
                                >
                                    <div
                                        className="bg-primary"
                                        style={{
                                            width: "100%", height: "100%", borderRadius: 9
                                        }}
                                    />
                                </div>
                            </Card>
                        </Col>
                        <Col
                            xs={6}
                            md={6}
                            className="d-flex flex-column align-items-center justify-content-center"
                            style={{
                                position: "relative", minHeight: 420, padding: 0
                            }}
                        >
                            <Card
                                className="bg-transparent border-0"
                                style={{
                                    width: "100%",
                                    maxWidth: 325,
                                    height: 390,
                                    borderRadius: 32,
                                    position: "relative",
                                    marginTop: 80,
                                    overflow: "visible"
                                }}
                            >
                                <Card.Img
                                    src={trainer.image}
                                    alt={trainer.name}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        borderRadius: 32,
                                        boxShadow: "0 8px 32px var(--bs-primary)",
                                        border: "5px solid var(--bs-light)",
                                        background: "var(--bs-light)",
                                        transition: "all .3s cubic-bezier(.86,0,.07,1)",
                                        zIndex: 4,
                                        position: "relative"
                                    }}
                                />
                                <div
                                    className="bg-light"
                                    style={{
                                        position: "absolute",
                                        top: 44,
                                        left: 0,
                                        width: 120,
                                        height: 18,
                                        borderRadius: 8,
                                        opacity: 0.91,
                                        zIndex: 10
                                    }}
                                />
                                <div
                                    className="bg-primary"
                                    style={{
                                        position: "absolute",
                                        bottom: 46,
                                        right: 0,
                                        width: 120,
                                        height: 18,
                                        borderRadius: 8,
                                        opacity: 0.92,
                                        zIndex: 10
                                    }}
                                />
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        <section
            className="bg-dark text-light"
            style={{
                borderTop: "1px solid var(--bs-secondary)",
                marginTop: 48,
                paddingTop: 48,
                paddingBottom: 48,
                zIndex: 10,
                position: "relative"
            }}
        >
            <Container id={"about"}>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <h2
                            className="text-primary"
                            style={{
                                fontWeight: 700,
                                marginBottom: 24,
                                letterSpacing: 2,
                                textTransform: "uppercase",
                                fontSize: 32
                            }}
                        >
                            About {trainer.name}
                        </h2>
                        <div
                            style={{
                                fontSize: 20, opacity: 0.92, lineHeight: 1.7, color: "var(--bs-light)"
                            }}
                        >
                            {trainer.about ?? "This coach is dedicated to helping you achieve your goals with a personal, science-based, and supportive approach."}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section
            style={{
                borderTop: "1px solid var(--bs-secondary)",
                paddingTop: 48,
                paddingBottom: 48,
                zIndex: 10,
                position: "relative"
            }}
        >
            <Container>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <h2
                            className="text-primary"
                            style={{
                                fontWeight: 700,
                                marginBottom: 24,
                                letterSpacing: 2,
                                textTransform: "uppercase",
                                fontSize: 32
                            }}
                        >
                            {trainer.name}'s Schedule
                        </h2>
                        <div>
                            <FullCalendar
                                plugins={[timegridPlugin]}
                                initialView="timeGridWeek"
                                headerToolbar={{
                                    left: "prev,next", center: "title", right: "today"
                                }}
                                events={[{
                                    title: 'Yoga Class', start: '2025-06-06T10:00:00', end: '2025-06-06T11:00:00'
                                }, {
                                    title: 'Strength Training', start: '2025-06-07T12:00:00', end: '2025-06-07T13:00:00'
                                }, {
                                    title: 'Cardio Session', start: '2025-06-08T14:00:00', end: '2025-06-08T15:00:00'
                                }, {
                                    title: 'Nutrition Workshop',
                                    start: '2025-06-09T16:00:00',
                                    end: '2025-06-09T17:30:00'
                                }]}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>);
}

export default TrainerPage;