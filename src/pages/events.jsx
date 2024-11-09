// import line from "../assets/expired-line.png";

export function EventItem() {
  return (
    <>
      <div className="event-item">
        <h2> TYTUL EBEEKRK HDWIDHCECNK</h2>
        <h2>03.04.2024 </h2>
        <div className="event">
          <h3>
            15.06 / SOME RANDOM / LINEUP / DJS / ARTISTS / GOOD MUSIC / TECHNO /
            SOMEONE YOU WANT TO HEAR /
          </h3>
        </div>
      </div>
    </>
  );
}

function Events() {
  return (
    <>
      <div className="events-list">
        <div className="event-item">
          <h2 className="expired"> TYTUL EBEEKRK HDWIDHCECNK</h2>
          <h2 className="expired">03.04.2024 </h2>
          <div className="event">
            <h3 className="expired">
              15.06 / SOME RANDOM / LINEUP / DJS / ARTISTS / GOOD MUSIC / TECHNO
              / SOMEONE YOU WANT TO HEAR / WERGTHYD / WERTYHJHGFDEDFG / DFGER
              FEFERG
            </h3>
          </div>
        </div>
        <EventItem className="event-item-expired" /> <EventItem /> <EventItem />{" "}
        <EventItem /> <EventItem /> <EventItem /> <EventItem /> <EventItem />{" "}
        <EventItem /> <EventItem /> <EventItem /> <EventItem /> <EventItem />{" "}
        <EventItem />
      </div>
    </>
  );
}

export default Events;
