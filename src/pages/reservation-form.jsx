import { useEffect, useState, useContext } from "react";
import infoIcon from "../assets/info-icon.png";
import arrow from "../assets/arrow.png";
import { useLocation, useNavigate } from "react-router-dom";
import { EventsContext } from "../contexts/EventsContext";

function ReservationForm() {
  const [infoModal, setInfoModal] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [countDown, setCountDown] = useState(5);

  const navigate = useNavigate();
  const location = useLocation();

  const { reservation } = useContext(EventsContext);

  // setReservation({seatingname: location.state.tablename, title" })

  console.log("reservation form", reservation);

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

      //delete reserved state fro database
      //back to reservation
    }
    return () => clearInterval(timer);
  }, [confirmationModal, countDown, navigate]);

  useEffect(() => {
    // tutaj uzyc session storage
    // const sessionToken = sessionStorage.getItem("sessionToken");
    // console.log(sessionToken);
    // if (!sessionToken) {
    //   sessionStorage.setItem("sessionToken", "wartosc");
    //   navigate("/reservation");
    // }

    return () => console.log("usuwam sie");
  }, []);

  const handleReserveButton = (e) => {
    e.preventDefault();
    setConfirmationModal(true);
    setCountDown(5);
    //generate and save code to database
  };

  function handleExitButton() {
    setConfirmationModal(false);
    //set time to primary
    //delete code from database
  }

  function handleConfirmButton() {
    setConfirmationModal(false);
    //check code input x database
    //if correct clear 10 min timer
  }

  function handleBackmButton() {
    navigate("/reservation");
    //remove reservation
  }

  //10 min timer whole page
  //when on page reservation added
  //when 10 min gone remove reservstion
  //

  return (
    <>
      {confirmationModal ? (
        <div className="confirmation-background">
          <div className="confirmation-modal outline">
            <h2 style={{ textWrap: "wrap", width: "80%", textAlign: "center" }}>
              enter the code received in the email
            </h2>
            <h4>{countDown <= 0 ? "time left" : countDown}</h4>
            <input
              type="text"
              placeholder="code"
              className="user-input"
            ></input>
            <div className="alert">{/* <h3>code is incorrect</h3> */}</div>
            <div className="merge">
              <button className="outline pointer" onClick={handleExitButton}>
                <h3>exit</h3>
              </button>
              <button className="outline pointer" onClick={handleConfirmButton}>
                <h3>confirm</h3>
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <div className="reservation-form-section merge">
        <form className="reservation-form" onSubmit={handleReserveButton}>
          <h3 className="outline">event informations</h3>

          <div className="reservation-merge left">
            <h2>{location.state.title}</h2>
            <h2>{location.state.date}</h2>

            <h3 style={{ marginBottom: "0px" }}>seating:</h3>
            <h4>{location.state.seatingname}</h4>
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
            ></input>

            <input
              type="text"
              placeholder="e-mail"
              className="user-input"
            ></input>
          </div>
          <button className="outline pointer">
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
