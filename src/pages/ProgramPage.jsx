import React from "react";
import {useParams} from "react-router";
import {Carousel, Card, Row, Col, Container} from "react-bootstrap";

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

const programs = {
    "crossfit": {
        name: "Cross Fit",
        description: "High-intensity fitness program combining weightlifting, gymnastics, and cardio through varied daily workouts. Scalable group classes with certified coaching focus on functional movements and measurable results. Build strength, endurance, and overall fitness in a supportive community environment.",
        backgroundImage: "https://picsum.photos/1200/800?random=21",
        subprograms: [{
            name: "Open Gym",
            image: "https://picsum.photos/400/220?random=31",
            description: "Access our facility with flexibility. Train independently with world-class equipment and space.",
        }, {
            name: "Circuit Fit",
            image: "https://picsum.photos/400/220?random=32",
            description: "High-energy circuit training to improve strength, endurance, and fitness in a supportive group.",
        }, {
            name: "Power Fit",
            image: "https://picsum.photos/400/220?random=33",
            description: "Lift heavy and get stronger. Focused sessions on Olympic lifts and power moves.",
        }, {
            name: "Total Fit",
            image: "https://picsum.photos/400/220?random=34",
            description: "A full-body workout blending strength, cardio, and flexibility for total conditioning.",
        }],
    }, "yoga": {
        name: "Yoga",
        description: "Mind-body practice combining physical postures, breathing techniques, and meditation. Improve flexibility, strength, and mental well-being through ancient traditions adapted for modern life. Classes for all levels in a peaceful, supportive environment.",
        backgroundImage: "https://picsum.photos/1200/800?random=22",
        subprograms: [{
            name: "Hatha Yoga",
            image: "https://picsum.photos/400/220?random=35",
            description: "Gentle, slow-paced yoga focusing on basic postures and breathing. Perfect for beginners.",
        }, {
            name: "Vinyasa Flow",
            image: "https://picsum.photos/400/220?random=36",
            description: "Dynamic sequences linking movement with breath. Build strength and flexibility through flowing transitions.",
        }, {
            name: "Yin Yoga",
            image: "https://picsum.photos/400/220?random=37",
            description: "Passive, meditative practice with long-held poses. Deep stretching and relaxation for stress relief.",
        }, {
            name: "Power Yoga",
            image: "https://picsum.photos/400/220?random=38",
            description: "Athletic, vigorous style building heat and strength. Fast-paced flow for fitness-focused practitioners.",
        }],
    }, "spinning": {
        name: "Spinning",
        description: "High-energy indoor cycling classes with motivating music and expert instruction. Burn calories, build cardiovascular endurance, and strengthen legs in a fun group setting. All fitness levels welcome with adjustable resistance.",
        backgroundImage: "https://picsum.photos/1200/800?random=23",
        subprograms: [{
            name: "Spin Basics",
            image: "https://picsum.photos/400/220?random=39",
            description: "Introduction to indoor cycling with proper form and technique. Build confidence and endurance.",
        }, {
            name: "HIIT Spin",
            image: "https://picsum.photos/400/220?random=40",
            description: "High-intensity interval training on bikes. Maximize calorie burn with challenging sprint intervals.",
        }, {
            name: "Endurance Ride",
            image: "https://picsum.photos/400/220?random=41",
            description: "Longer, steady-state rides building cardiovascular fitness and mental toughness.",
        }, {
            name: "Rhythm Ride",
            image: "https://picsum.photos/400/220?random=42",
            description: "Music-driven cycling experience combining choreography with cardio. Dance on the bike!",
        }],
    }, "pilates": {
        name: "Pilates",
        description: "Low-impact exercise method focusing on core strength, flexibility, and body awareness. Precise movements and controlled breathing improve posture, balance, and muscle tone. Equipment-based and mat classes available for all abilities.",
        backgroundImage: "https://picsum.photos/1200/800?random=24",
        subprograms: [{
            name: "Mat Pilates",
            image: "https://picsum.photos/400/220?random=43",
            description: "Classic floor-based Pilates using body weight. Focus on core strength and stability.",
        }, {
            name: "Reformer Pilates",
            image: "https://picsum.photos/400/220?random=44",
            description: "Equipment-based training using springs and pulleys. Enhanced resistance and support for precise movements.",
        }, {
            name: "Pilates Fusion",
            image: "https://picsum.photos/400/220?random=45",
            description: "Creative blend of Pilates with yoga and barre elements. Dynamic full-body conditioning.",
        }, {
            name: "Clinical Pilates",
            image: "https://picsum.photos/400/220?random=46",
            description: "Therapeutic approach for injury recovery and prevention. Small classes with personalized attention.",
        }],
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
    const program = programs[programName];
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