import { createContext, useEffect, useState } from "react";
import { API_HOST } from "../consts/const";

const EventsContext = createContext();

function EventsProvider({ children }) {
  const [events, setEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currEvent, setCurrEvent] = useState([]);
  const [reservationInfo, setReservationInfo] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [eventToDelete, setEventToDelete] = useState({
    eventId: "",
    eventName: "",
  });

  const [reservation, setReservation] = useState({
    seatingname: "",
    title: "",
    date: "",
    pin: "",
  });
  async function fetchEvents() {
    const res = await fetch(`${API_HOST}/events`);
    if (!res.ok) {
      return "ERROR";
    }
    const data = await res.json();

    console.log(data);
    const pastEvents = sortEventsDate(
      data.filter((event) => checkPastDate(event.date))
    );
    const futureEvents = sortEventsDate(
      data.filter((event) => !checkPastDate(event.date))
    );
    setEvents(futureEvents);
    setPastEvents(pastEvents);
  }
  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    async function fetchReservations() {
      const res = await fetch(`${API_HOST}/reservations`);
      if (!res.ok) {
        return "ERROR";
      }
      const data = await res.json();
      console.log(data);
      const upToDateReservations = sortEventsDate(
        data.filter((reservation) => !checkPastDate(reservation.date))
      );
      console.log(upToDateReservations);
      setReservations(upToDateReservations);
      console.log(reservations);
    }
    fetchReservations();
  }, []);

  useEffect(() => {
    // console.log("pastevents", events);
    // console.log("pastevents", pastEvents);
  }, [events]);

  const convertDate = (date) => {
    const eventDate = date.split(".").join("-");
    const [day, month, year] = eventDate.split("-");
    const correctDate = new Date(year, month - 1, day);
    return correctDate;
  };

  const checkPastDate = (date) => {
    const now = new Date();
    const correctDate = convertDate(date);
    return correctDate < now;
  };

  const sortEventsDate = (date) => {
    return date.toSorted(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  };

  useEffect(() => {
    async function fetchReservations() {
      if (!currEvent.eventid) {
        return;
      }
      try {
        setIsLoading(true);
        const res = await fetch(
          `${API_HOST}/reservations/${currEvent.eventid}`
        );
        const data = await res.json();
        console.log("reservation", data);
        setReservationInfo(data);
      } catch {
        console.log("error");
      } finally {
        setIsLoading(false);
      }
    }
    fetchReservations();
  }, [currEvent]);

  return (
    <EventsContext.Provider
      value={{
        events,
        pastEvents,
        isLoading,
        currEvent,
        setCurrEvent,
        reservationInfo,
        setReservationInfo,
        reservation,
        setReservation,
        eventToDelete,
        setEventToDelete,
        reservations,
        fetchEvents,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
}

export { EventsProvider, EventsContext };
