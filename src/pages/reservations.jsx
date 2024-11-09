import { useState } from "react";
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

  return (
    <>
      <div className="merge">
        <div className="merge">
          <img src={arrowLeft} className="arrows pointer" />
          <h1>10.10 TYTUL</h1>
        </div>
        <img src={arrowRight} className="arrows pointer" />
      </div>

      <div className="flors">
        {/* ------------1FLOR---------------- */}

        {switchFlor ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1073.61 688">
            <Flor1 />
            <g id="seatings">
              <Box1></Box1>
              <SmallBox1></SmallBox1>
              <SmallBox2></SmallBox2>
              <SmallBox3></SmallBox3>
              <SmallBox4></SmallBox4>
              <SmallBox5></SmallBox5>
              <Box4></Box4>
              <Box3></Box3>
              <Box2></Box2>
              <Table1></Table1>
              <Table2></Table2>
              <Table3></Table3>
              <Table4></Table4>
              <Table5></Table5>
            </g>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1073 688">
            <Flor2 />
            <g id="seatings">
              <Table6></Table6>
              <Table7></Table7>
              <Table8></Table8>
              <Table9></Table9>
              <Lodge1></Lodge1>
              <Lodge2></Lodge2>
              <Lodge3></Lodge3>
              <Box5></Box5>
              <Box6></Box6>
              <Box7></Box7>
              <Box8></Box8>
              <SmallBox6></SmallBox6>
              <SmallBox7></SmallBox7>
              <SmallBox8></SmallBox8>
              <SmallBox9></SmallBox9>
              <SmallBox10></SmallBox10>
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
