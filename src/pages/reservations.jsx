import { useContext, useEffect, useRef, useState } from "react";
import arrowLeft from "../assets/arrow_left.png";
import arrowRight from "../assets/arrow_right.png";
import {
  Box1,
  Box2,
  Box3,
  Box4,
  Box5,
  Box6,
  Box7,
  Box8,
  Flor1,
  Flor2,
  Lodge1,
  Lodge2,
  Lodge3,
  SmallBox1,
  SmallBox10,
  SmallBox2,
  SmallBox3,
  SmallBox4,
  SmallBox5,
  SmallBox6,
  SmallBox7,
  SmallBox8,
  SmallBox9,
  Table1,
  Table2,
  Table3,
  Table4,
  Table5,
  Table6,
  Table7,
  Table8,
  Table9,
} from "../assets/svg/seatings";
import "../index.css";
import { EventsContext } from "../contexts/EventsContext";
import { useNavigate } from "react-router-dom";

function Reservation() {
  const [switchFlor, setSwitchFlor] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isReserved, setIsReserved] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [eventIndex, setEventIndex] = useState(0);
  // const [reservedSeatingsModal, setReservedSeatingsModal] = useState(false);
  const {
    events,
    currEvent,
    setCurrEvent,
    reservationInfo,
    reservation,
    setReservation,
  } = useContext(EventsContext);

  const navigate = useNavigate();

  console.log("reservation page", reservation);

  const position = useRef(null);

  const reservationAvailabilityStyle = "seating";

  const reservationAvailableStyleModal = "outline reservation available";
  const reservationReservedStyleModal = "outline reservation reserved";

  const reservationAvailableStyle = ("outline", "reservation");
  const reservationReservedStyle = ("outline", "reservation", "available");
  const [modalStyles, setModalStyles] = useState(
    reservationAvailableStyleModal
  );
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".cls-1")) {
        setShowModal(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setShowModal]);

  // ----------PIN-GENERATION----------

  const pins = reservationInfo.map((reservation) => reservation.pin);

  function generatePin() {
    let pin;
    do {
      pin = Math.floor(Math.random() * (9999 - 1000)) + 1;
    } while (pins.includes(pin));
    setReservation({ ...reservation, pin: `${pin}` });
    console.log(pin);
  }

  // ----------MODAL-POSITION----------

  useEffect(() => {
    if (position.current && showModal) {
      position.current.style.left = `${
        coordinates.x + 300 > window.innerWidth
          ? coordinates.x - 300
          : coordinates.x
      }px`;
      position.current.style.top = `${coordinates.y}px`;
    }
  }, [showModal, coordinates]);

  // ----------EVENT-ARROWS----------

  function rightArrow() {
    if (eventIndex < events.length - 1) setEventIndex((current) => current + 1);
  }

  function leftArrow() {
    if (eventIndex > 0) setEventIndex((current) => current - 1);
  }

  const reservedSeatings = reservationInfo
    .map((reservation) => reservation.seatingname)
    .map((seating) => document.getElementById(seating))
    .filter((seatingHTML) => seatingHTML != null);
  console.log(reservedSeatings);

  // ----------MAP-TITLE----------

  useEffect(() => {
    if (events.length > 0) {
      const currEvent = events[eventIndex];
      currEvent.eventname = currEvent.eventname.toUpperCase();
      setCurrEvent(currEvent);
    }

    // ----------RESERVED-SEATINGS----------

    reservedSeatings.forEach((seating) => {
      seating.classList.remove(`${reservationAvailableStyle}`);
      seating.classList.add(`${reservationReservedStyle}`);
    });

    return () => {
      reservedSeatings.forEach((seating) => {
        seating.classList.remove(`${reservationReservedStyle}`);
        seating.classList.add(`${reservationAvailableStyle}`);
      });
    };
  }, [events, eventIndex, switchFlor, reservationInfo]);

  // TABLE EVENT CLICK ----------------------------------

  function handleSeatingClick(e) {
    setModalStyles(reservationAvailableStyleModal);
    const positionX = e.nativeEvent.clientX;
    const positionY = e.nativeEvent.clientY;
    setShowModal(true);
    setCoordinates({ x: positionX, y: positionY });
    const tablename = e.target.parentElement.id;
    if (reservationInfo.map((item) => item.seatingname).includes(tablename)) {
      setModalStyles(reservationReservedStyleModal);
      setIsReserved(true);
      return;
    }
    setIsReserved(false);
    setReservation({
      seatingname: `${tablename}`,
      date: currEvent.date,
      title: currEvent.eventname,
    });
  }

  function handleModalClick() {
    if (isReserved) {
      return;
    }
    generatePin();
    navigate("/reservation-form");
  }

  return (
    <>
      {showModal ? (
        <div ref={position} className={modalStyles} onClick={handleModalClick}>
          {isReserved ? (
            <h4>reserved</h4>
          ) : (
            <h4>
              make a reservation <br /> ({reservation.seatingname})
            </h4>
          )}
        </div>
      ) : (
        <></>
      )}

      <div className="merge" id="reservation-header">
        <img
          src={arrowLeft}
          onClick={(e) => leftArrow(e)}
          className="arrows pointer"
        />
        <div>
          <h1>
            {currEvent?.date} {currEvent?.eventname}
          </h1>
        </div>
        <img
          src={arrowRight}
          onClick={() => rightArrow()}
          className="arrows pointer"
        />
      </div>

      <div className="flors">
        {/* ------------1FLOR---------------- */}

        {switchFlor ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1073.61 688">
            <Flor1 />
            <g id="seatings">
              <Box1
                seatingStyle={reservationAvailabilityStyle}
                onSeatingClick={handleSeatingClick}
              ></Box1>
              <SmallBox1
                seatingStyle={reservationAvailabilityStyle}
                onSeatingClick={handleSeatingClick}
              ></SmallBox1>
              <SmallBox2
                seatingStyle={reservationAvailabilityStyle}
                onSeatingClick={handleSeatingClick}
              ></SmallBox2>
              <SmallBox3
                seatingStyle={reservationAvailabilityStyle}
                onSeatingClick={handleSeatingClick}
              ></SmallBox3>
              <SmallBox4
                seatingStyle={reservationAvailabilityStyle}
                onSeatingClick={handleSeatingClick}
              ></SmallBox4>
              <SmallBox5
                seatingStyle={reservationAvailabilityStyle}
                onSeatingClick={handleSeatingClick}
              ></SmallBox5>
              <Box4
                seatingStyle={reservationAvailabilityStyle}
                onSeatingClick={handleSeatingClick}
              ></Box4>
              <Box3
                seatingStyle={reservationAvailabilityStyle}
                onSeatingClick={handleSeatingClick}
              ></Box3>
              <Box2
                seatingStyle={reservationAvailabilityStyle}
                onSeatingClick={handleSeatingClick}
              ></Box2>
              <Table1
                seatingStyle={reservationAvailabilityStyle}
                onSeatingClick={handleSeatingClick}
              ></Table1>
              <Table2
                seatingStyle={reservationAvailabilityStyle}
                onSeatingClick={handleSeatingClick}
              ></Table2>
              <Table3
                seatingStyle={reservationAvailabilityStyle}
                onSeatingClick={handleSeatingClick}
              ></Table3>
              <Table4
                seatingStyle={reservationAvailabilityStyle}
                onSeatingClick={handleSeatingClick}
              ></Table4>
              <Table5
                seatingStyle={reservationAvailabilityStyle}
                onSeatingClick={handleSeatingClick}
              ></Table5>
            </g>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1073 688">
            <Flor2 />
            <g id="seatings">
              <Table6
                seatingStyle={reservationAvailabilityStyle}
                onSeatingClick={handleSeatingClick}
              ></Table6>
              <Table7
                seatingStyle={reservationAvailabilityStyle}
                onSeatingClick={handleSeatingClick}
              ></Table7>
              <Table8
                seatingStyle={reservationAvailabilityStyle}
                onSeatingClick={handleSeatingClick}
              ></Table8>
              <Table9
                seatingStyle={reservationAvailabilityStyle}
                onSeatingClick={handleSeatingClick}
              ></Table9>
              <Lodge1
                seatingStyle={reservationAvailabilityStyle}
                onSeatingClick={handleSeatingClick}
              ></Lodge1>
              <Lodge2
                seatingStyle={reservationAvailabilityStyle}
                onSeatingClick={handleSeatingClick}
              ></Lodge2>
              <Lodge3
                seatingStyle={reservationAvailabilityStyle}
                onSeatingClick={handleSeatingClick}
              ></Lodge3>
              <Box5
                seatingStyle={reservationAvailabilityStyle}
                onSeatingClick={handleSeatingClick}
              ></Box5>
              <Box6
                seatingStyle={reservationAvailabilityStyle}
                onSeatingClick={handleSeatingClick}
              ></Box6>
              <Box7
                seatingStyle={reservationAvailabilityStyle}
                onSeatingClick={handleSeatingClick}
              ></Box7>
              <Box8
                seatingStyle={reservationAvailabilityStyle}
                onSeatingClick={handleSeatingClick}
              ></Box8>
              <SmallBox6
                seatingStyle={reservationAvailabilityStyle}
                onSeatingClick={handleSeatingClick}
              ></SmallBox6>
              <SmallBox7
                seatingStyle={reservationAvailabilityStyle}
                onSeatingClick={handleSeatingClick}
              ></SmallBox7>
              <SmallBox8
                seatingStyle={reservationAvailabilityStyle}
                onSeatingClick={handleSeatingClick}
              ></SmallBox8>
              <SmallBox9
                seatingStyle={reservationAvailabilityStyle}
                onSeatingClick={handleSeatingClick}
              ></SmallBox9>
              <SmallBox10
                seatingStyle={reservationAvailabilityStyle}
                onSeatingClick={handleSeatingClick}
              ></SmallBox10>
            </g>
          </svg>
        )}

        <div className="" style={{ writingMode: "vertical-lr" }}>
          <h2
            className={!switchFlor ? "pointer focus" : "pointer"}
            onClick={() => setSwitchFlor(false)}
          >
            2ND FLOR
          </h2>
          <h2
            className={switchFlor ? "pointer focus" : "pointer"}
            onClick={() => setSwitchFlor(true)}
          >
            1ST FLOR
          </h2>
        </div>
      </div>
    </>
  );
}

export default Reservation;
