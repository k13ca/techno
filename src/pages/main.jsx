import "../index.css";
import techno from "../assets/techno.png";
import arrow from "../assets/arrow.png";
import { NavLink } from "react-router-dom";

function Main() {
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
        <div className="events">
          <div className="event loop1">
            <h3>
              15.06 / SOME RANDOM / LINEUP / DJS / ARTISTS / GOOD MUSIC / TECHNO
              / SOMEONE YOU WANT TO HEAR
            </h3>
          </div>
          <div className="event loop1">
            <h3>
              15.06 / SOME RANDOM / LINEUP / DJS / ARTISTS / GOOD MUSIC / TECHNO
              / SOMEONE YOU WANT TO HEAR
            </h3>
          </div>
          <div className="event loop1">
            <h3>
              16.06 / SOME RANDOM / LINEUP / DJS / ARTISTS / GOOD MUSIC / TECHNO
              / SOMEONE YOU WANT TO HEAR
            </h3>
          </div>
          <div className="event loop1">
            <h3>
              17.06 / SOME RANDOM / LINEUP / DJS / ARTISTS / GOOD MUSIC / TECHNO
              / SOMEONE YOU WANT TO HEAR
            </h3>
          </div>
          <div className="event loop2">
            <h3>
              18.06 / SOME RANDOM / LINEUP / DJS / ARTISTS / GOOD MUSIC / TECHNO
              / SOMEONE YOU WANT TO HEAR
            </h3>
          </div>
          <div className="event loop2">
            <h3>
              19.06 / SOME RANDOM / LINEUP / DJS / ARTISTS / GOOD MUSIC / TECHNO
              / SOMEONE YOU WANT TO HEAR
            </h3>
          </div>
          <div className="event loop2">
            <h3>
              20.06 / SOME RANDOM / LINEUP / DJS / ARTISTS / GOOD MUSIC / TECHNO
              / SOMEONE YOU WANT TO HEAR
            </h3>
          </div>
          <div className="event loop2">
            <h3>
              21.06 / SOME RANDOM / LINEUP / DJS / ARTISTS / GOOD MUSIC / TECHNO
              / SOMEONE YOU WANT TO HEAR
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
