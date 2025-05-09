import "../index.css";
import techno from "../assets/techno.png";
import arrow from "../assets/arrow.png";
import { NavLink } from "react-router-dom";
import InfiniteLoop from "../components/InfinityLoop";
import { useContext, useEffect, useRef } from "react";
import { EventsContext } from "../contexts/EventsContext";
import useDiagonalLine from "../functions/diagonalLine";

function Main() {
  const { events, pastEvents } = useContext(EventsContext);
  const loopEventRef = useRef(null);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const loopDiagonalLine = useDiagonalLine(loopEventRef, events);

  const fitText = () => {
    if (window.screen.width <= 600) {
      textRef.current.style.fontSize = `1.2vh`;
      return;
    }
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) return;

    let currentSize = 50;
    text.style.fontSize = `${currentSize}px`;

    while (text.scrollHeight > container.clientHeight && currentSize > 10) {
      currentSize -= 1;
      text.style.fontSize = `${currentSize}px`;
    }
  };

  useEffect(() => {
    fitText();
    window.addEventListener("resize", fitText);
    return () => window.removeEventListener("resize", fitText);
  }, []);
  return (
    <>
      {/* --------------HEADER----------------  */}

      <div className="note">
        <h4>always starts at 9pm</h4>
      </div>
      {/* --------------MID-------------------  */}

      <div className="midpart">
        <div className="midleft rotate-left">
          <NavLink to="/login">
            <div className="outline pointer">
              <h3 className="">admin panel</h3>
            </div>
          </NavLink>
          <NavLink to="/reservation">
            <h2 className="pointer">MAKE RESERVATION</h2>
          </NavLink>
        </div>
        <div className="techno">
          <h1>KATOWICE</h1>
          <img src={techno} className="technoimg" />
        </div>

        <div className="midright">
          <img src={arrow} className="arrowimg" />
          <h2 style={{ writingMode: "vertical-rl" }}>
            BUY TICKETS ONLINE NOW!
          </h2>
        </div>
      </div>

      {/* --------------BOTTOM-------------------  */}

      <div ref={containerRef} className="bottom">
        <h2 ref={textRef} className="bottomquote">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est.
        </h2>
        {events.length > 0 && (
          <InfiniteLoop speed="20" direction="reverse">
            {pastEvents.slice(-3).map((event) => (
              <div
                className="events-loop-event contentBlock--one"
                key={event.eventid}
                ref={loopEventRef}
                style={{ position: "relative" }}
              >
                <div
                  className="cross-line"
                  style={{ ...loopDiagonalLine }}
                ></div>
                <h3 style={{ opacity: "50%", lineHeight: "100%" }}>
                  {event.date} / {event.artists.split(",").join(" / ")}
                </h3>
              </div>
            ))}
            {events.map((event) => (
              <h3
                className="events-loop-event contentBlock--one"
                key={event.eventid}
              >
                {event.date} / {event.artists.split(",").join(" / ")}
              </h3>
            ))}
          </InfiniteLoop>
        )}
      </div>
    </>
  );
}

export default Main;
