import React from 'react';

// Choose a Bootstrap icon and color based on status, *using Bootstrap color variables*
function getStatusIcon(status) {
    if (status === "full" || status === "booked") {
        return (
            <i
                className="bi bi-x-circle-fill"
                // style={{ color: "var(--bs-danger)", fontSize: 18 }}
                aria-label="Full"
                title="Full"
            />
        );
    }
    // Default icon for other statuses (e.g., available)
    return (
        <i
            className="bi bi-check-circle-fill"
            // style={{ color: "var(--bs-success)", fontSize: 18 }}
            aria-label={status}
            title={status}
        />
    );
}

function EventItem({ info }) {
    const now = new Date();
    const eventEnd = new Date(info.event.end || info.event.start);
    const isPast = eventEnd < now;
    const isFull = info.event.extendedProps?.status === "full" || info.event.extendedProps?.status === "booked";
    const { event, timeText } = info;
    const { status } = event.extendedProps || {};

    return (
        <div
            className={`event-item px-2 py-1 rounded ${isPast || isFull ? "opacity-50" : ""}`}
            style={{
                background: info.event.backgroundColor || info.event.color || "var(--bs-primary)",
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
            <div className="event-title">{event.title}</div>
            <div className="event-time">{timeText}</div>
            <div className="event-status d-flex align-items-center gap-2">
                {getStatusIcon(status)}
                <span>{status}</span>
            </div>
        </div>
    );
}

export default EventItem;