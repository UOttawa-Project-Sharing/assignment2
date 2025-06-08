import React, { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import BookingInfoForm from "../components/BookingInfoForm";
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const allEvents = [
    // Programs events
    { id: "fop", type: "programs", subType: "Fitness Classes", subSubType: "Open Fit", title: "Open Fit", start: "2025-06-07T14:00:00", end: "2025-06-07T15:00:00", color: "#2E3B9A" },
    { id: "fy", type: "programs", subType: "Fitness Classes", subSubType: "Yoga", title: "Yoga", start: "2025-06-06T16:00:00", end: "2025-06-06T17:00:00", color: "#4CA745" },
    // Trainer events
    { id: "gg", type: "personal trainer", subType: "George Lechapé", title: "PT: George Lechapé", start: "2025-06-07T10:00:00", end: "2025-06-07T11:00:00", color: "#4c9be8" },
    { id: "juju", type: "personal trainer", subType: "Julie Duffy", title: "PT: Julie Duffy", start: "2025-06-05T13:00:00", end: "2025-06-05T14:00:00", color: "#6610f2" },
];

export default function BookingPage() {
    const navigate = useNavigate();
    const location = useLocation();

    // Pre-fill state from navigation if present
    const prefill = location.state?.prefill || {};
    const [booking, setBooking] = useState({
        type: prefill.type || "",
        subType: prefill.subType || "",
        subSubType: prefill.subSubType || "",
        eventId: prefill.eventId || "",
        email: "",
        memberId: "",
    });

    // If prefill changes (user navigates to this page with new state), update booking state
    useEffect(() => {
        if (prefill && (prefill.type || prefill.subType || prefill.subSubType || prefill.eventId)) {
            setBooking(prev => ({
                ...prev,
                type: prefill.type || "",
                subType: prefill.subType || "",
                subSubType: prefill.subSubType || "",
                eventId: prefill.eventId || "",
            }));
        }
    }, [prefill.type, prefill.subType, prefill.subSubType, prefill.eventId]);

    const [memberTab, setMemberTab] = useState("not-member");
    const [alert, setAlert] = useState(null);
    const alertTimeout = useRef(null);

    // Filter events based on booking selection
    const filteredEvents = useMemo(() => {
        if (booking.type === "membership") return [];
        return allEvents.filter(event => {
            if (!booking.type) return true; // Show all if nothing is selected
            if (event.type !== booking.type) return false;
            if (booking.subType && event.subType !== booking.subType) return false;
            if (booking.type === "programs" && booking.subSubType && event.subSubType !== booking.subSubType) return false;
            return true;
        });
    }, [booking]);

    // For fast lookup of event info by id
    const eventsById = useMemo(() => {
        const obj = {};
        allEvents.forEach(ev => { obj[ev.id] = ev; });
        return obj;
    }, []);

    // When an event is clicked, update the booking form with the event's info (if future)
    const handleEventClick = useCallback((clickInfo) => {
        const event = eventsById[clickInfo.event.id];
        if (!event) return;
        const now = new Date();
        const eventEnd = new Date(event.end || event.start);
        if (eventEnd < now) {
            setAlert("This event has already happened. You can't select it.");
            if (alertTimeout.current) clearTimeout(alertTimeout.current);
            alertTimeout.current = setTimeout(() => setAlert(null), 5000);
            return;
        }
        setBooking(prev => ({
            ...prev,
            type: event.type,
            subType: event.subType,
            subSubType: event.type === "programs" ? event.subSubType || "" : "",
            eventId: event.id
        }));
    }, [eventsById]);

    const handleAlertClose = () => {
        setAlert(null);
        if (alertTimeout.current) clearTimeout(alertTimeout.current);
    };

    const handleTabSelect = (tab) => {
        setMemberTab(tab);
        setBooking(prev => ({
            ...prev,
            email: "",
            memberId: ""
        }));
    };

    // Handle form submit: redirect to /payment with all required info in location state
    const handleBookingSubmit = (formValue) => {
        // Memberships don't have an event
        let selectedEvent = null;
        if (formValue.type !== "membership" && formValue.eventId) {
            selectedEvent = allEvents.find(ev => ev.id === formValue.eventId);
        }
        navigate("/payment", {
            state: {
                booking: formValue,
                memberTab,
                selectedEvent,
            }
        });
    };

    return (
        <div className="min-vh-100" style={{ backgroundColor: "var(--bs-body-bg)", color: "var(--bs-body-color)" }}>
            <Container fluid className="py-4 px-4">
                <Row>
                    <Col xs={12}>
                        <h1 className="display-4 fw-normal mb-0">Booking</h1>
                        <p className="lead mb-4" style={{maxWidth: 640, color: "var(--bs-gray-400)"}}>
                            How does it works :
                            <br />
                            <span className="fw-light" style={{fontSize: 17}}>
                                If you are not a member, we'll send you a QR code that you need to scan when you get to the gym before your courses. Otherwise, use your membership number.
                            </span>
                        </p>
                        {alert && (
                            <Alert variant="warning" className="mt-3" dismissible onClose={handleAlertClose}>
                                {alert}
                            </Alert>
                        )}
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-start" style={{gap: '40px'}}>
                    <Col xs={12} md={5} lg={4} className="mb-4 mb-md-0">
                        <Tab.Container activeKey={memberTab} onSelect={handleTabSelect}>
                            <Nav variant="tabs" className="justify-content-center border-bottom border-2 flex-nowrap" style={{ borderColor: "var(--bs-secondary)", width: 350, margin: "0 auto" }}>
                                <Nav.Item className="flex-fill">
                                    <Nav.Link
                                        eventKey="not-member"
                                        className={`w-100 text-center ${memberTab === "not-member" ? "fw-bold border-bottom border-3 text-white bg-transparent" : "text-primary bg-transparent"}`}
                                        style={{
                                            fontSize: 20,
                                            border: "none",
                                            borderBottom: memberTab === "not-member" ? "3px solid var(--bs-white)" : "none"
                                        }}
                                    >
                                        Not a Member
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="flex-fill">
                                    <Nav.Link
                                        eventKey="member"
                                        className={`w-100 text-center ${memberTab === "member" ? "fw-bold border-bottom border-3 text-white bg-transparent" : "text-primary bg-transparent"}`}
                                        style={{
                                            fontSize: 20,
                                            border: "none",
                                            borderBottom: memberTab === "member" ? "3px solid var(--bs-white)" : "none"
                                        }}
                                    >
                                        Already a Member
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="not-member">
                                    <Card className="rounded-4 shadow-sm bg-light text-dark border-0">
                                        <Card.Body>
                                            <BookingInfoForm
                                                onSubmit={handleBookingSubmit}
                                                onChange={setBooking}
                                                value={booking}
                                                availableEvents={filteredEvents}
                                                memberTab="not-member"
                                            />
                                        </Card.Body>
                                    </Card>
                                </Tab.Pane>
                                <Tab.Pane eventKey="member">
                                    <Card className="rounded-4 shadow-sm bg-light text-dark border-0">
                                        <Card.Body>
                                            <BookingInfoForm
                                                onSubmit={handleBookingSubmit}
                                                onChange={setBooking}
                                                value={booking}
                                                availableEvents={filteredEvents}
                                                memberTab="member"
                                            />
                                        </Card.Body>
                                    </Card>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                    {booking.type !== "membership" && (
                        <Col xs={12} md={7} lg={7}>
                            <Card className="rounded-4 shadow-sm bg-light text-dark border-0">
                                <Card.Body>
                                    <FullCalendar
                                        plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
                                        initialView="timeGridWeek"
                                        headerToolbar={{
                                            left: 'prev,next today',
                                            center: 'title',
                                            right: 'dayGridMonth,timeGridWeek,timeGridDay'
                                        }}
                                        height={440}
                                        events={filteredEvents}
                                        slotMinTime="10:00:00"
                                        slotMaxTime="19:00:00"
                                        allDaySlot={false}
                                        dayHeaderFormat={{ weekday: 'short', month: 'numeric', day: 'numeric' }}
                                        eventContent={renderEventContent}
                                        className="w-100"
                                        themeSystem="bootstrap"
                                        eventClick={handleEventClick}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
}

// Renders multi-line event titles and color support
function renderEventContent(eventInfo) {
    const now = new Date();
    const eventEnd = new Date(eventInfo.event.end || eventInfo.event.start);
    const isPast = eventEnd < now;

    return (
        <div
            className={`px-2 py-1 rounded ${isPast ? "opacity-50" : ""}`}
            style={{
                background: eventInfo.event.backgroundColor || eventInfo.event.color || "var(--bs-primary)",
                color: "var(--bs-white)",
                fontSize: 15,
                whiteSpace: "pre-line",
                borderRadius: 6,
                fontWeight: 500,
                pointerEvents: isPast ? "none" : "auto",
                filter: isPast ? "grayscale(1)" : undefined,
                cursor: isPast ? "not-allowed" : "pointer"
            }}
        >
            {eventInfo.event.title.split('\n').map((line, i) => <div key={i}>{line}</div>)}
        </div>
    );
}