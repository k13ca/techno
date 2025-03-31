export default function AdminShowReservations({
  eventName,
  date,
  person,
  seatingName,
}) {
  console.log(eventName, date, person, seatingName);

  return (
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
      <button className="pointer active">
        <h4 id="remove-reservation-button">remove reservation</h4>
      </button>
    </div>
  );
}
