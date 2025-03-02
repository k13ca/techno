import { useContext } from "react";
import EventItem from "../components/event";
import { EventsContext } from "../contexts/EventsContext";

function Events() {
  const { events, pastEvents } = useContext(EventsContext);
  console.log("ev events", events);

  return (
    <>
      <div className="events-list">
        {pastEvents.slice(-3).map((event) => (
          <EventItem
            // classname={past}
            key={event.id}
            title={event.eventname}
            date={event.date}
            artists={event.artists}
          />
        ))}
        {events.map((event) => (
          <EventItem
            key={event.id}
            title={event.eventname}
            date={event.date}
            artists={event.artists}
          />
        ))}
      </div>
    </>
  );
}

export default Events;
