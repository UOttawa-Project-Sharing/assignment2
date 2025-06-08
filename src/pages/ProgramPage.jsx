import React from "react";
import {useParams} from "react-router";
import {Carousel, Card, Row, Col, Container} from "react-bootstrap";

import { getProgramById } from "../utils/data.js";

// Inline CSS styles for the component
const styles = {
    programBg: (backgroundImage) => ({
        position: "relative",
        minHeight: "100vh",
        background: `linear-gradient(to bottom, rgba(30,44,57,0.7) 0%, rgba(10,24,40,1) 100%), url(${backgroundImage}) center/cover no-repeat`,
        display: "flex",
        flexDirection: "column",
    }), fadeOverlay: {
        pointerEvents: "none",
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(30,44,57,0.7) 0%, rgba(10,24,40,1) 100%)",
        zIndex: 1,
    }, carousel: {
        zIndex: 2, position: "relative",
    }, cardHover: {
        height: "100%", transition: "transform 0.15s",
    }, cardHoverActive: {
        transform: "translateY(-6px) scale(1.02)",
    }, subCard: {
        background: "var(--bs-light)",
        borderRadius: 10,
        overflow: "hidden",
        position: "relative",
        transition: "box-shadow 0.2s",
        boxShadow: "0 2px 16px rgba(40,60,80,0.10)",
        minHeight: 360,
        height: "100%",
        display: "flex",
        flexDirection: "column",
    }, imageWrapper: {
        position: "relative", width: "100%", height: 200, overflow: "hidden",
    }, cardImg: {
        width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.3s",
    }, cardDesc: {
        opacity: 0,
        pointerEvents: "none",
        maxHeight: 0,
        transition: "opacity 0.3s, max-height 0.3s",
        fontSize: "1rem",
        color: "var(--bs-secondary)",
        marginTop: "0.5rem",
        textAlign: "center",
    }, cardDescActive: {
        opacity: 1, pointerEvents: "auto", maxHeight: 200,
    },
};

function chunkArray(array, size) {
    const chunked = [];
    for (let i = 0; i < array.length; i += size) {
        chunked.push(array.slice(i, i + size));
    }
    return chunked;
}

function ProgramPage() {
    const {programName} = useParams();
    const program = getProgramById(programName);
    const [hoveredIndex, setHoveredIndex] = React.useState(null);

    if (!program) {
        return (<Container className="py-5 text-white">
            <h2>Program Not Found</h2>
            <p>The program you are looking for does not exist.</p>
        </Container>);
    }

    // 4 cards per carousel slide
    const slides = chunkArray(program.subprograms, 4);

    return (<div style={styles.programBg(program.backgroundImage)}>
        <Container className="pt-5 position-relative" style={{zIndex: 2}}>
            <h1 className="display-4 text-white">{program.name}</h1>
            <p className="lead text-white mb-5" style={{maxWidth: 800}}>
                {program.description}
            </p>
            <Carousel
                indicators={false}
                controls={program.subprograms.length > 4}
                style={styles.carousel}
                interval={null}
                className={"mb-5"}
            >
                {slides.map((slide, idx) => (<Carousel.Item key={idx}>
                    <Row className="justify-content-center g-4">
                        {slide.map((sub, i) => (<Col key={i} lg={3} md={6} sm={12}>
                            <div
                                style={{
                                    ...styles.cardHover, ...(hoveredIndex === `${idx}-${i}` ? styles.cardHoverActive : {}),
                                }}
                                tabIndex={0}
                                onMouseEnter={() => setHoveredIndex(`${idx}-${i}`)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onFocus={() => setHoveredIndex(`${idx}-${i}`)}
                                onBlur={() => setHoveredIndex(null)}
                            >
                                <Card style={styles.subCard}
                                      className="h-100 border-0 program-sub-card overflow-hidden">
                                    <div style={styles.imageWrapper}>
                                        <Card.Img
                                            variant="top"
                                            src={sub.image}
                                            alt={sub.name}
                                            style={styles.cardImg}
                                        />
                                    </div>
                                    <Card.Body
                                        className="d-flex flex-column justify-content-center align-items-center">
                                        <Card.Title
                                            className="mb-2 text-primary fs-4">{sub.name}</Card.Title>
                                        <div
                                            style={{
                                                ...styles.cardDesc, ...(hoveredIndex === `${idx}-${i}` ? styles.cardDescActive : {}),
                                            }}
                                        >
                                            {sub.description}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>))}
                    </Row>
                </Carousel.Item>))}
            </Carousel>
        </Container>
        <div style={styles.fadeOverlay}></div>
    </div>);
}

export default ProgramPage;