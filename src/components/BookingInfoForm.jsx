import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import  { MembershipPlans, trainers, ProgramsInfo } from "../utils/data.js";

export default function BookingInfoForm({ onSubmit, onChange, value, availableEvents, memberTab }) {
    useEffect(() => {
        onChange && onChange(value);
    }, [value.type, value.subType, value.subSubType, value.eventId, value.email, value.memberId]);

    const setField = (field, fieldValue) => {
        onChange && onChange({ ...value, [field]: fieldValue });
    };

    // Reset filter when type changes
    const handleTypeChange = (e) => {
        const newType = e.target.value;
        onChange && onChange({
            ...value,
            type: newType,
            subType: "",
            subSubType: "",
            eventId: ""
        });
    };

    // Reset filter when subType changes
    const handleSubTypeChange = (e) => {
        const newSubType = e.target.value;
        onChange && onChange({
            ...value,
            subType: newSubType,
            subSubType: "",
            eventId: ""
        });
    };

    // Reset filter when subSubType changes
    const handleSubSubTypeChange = (e) => {
        const newSubSubType = e.target.value;
        onChange && onChange({
            ...value,
            subSubType: newSubSubType,
            eventId: ""
        });
    };

    // Determine options based on type
    let subTypeOptions = [];
    let subSubTypeOptions = [];
    if (value.type === "membership") {
        subTypeOptions = MembershipPlans.map(plan => plan.title);
    } else if (value.type === "programs") {
        subTypeOptions = ProgramsInfo.map(c => c.name);
        if (value.subType) {
            const found = ProgramsInfo.find(c => c.name === value.subType);
            subSubTypeOptions = found ? found.subprograms.map((p) => p.name) : [];
        }
    } else if (value.type === "personal trainer") {
        subTypeOptions = trainers.map(t => t.name);
    }

    // Only show future events for the selected filters
    const now = new Date();
    const filteredEvents = (availableEvents || []).filter(ev => {
        if (!ev.start) return false;
        if (new Date(ev.start) <= now) return false;
        if (value.type && ev.type !== value.type) return false;
        if (value.subType && ev.subType !== value.subType) return false;
        if (value.type === "programs" && value.subSubType && ev.subSubType !== value.subSubType) return false;
        return true;
    });

    // For membership type, do not require event selection/subSubType, and skip their controls
    const isMembership = value.type === "membership";

    return (
        <Form onSubmit={e => { e.preventDefault(); onSubmit && onSubmit(value); }}>
            {memberTab === "not-member" ? (
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        value={value.email}
                        onChange={e => setField("email", e.target.value)}
                        placeholder="example@email.com"
                        autoComplete="email"
                        required
                    />
                </Form.Group>
            ) : (
                <Form.Group className="mb-3">
                    <Form.Label>Member Id</Form.Label>
                    <Form.Control
                        type="text"
                        value={value.memberId}
                        onChange={e => setField("memberId", e.target.value)}
                        placeholder="1111111111"
                        autoComplete="off"
                        required
                    />
                </Form.Group>
            )}

            <Form.Group className="mb-3">
                <Form.Label>Type</Form.Label>
                <Form.Select
                    value={value.type}
                    onChange={handleTypeChange}
                    required
                >
                    <option value="" disabled>Choose type</option>
                    <option value="membership">Membership</option>
                    <option value="programs">Programs</option>
                    <option value="personal trainer">Personal Trainer</option>
                </Form.Select>
            </Form.Group>

            {value.type && (
                <Form.Group className="mb-3">
                    <Form.Label>
                        {value.type === "membership" && "Membership"}
                        {value.type === "programs" && "Program Category"}
                        {value.type === "personal trainer" && "Trainer"}
                    </Form.Label>
                    <Form.Select
                        value={value.subType}
                        onChange={handleSubTypeChange}
                        required
                    >
                        <option value="" disabled>
                            Choose {value.type === "programs" ? "category" : ""}
                        </option>
                        {subTypeOptions.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
            )}

            {value.type === "programs" && value.subType && (
                <Form.Group className="mb-3">
                    <Form.Label>Sub Program</Form.Label>
                    <Form.Select
                        value={value.subSubType}
                        onChange={handleSubSubTypeChange}
                        required
                    >
                        <option value="" disabled>Choose sub program</option>
                        {subSubTypeOptions.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
            )}

            {!isMembership && (value.type && value.subType && (value.type !== "programs" || value.subSubType)) && (
                <Form.Group className="mb-3">
                    <Form.Label>Select an upcoming event</Form.Label>
                    <Form.Select
                        value={value.eventId || ""}
                        onChange={e => setField("eventId", e.target.value)}
                        required
                        disabled={filteredEvents.length === 0}
                    >
                        <option value="" disabled>
                            {filteredEvents.length === 0 ? "No future event available" : "Choose an event"}
                        </option>
                        {filteredEvents.map(ev => (
                            <option key={ev.id} value={ev.id}>
                                {ev.title} — {new Date(ev.start).toLocaleString()}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            )}

            <div className="d-grid">
                <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={
                        !value.type ||
                        !value.subType ||
                        (value.type === "programs" && !value.subSubType) ||
                        (!isMembership && !value.eventId) ||
                        (memberTab === "not-member" ? !value.email : !value.memberId)
                    }
                >
                    Next Step &rarr;
                </Button>
            </div>
        </Form>
    );
}