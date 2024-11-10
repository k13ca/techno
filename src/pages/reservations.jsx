import { useEffect, useRef, useState } from "react";
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

function Reservation() {
  const [switchFlor, setSwitchFlor] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const position = useRef(null);

  // USING REF ----------------------------------
  // function setPosition(positionX, positionY) {

  //   if (position) {
  //     console.log("MODAL", position);
  //     position.current.style.left = `${positionX}px`;
  //     position.current.style.top = `${positionY}px`;
  //   }
  // }

  // WITHOUT REF ----------------------------------
  function setPosition(positionX, positionY) {
    const reservationModal = document.querySelector(".reservation");
    reservationModal.style.left = `${positionX}px`;
    reservationModal.style.top = `${positionY}px`;
  }

  // TABLE EVENT CLICK ----------------------------------
  function handleSeatingClick(e) {
    const positionX = e.nativeEvent.clientX;
    const positionY = e.nativeEvent.clientY;

    setShowModal(true);
    setPosition(positionX, positionY);
    console.log("STOLIK", e);
    // console.log(e.target.parentElement.id);
  }

  return (
    <>
      {showModal ? (
        <div ref={position} className="outline reservation available">
          <h4>make a reservation</h4>
          {/* <h4>reserved</h4> */}
        </div>
      ) : (
        <></>
      )}

      <div className="merge">
        <div className="merge">
          <img
            src={arrowLeft}
            className="arrows pointer"
            onClick={handleSeatingClick}
          />
          <h1 onClick={handleSeatingClick}>10.10 TYTUL</h1>
        </div>
        <img src={arrowRight} className="arrows pointer" />
      </div>

      <div
        className="flors"
        onClick={() => {
          () => handleSeatingClick;
        }}
      >
        {/* ------------1FLOR---------------- */}

        {switchFlor ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1073.61 688">
            <Flor1 />
            <g id="seatings">
              <Box1 onClick={handleSeatingClick}></Box1>
              <SmallBox1 onClick={handleSeatingClick}></SmallBox1>
              <SmallBox2 onClick={handleSeatingClick}></SmallBox2>
              <SmallBox3 onClick={handleSeatingClick}> </SmallBox3>
              <SmallBox4 onClick={handleSeatingClick}></SmallBox4>
              <SmallBox5 onClick={handleSeatingClick}></SmallBox5>
              <Box4 onClick={handleSeatingClick}></Box4>
              <Box3 onClick={handleSeatingClick}></Box3>
              <Box2 onClick={handleSeatingClick}></Box2>
              <Table1 onClick={handleSeatingClick}></Table1>
              <Table2 onClick={handleSeatingClick}></Table2>
              <Table3 onClick={handleSeatingClick}></Table3>
              <Table4 onClick={handleSeatingClick}></Table4>
              <Table5 onClick={handleSeatingClick}></Table5>
            </g>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1073 688">
            <Flor2 />
            <g id="seatings">
              <Table6 onClick={handleSeatingClick}></Table6>
              <Table7 onClick={handleSeatingClick}></Table7>
              <Table8 onClick={handleSeatingClick}></Table8>
              <Table9 onClick={handleSeatingClick}></Table9>
              <Lodge1 onClick={handleSeatingClick}></Lodge1>
              <Lodge2 onClick={handleSeatingClick}></Lodge2>
              <Lodge3 onClick={handleSeatingClick}></Lodge3>
              <Box5 onClick={handleSeatingClick}></Box5>
              <Box6 onClick={handleSeatingClick}></Box6>
              <Box7 onClick={handleSeatingClick}></Box7>
              <Box8 onClick={handleSeatingClick}></Box8>
              <SmallBox6 onClick={handleSeatingClick}></SmallBox6>
              <SmallBox7 onClick={handleSeatingClick}></SmallBox7>
              <SmallBox8 onClick={handleSeatingClick}></SmallBox8>
              <SmallBox9 onClick={handleSeatingClick}></SmallBox9>
              <SmallBox10 onClick={handleSeatingClick}></SmallBox10>
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

// function setPosition(positionX, positionY) {

//   if (position) {
//     console.log("MODAL", position);
//     position.current.style.left = `${positionX}px`;
//     position.current.style.top = `${positionY}px`;
//   }
// }
