import "../index.css";
import techno from "../assets/techno.png";
import arrow from "../assets/arrow.png";
import { NavLink } from "react-router-dom";
import InfiniteLoop from "../components/InfinityLoop";
import { useContext } from "react";
import { EventsContext } from "../contexts/EventsContext";

function Main() {
  const { events } = useContext(EventsContext);
  console.log(events);
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

      <div className="bottom">
        <h2 className="bottomquote">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est.
        </h2>
        {events.length > 0 && (
          <InfiniteLoop speed="20" direction="reverse">
            {events.map((event) => (
              <h3
                className="events-loop-event contentBlock--one"
                key={event.date}
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
