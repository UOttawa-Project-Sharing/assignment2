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

import {getAllEventCourseAndTrainerAvailability} from "../utils/data.js";
import EventItem from "../components/EventItem.jsx";

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
        return getAllEventCourseAndTrainerAvailability().filter(event => {
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
        getAllEventCourseAndTrainerAvailability().forEach(ev => { obj[ev.id] = ev; });
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
            selectedEvent = getAllEventCourseAndTrainerAvailability().find(ev => ev.id === formValue.eventId);
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
                                        height={600}
                                        events={filteredEvents}
                                        slotMinTime="08:00:00"
                                        slotMaxTime="20:00:00"
                                        slotDuration={"00:15:00"}
                                        allDaySlot={false}
                                        dayHeaderFormat={{ weekday: 'short', month: 'numeric', day: 'numeric' }}
                                        eventContent={(info) => <EventItem info={info}/>}
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