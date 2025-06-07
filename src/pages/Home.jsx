import React from "react";
import {Carousel, Container} from "react-bootstrap";
import About from "../components/About.jsx";

const carouselItems = [{
    image: "https://picsum.photos/1200/800?random=101",
    title: "Discover Our Cross Fit Programs",
    quote: "Strength does not come from the body. It comes from the will.",
}, {
    image: "https://picsum.photos/1200/800?random=102",
    title: "Experience Our Yoga Classes",
    quote: "The body benefits from movement, and the mind benefits from stillness.",
}, {
    image: "https://picsum.photos/1200/800?random=103",
    title: "Join Our Spinning Sessions",
    quote: "Don’t limit your challenges. Challenge your limits.",
}, {
    image: "https://picsum.photos/1200/800?random=104",
    title: "Make Progress with Pilates",
    quote: "Change happens through movement and movement heals.",
}, {
    image: "https://picsum.photos/1200/800?random=105",
    title: "Meet Our Team",
    quote: "Alone we can do so little; together we can do so much.",
},];

const gymName = "GymJim";

function HomePage() {
    return (<>
        <Container fluid className="px-0">
            <div
                className="bg-light"
                style={{
                    height: "75vh",
                    minHeight: 300,
                    maxHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <Carousel indicators={false} interval={6000} className="mb-0 h-100">
                    {carouselItems.map((item, idx) => (<Carousel.Item key={idx} className="h-100">
                        <div
                            className="position-relative w-100 h-100 d-flex align-items-center justify-content-center overflow-hidden bg-light"
                            style={{
                                height: "75vh", minHeight: 300, maxHeight: "100vh",
                            }}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                style={{
                                    objectFit: "cover", opacity: 0.75, width: "100vw", height: "75vh",
                                }}
                            />
                            <div
                                className="position-absolute"
                                style={{
                                    left: 40,
                                    top: 70,
                                    background: "var(--bs-secondary-bg)",
                                    padding: "1.5rem 2rem",
                                    minWidth: 340,
                                    color: "var(--bs-dark)",
                                    fontSize: 32,
                                    fontWeight: 400,
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                                    zIndex: 2,
                                }}
                            >
                                <div
                                    className="fw-bold mb-2 text-primary"
                                    style={{
                                        fontSize: 34, letterSpacing: 1,
                                    }}
                                >
                                    {gymName}
                                </div>
                                <div>{item.title}</div>
                                <div className="mt-4 fst-italic text-body-emphasis" style={{fontSize: 19}}>
                                    "{item.quote}"
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>))}
                </Carousel>
            </div>
        </Container>
        <About/>
    </>);
}

export default HomePage;