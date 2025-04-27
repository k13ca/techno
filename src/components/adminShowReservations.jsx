import { useContext, useRef, useState } from "react";
import { EventsContext } from "../contexts/EventsContext";
import { API_HOST } from "../consts/const";

export default function AdminShowReservations({
  eventName,
  date,
  person,
  seatingName,
  reservationId,
  pin,
}) {
  const { fetchReservations } = useContext(EventsContext);
  const [showReservationModal, setShowReservationModal] = useState(false);
  const inputPinRef = useRef(null);

  function confirmRemoveEvent(pin, input) {
    if (pin === input) {
      fetch(`${API_HOST}/delete-reservation`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reservationId }),
      }).then((res) => {
        if (res.ok) {
          fetchReservations();
        }
      });
    }
  }
  return (
    <>
      {showReservationModal && (
        <div className="confirmation-background">
          <div className="confirmation-modal outline">
            <h2 style={{ textWrap: "wrap", width: "80%", textAlign: "center" }}>
              Enter pin to cancel this reservation
            </h2>

            <input
              className="user-input"
              placeholder="pin"
              type="number"
              max="9999"
              min="1000"
              required
              ref={inputPinRef}
            ></input>

            <div className="merge">
              <button
                className="outline pointer"
                onClick={() => {
                  setShowReservationModal(false);
                  confirmRemoveEvent(pin, inputPinRef.current.value);
                }}
              >
                <h3>confirm</h3>
              </button>
              <button
                className="outline pointer"
                onClick={() => setShowReservationModal(false)}
              >
                <h3>exit</h3>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="admin-event-block pointer">
        <div className="admin-event-block-visible admin-reservations">
          <h2>{person}</h2>
          <div>
            <h3 style={{ lineHeight: "normal" }}>{eventName}</h3>
            <h3>{date}</h3>
            <h3>
              <u>{seatingName}</u>
            </h3>
          </div>
        </div>
        <button
          className="pointer active"
          onClick={() => {
            setShowReservationModal(true);
            console.log(reservationId);
          }}
        >
          <h4 id="remove-reservation-button">remove reservation</h4>
        </button>
      </div>
    </>
  );
}
