import { useEffect, useState, useContext } from "react";
import infoIcon from "../assets/info-icon.png";
import arrow from "../assets/arrow.png";
import { useNavigate } from "react-router-dom";
import { EventsContext } from "../contexts/EventsContext";
import { API_HOST } from "../consts/const";

function ReservationForm() {
  const [infoModal, setInfoModal] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [countDown, setCountDown] = useState(5);
  const [incorrectPin, setIncorrectPin] = useState(false);

  const navigate = useNavigate();

  const { reservation, setReservation, fetchReservations } =
    useContext(EventsContext);

  useEffect(() => {
    function handleTimeout() {
      setCountDown(5);
      navigate("/reservation");
      setConfirmationModal(false);
    }

    let timer;
    if (confirmationModal && countDown > 0) {
      timer = setInterval(() => {
        setCountDown((prev) => prev - 1);
      }, 1000);
    } else if (countDown === 0) {
      clearInterval(timer);

      setTimeout(() => {
        handleTimeout();
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [confirmationModal, countDown, navigate]);

  // ----------DATABASE POST 2----------

  async function finalPostToDatabase() {
    return await fetch(`${API_HOST}/update-reservation`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reservation),
    });
  }

  async function deleteReservation() {
    await fetch(`${API_HOST}/delete-reservation`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reservation),
    });
  }

  async function sendEmail(reservation) {
    await fetch(`${API_HOST}/send-mail`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reservation),
    });
  }

  const handleReserveButton = (e) => {
    e.preventDefault();
    setConfirmationModal(true);
    setCountDown(180);

    const fullname = e.target[0].value;
    const email = e.target[1].value;

    const fullReservation = {
      ...reservation,
      fullname: `${fullname}`,
      email: `${email}`,
    };

    sendEmail(fullReservation);

    setReservation(fullReservation);
  };

  function handleExitButton() {
    setConfirmationModal(false);
    setIncorrectPin(false);
  }

  async function handleConfirmButton(e) {
    const pin = e.target[0].value;
    e.preventDefault();
    if (reservation.pin === pin) {
      setConfirmationModal(false);
      setIncorrectPin(false);
      const response = await finalPostToDatabase();
      if (response.ok) {
        fetchReservations();
        navigate("/reservation");
      }
    }
    setIncorrectPin(true);
  }

  function handleBackmButton() {
    deleteReservation();
    setIncorrectPin(false);
    navigate("/reservation");
  }

  return (
    <>
      {confirmationModal ? (
        <div className="confirmation-background">
          <div className="confirmation-modal outline">
            <h2 style={{ textWrap: "wrap", width: "80%", textAlign: "center" }}>
              enter the code received in the email
            </h2>
            <h4>{countDown <= 0 ? "time left" : countDown}</h4>
            <form onSubmit={handleConfirmButton}>
              <input
                type="text"
                placeholder="code"
                className="user-input"
                required
              ></input>
              <div className="alert">
                {incorrectPin && <h3>code is incorrect</h3>}
              </div>
              <div className="merge">
                <button className="outline pointer" type="submit">
                  <h3>confirm</h3>
                </button>
                <button className="outline pointer" onClick={handleExitButton}>
                  <h3>exit</h3>
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      <div className="reservation-form-section merge">
        <form className="reservation-form" onSubmit={handleReserveButton}>
          <h3 className="outline">event informations</h3>

          <div className="reservation-merge left">
            <h2>{reservation.title}</h2>
            <h2>{reservation.date}</h2>

            <h3 style={{ marginBottom: "0px" }}>seating:</h3>
            <h4>{reservation.seatingname}</h4>
          </div>
          <div className="reservation-merge">
            <h3
              className="info-modal outline"
              style={infoModal ? {} : { opacity: "0%" }}
            >
              after pressing the reservation button, you will recive a code on
              the provided email address to confirm the reservation
            </h3>

            <img
              src={infoIcon}
              className="info-icon"
              onMouseEnter={() => setInfoModal(true)}
              onMouseLeave={() => setInfoModal(false)}
            ></img>

            <input
              type="text"
              placeholder="full name"
              className="user-input"
              required
            ></input>

            <input
              type="text"
              placeholder="e-mail"
              className="user-input"
              required
            ></input>
          </div>
          <button className="outline pointer" type="submit">
            <h3>reserve</h3>
          </button>
        </form>
        <div className="back-button pointer" onClick={handleBackmButton}>
          <h2>BACK TO RESERVATIONS</h2>
          <img src={arrow} className="arrowimg"></img>
        </div>
      </div>
    </>
  );
}

export default ReservationForm;
