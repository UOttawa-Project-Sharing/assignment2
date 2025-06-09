import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import { isValidEmail, isLikelyLocation, isValidCardNumber, isValidExpiry, isValidCVC } from "../utils/validators.js";
import {getPriceFromName} from "../utils/data.js";

export default function PaymentPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const booking = location.state?.booking;
    const selectedEvent = location.state?.selectedEvent;

    useEffect(() => {
        if (!booking) {
            navigate("/booking", { replace: true });
        }
    }, [booking, navigate]);

    const [billing, setBilling] = useState({
        name: "",
        email: booking?.email || "",
        address: booking?.address || ""
    });

    const [tab, setTab] = useState("now");
    const [showArrivalModal, setShowArrivalModal] = useState(false);
    const [showCardModal, setShowCardModal] = useState(false);

    // Card info state
    const [card, setCard] = useState({
        number: "",
        expiry: "",
        cvc: "",
        holder: ""
    });
    const [cardTouched, setCardTouched] = useState({
        number: false,
        expiry: false,
        cvc: false,
        holder: false,
    });

    const invoice = {
        name: billing.name || "Jean Michel Du Luc",
        email: billing.email || "example@example.com",
        address: billing.address || "123 rue de la pomme de terre, Gatineau QC, Canada j8j0c7",
        items: [
            {
                label: selectedEvent
                    ? `1x ${selectedEvent.title || "Open Fit"}`
                    : booking?.type === "membership"
                        ? `1x ${booking.subType || "Membership"}`
                        : "1x Booking",
                amount: (booking?.type === "programs") ? getPriceFromName(booking?.subSubType) : getPriceFromName(booking?.subType),
            }
        ],
        total: (booking?.type === "programs") ? getPriceFromName(booking?.subSubType) : getPriceFromName(booking?.subType)
    };

    const isBillingFull =
        billing.name.trim() !== "" &&
        isValidEmail(billing.email) &&
        isLikelyLocation(billing.address);

    const [touched, setTouched] = useState({
        name: false,
        email: false,
        address: false
    });

    const isCardFull =
        isValidCardNumber(card.number) &&
        isValidExpiry(card.expiry) &&
        isValidCVC(card.cvc) &&
        card.holder.trim() !== "";

    const handleInvoiceClick = (e) => {
        e.preventDefault();
        if (tab === "arrival") {
            setShowArrivalModal(true);
        } else if (tab === "now") {
            setShowCardModal(true);
        }
    };

    const handleArrivalModalConfirm = () => {
        setShowArrivalModal(false);
        navigate("/", { replace: true });
    };

    const handleCardPayment = () => {
        setShowCardModal(false);
        alert("Payment successful! Thank you for your booking.");
        navigate("/", { replace: true });
    };

    if (!booking) return null;

    return (
        <div className="min-vh-100" style={{ backgroundColor: "var(--bs-body-bg)", color: "var(--bs-body-color)" }}>
            <Container fluid className="py-5">
                <Row className="justify-content-center">
                    <Col xs={12} className="text-center">
                        <h1 className="fw-normal mb-0" style={{ fontSize: 42, letterSpacing: 1 }}>Payment</h1>
                        <div className="d-flex justify-content-center mt-2 mb-3">
                            <Tab.Container activeKey={tab} onSelect={setTab}>
                                <Nav variant="tabs" className="w-100 justify-content-center border-bottom border-2" style={{ borderColor: "var(--bs-secondary)", maxWidth: 350 }}>
                                    <Nav.Item className="flex-fill">
                                        <Nav.Link
                                            eventKey="now"
                                            className={`w-100 text-center ${tab === "now" ? "fw-bold border-bottom border-3 text-white bg-transparent" : "text-primary bg-transparent"}`}
                                            style={{
                                                fontSize: 20,
                                                border: "none",
                                                borderBottom: tab === "now" ? "3px solid var(--bs-white)" : "none"
                                            }}
                                        >
                                            Pay Now
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="flex-fill">
                                        <Nav.Link
                                            eventKey="arrival"
                                            className={`w-100 text-center ${tab === "arrival" ? "fw-bold border-bottom border-3 text-white bg-transparent" : "text-primary bg-transparent"}`}
                                            style={{
                                                fontSize: 20,
                                                border: "none",
                                                borderBottom: tab === "arrival" ? "3px solid var(--bs-white)" : "none"
                                            }}
                                        >
                                            Pay On Arrival
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Tab.Container>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-start">
                    <Col xs={12} md={7} lg={6} className="mb-4">
                        <Card className="rounded-4 shadow-sm bg-light text-dark border-0">
                            <Card.Body>
                                <div className="mb-3 fw-bold text-dark" style={{ fontSize: 18 }}>Billing Info</div>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="ex : Jean Michel Du Luc"
                                            value={billing.name}
                                            onChange={e => setBilling({ ...billing, name: e.target.value })}
                                            onBlur={() => setTouched(t => ({ ...t, name: true }))}
                                            isInvalid={touched.name && billing.name.trim() === ""}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Name is required.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="example@example.com"
                                            value={billing.email}
                                            onChange={e => setBilling({ ...billing, email: e.target.value })}
                                            onBlur={() => setTouched(t => ({ ...t, email: true }))}
                                            isInvalid={touched.email && !isValidEmail(billing.email)}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a valid email.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="mb-2">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="123 rue de la pomme de terre, Gatineau QC, Canada j8j0c7"
                                            value={billing.address}
                                            onChange={e => setBilling({ ...billing, address: e.target.value })}
                                            onBlur={() => setTouched(t => ({ ...t, address: true }))}
                                            isInvalid={touched.address && !isLikelyLocation(billing.address)}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a valid location.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={5} lg={4} className="d-flex mb-4">
                        <div className="w-100">
                            <Card className="rounded-4 shadow-sm border-secondary" style={{ backgroundColor: "var(--bs-secondary)", minWidth: 300 }}>
                                <Card.Body>
                                    <div className="fw-bold fs-5 mb-3 text-white">Invoice</div>
                                    <div className="mb-2 text-white">{invoice.name}</div>
                                    <div className="mb-2 text-white">{invoice.email}</div>
                                    <div className="mb-3" style={{ fontSize: 15, color: "var(--bs-gray-400)" }}>{invoice.address}</div>
                                    <div className="mb-2 d-flex justify-content-between align-items-center fw-semibold text-white">
                                        <span>{invoice.items[0].label}</span>
                                        <span>{invoice.items[0].amount}$</span>
                                    </div>
                                    <hr className="my-2" style={{ borderColor: "var(--bs-gray-400)" }} />
                                    <div className="mb-4 d-flex justify-content-between align-items-center fs-5 fw-bold text-white">
                                        <span>Total Amount</span>
                                        <span>{invoice.total}$</span>
                                    </div>
                                    <Button
                                        variant="primary"
                                        className="w-100"
                                        size="lg"
                                        disabled={!isBillingFull}
                                        onClick={handleInvoiceClick}
                                        style={{ backgroundColor: "var(--bs-primary)", borderColor: "var(--bs-primary)" }}
                                    >
                                        {tab === "now" ? "Pay Now" : "Pay On Arrival"}
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Modal
                show={showArrivalModal}
                onHide={() => setShowArrivalModal(false)}
                centered
                backdrop="static"
                contentClassName="bg-secondary text-white"
            >
                <Modal.Header closeButton className="border-0">
                    <Modal.Title>Confirm Your Email</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Please confirm that <b>{billing.email}</b> is your correct email address.
                    </p>
                    <p>
                        We will send you a QR code to this address. You'll need to scan it and pay at the front desk next time you visit the gym.
                    </p>
                </Modal.Body>
                <Modal.Footer className="border-0">
                    <Button variant="secondary" onClick={() => setShowArrivalModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleArrivalModalConfirm}>
                        Confirm &amp; Send QR
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal
                show={showCardModal}
                onHide={() => setShowCardModal(false)}
                centered
                backdrop="static"
                contentClassName="bg-secondary text-white"
            >
                <Modal.Header closeButton className="border-0">
                    <Modal.Title>Credit Card Payment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Card Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="1234 5678 9012 3456"
                                maxLength={19}
                                value={card.number}
                                onChange={e => setCard({ ...card, number: e.target.value })}
                                onBlur={() => setCardTouched(t => ({ ...t, number: true }))}
                                isInvalid={cardTouched.number && !isValidCardNumber(card.number)}
                                autoComplete="cc-number"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid card number.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex gap-2">
                            <div className="flex-fill">
                                <Form.Label>Expiry</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="MM/YY"
                                    maxLength={5}
                                    value={card.expiry}
                                    onChange={e => setCard({ ...card, expiry: e.target.value })}
                                    onBlur={() => setCardTouched(t => ({ ...t, expiry: true }))}
                                    isInvalid={cardTouched.expiry && !isValidExpiry(card.expiry)}
                                    autoComplete="cc-exp"
                                />
                                <Form.Control.Feedback type="invalid">
                                    MM/YY
                                </Form.Control.Feedback>
                            </div>
                            <div className="flex-fill">
                                <Form.Label>CVC</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="CVC"
                                    maxLength={4}
                                    value={card.cvc}
                                    onChange={e => setCard({ ...card, cvc: e.target.value })}
                                    onBlur={() => setCardTouched(t => ({ ...t, cvc: true }))}
                                    isInvalid={cardTouched.cvc && !isValidCVC(card.cvc)}
                                    autoComplete="cc-csc"
                                />
                                <Form.Control.Feedback type="invalid">
                                    3 or 4 digits
                                </Form.Control.Feedback>
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <Form.Label>Cardholder Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="As shown on card"
                                value={card.holder}
                                onChange={e => setCard({ ...card, holder: e.target.value })}
                                onBlur={() => setCardTouched(t => ({ ...t, holder: true }))}
                                isInvalid={cardTouched.holder && card.holder.trim() === ""}
                                autoComplete="cc-name"
                            />
                            <Form.Control.Feedback type="invalid">
                                Cardholder name is required.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="border-0">
                    <Button variant="secondary" onClick={() => setShowCardModal(false)}>
                        Cancel
                    </Button>
                    <Button
                        variant="primary"
                        onClick={handleCardPayment}
                        disabled={!isCardFull}
                    >
                        Pay {invoice.total}$
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}