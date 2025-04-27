import { useContext, useEffect, useRef, useState } from "react";
import AdminShowEvents from "../components/adminShowEvents";
import AdminShowReservations from "../components/adminShowReservations";
import { EventsContext } from "../contexts/EventsContext";
import { AiFillPlusSquare } from "react-icons/ai";
import { API_HOST } from "../consts/const";

function Admin() {
  const { events, pastEvents, eventToDelete, reservations, fetchEvents } =
    useContext(EventsContext);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const [showAddEventnModal, setShowAddEventnModal] = useState(false);
  const [optionViews, setOptionView] = useState({
    showEvents: false,
    addEvent: false,
    showReservations: false,
  });
  const [newEvent, setNewEvent] = useState({
    title: null,
    date: null,
    artists: [],
  });
  const artistref = useRef(null);

  const contentActive = "focus";
  const pastEventsStyle = { opacity: "40%" };

  useEffect(() => {
    function resetCategory() {
      if (window.innerWidth > 1000) {
        return;
      }

      const firstTrueKey = Object.entries(optionViews).find(
        ([key, value]) => value
      )?.[0];
      console.log(firstTrueKey);
      if (firstTrueKey) {
        setOptionView(() => ({
          showEvents: false,
          addEvent: false,
          showReservations: false,
          [firstTrueKey]: true,
        }));
      }
    }
    window.addEventListener("resize", resetCategory);

    return () => window.removeEventListener("resize", resetCategory);
  }, [optionViews]);

  function submitArtist() {
    let artist;
    if (artistref.current) {
      artist = artistref.current.value;
    }
    artist.length > 0 &&
      setNewEvent((prev) => ({
        ...prev,
        artists: [...prev.artists, artist],
      }));
    artistref.current.value = "";
  }

  function undoArtist() {
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      artists: prevEvent.artists.slice(0, -1),
    }));
  }

  function removeEvent() {
    fetch(`${API_HOST}/delete-event`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventToDelete),
    }).then((res) => {
      if (res.ok) {
        fetchEvents();
      }
    });
  }

  function selectCategory(category) {
    setOptionView((prev) => {
      if (window.innerWidth < 1000) {
        return {
          addEvent: false,
          showReservations: false,
          showEvents: false,
          [category]: !prev[category],
        };
      }

      return { ...prev, [category]: !prev[category] };
    });
  }

  // function isValidDate(date) {
  //   const regex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(\d{4})$/;
  //   return regex.test(date);
  // }
  const convertDate = (date) => date.split("-").toReversed().join(".");

  function handleAddEvent(e) {
    e.preventDefault();
    if (newEvent.date && newEvent.title && newEvent.artists.length > 0) {
      const artists = newEvent.artists.join(",");
      fetch(`${API_HOST}/add-event`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...newEvent, artists }),
      }).then((res) => {
        if (res.ok) {
          fetchEvents();
          setNewEvent({ title: null, date: null, artists: [] });
        }
      });
      setShowAddEventnModal(true);
      addEventModalTimeout();
    }
  }

  function addEventModalTimeout() {
    setTimeout(() => {
      setShowAddEventnModal(false);
    }, 2000);
  }

  return (
    <>
      {showAddEventnModal && (
        <div className="user-input add-event-success">
          <h4>success</h4>
        </div>
      )}

      {showConfirmationModal && (
        <div className="confirmation-background">
          <div className="confirmation-modal outline">
            <h2 style={{ textWrap: "wrap", width: "80%", textAlign: "center" }}>
              Are you sure you want to delete <u>{eventToDelete.eventName}</u>{" "}
              event?
            </h2>

            <div className="merge">
              <button
                className="outline pointer"
                onClick={() => {
                  setShowConfirmationModal(false);
                  removeEvent();
                }}
              >
                <h3>confirm</h3>
              </button>
              <button
                className="outline pointer"
                onClick={() => setShowConfirmationModal(false)}
              >
                <h3>exit</h3>
              </button>
            </div>
          </div>
        </div>
      )}

      <div
        id="admin-menu"
        className="merge"
        style={{
          maxHeight: "20%",
        }}
      >
        <button
          className={`${
            optionViews.showEvents && contentActive
          } outline pointer`}
          style={{ padding: "0px 10px" }}
          onClick={() => selectCategory("showEvents")}
        >
          <h3>show events</h3>
        </button>
        <button
          className={`${optionViews.addEvent && contentActive} outline pointer`}
          style={{ padding: "0px 10px" }}
          onClick={() => selectCategory("addEvent")}
        >
          <h3>add event</h3>
        </button>
        <button
          className={`${
            optionViews.showReservations && contentActive
          } outline pointer`}
          style={{ padding: "0px 10px" }}
          onClick={() => selectCategory("showReservations")}
        >
          <h3>show reservations</h3>
        </button>
      </div>
      <div className="admin-content">
        {optionViews.showEvents && (
          <div className="admin-options-content">
            {events.map((event) => (
              <AdminShowEvents
                key={event.eventid}
                eventId={event.eventid}
                title={event.eventname}
                date={event.date}
                artists={event.artists}
                setShowConfirmationModal={setShowConfirmationModal}
              ></AdminShowEvents>
            ))}
            {pastEvents.map((event) => (
              <AdminShowEvents
                key={event.eventid}
                eventId={event.eventid}
                title={event.eventname}
                date={event.date}
                artists={event.artists}
                style={pastEventsStyle}
                setShowConfirmationModal={setShowConfirmationModal}
              ></AdminShowEvents>
            ))}
          </div>
        )}
        {optionViews.addEvent && (
          <div className="admin-options-content">
            <form
              className="add-event-form-group"
              onSubmit={handleAddEvent}
              onReset={() =>
                setNewEvent({ title: null, date: null, artists: [] })
              }
            >
              <div className="add-event-form">
                <div className="add-event-inputs">
                  <h3 className="outline">enter event informations</h3>
                  <input
                    type="text"
                    placeholder="event title"
                    className="user-input"
                    name="title"
                    required
                    onChange={(e) => {
                      e.target.value.length > 0 &&
                        setNewEvent((newEvent) => ({
                          ...newEvent,
                          title: e.target.value,
                        }));
                    }}
                  ></input>
                  <input
                    type="date"
                    className="user-input"
                    name="date"
                    required
                    onChange={(e) => {
                      setNewEvent((newEvent) => ({
                        ...newEvent,
                        date: e.target.value
                          ? convertDate(e.target.value)
                          : "wrong date format",
                      }));
                    }}
                  ></input>

                  <div className="add-artists-form">
                    <input
                      type="text"
                      placeholder="artist"
                      className="user-input"
                      name="artist"
                      ref={artistref}
                    ></input>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <button
                        style={{ all: "unset" }}
                        className="pointer active"
                        onClick={submitArtist}
                        type="button"
                      >
                        <AiFillPlusSquare
                          size="60px"
                          className="pointer active"
                        />
                      </button>
                      <button
                        className="admin-add-event-undo pointer active"
                        onClick={undoArtist}
                        type="button"
                      >
                        <h4>undo</h4>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="add-event-outputs">
                  <h3 className="outline">your new event</h3>
                  <h2>Event title:</h2>
                  <h3>
                    {newEvent.title
                      ? newEvent.title
                      : "event title can't be empty"}
                  </h3>

                  <h2>Event date:</h2>
                  <h3>{newEvent.date}</h3>

                  <h2>Artists:</h2>
                  <h3>
                    {newEvent.artists.length > 0
                      ? newEvent.artists.map((artist) => `${artist}, `)
                      : "you have to add at least one artist"}
                  </h3>
                </div>
              </div>
              <div className="merge">
                <button
                  className="outline pointer add-event-button"
                  type="submit"
                >
                  add event
                </button>
                <button
                  className="outline pointer add-event-button"
                  type="reset"
                >
                  X
                </button>
              </div>
            </form>
          </div>
        )}
        {optionViews.showReservations && (
          <div className="admin-options-content">
            {reservations.map((reservation) => (
              <AdminShowReservations
                pin={reservation.pin}
                key={reservation.id}
                reservationId={reservation.id}
                eventName={reservation.eventname}
                date={reservation.date}
                person={reservation.fullname || "empty"}
                seatingName={reservation.seatingname || "empty"}
              ></AdminShowReservations>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Admin;
