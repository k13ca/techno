import { useContext } from "react";
import EventItem from "../components/event";
import { EventsContext } from "../contexts/EventsContext";
function Events() {
  const { events, pastEvents } = useContext(EventsContext);

  return (
    <>
      <div className="events-list">
        {pastEvents.slice(-3).map((event) => (
          <EventItem
            crossLineClass={"cross-line"}
            expired={"expired"}
            key={event.id}
            title={event.eventname}
            date={event.date}
            artists={event.artists}
            borderStyle={{ border: "3px solid rgba(0,0,0, 0.4)" }}
          />
        ))}
        {events.map((event) => (
          <EventItem
            crossLineClass={"hide"}
            key={event.id}
            title={event.eventname}
            date={event.date}
            artists={event.artists}
            expired={""}
            borderStyle={{ border: "3px solid rgb(0,0,0)" }}
          />
        ))}
      </div>
    </>
  );
}

export default Events;
