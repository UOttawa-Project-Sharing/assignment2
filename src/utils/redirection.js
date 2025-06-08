import { useNavigate } from "react-router";

export function useRedirectToBooking() {
    const navigate = useNavigate();
    return ({
                type = "",
                subType = "",
                subSubType = "",
                eventId = ""
            }) => {
        navigate("/booking", {
            state: {
                prefill: {
                    type,
                    subType,
                    subSubType,
                    eventId
                }
            }
        });
    };
}