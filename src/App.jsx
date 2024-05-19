import "./App.css";
import "./index.css";
import techno from "./assets/techno.png";
import qr from "./assets/qrcode.png";
import arrow from "./assets/arrow.png";

const events = [{ date: 20.05, artists: "w" }];

function App() {
  return (
    <>
      <section>
        <div className="note">always starts at 9pm</div>
        <div className="header">
          <div className="contact">
            <p>kodtechno@contact.com </p>
            <p>+321456790</p>
            <div className="address">UL. JXDWKKDJ 56</div>
          </div>
          <img src={qr} className="qrimg" />
        </div>
        <div className="midpart">
          <div className="midleft"></div>
          <div className="techno">
            KODOWICE
            <img src={techno} className="technoimg" />
          </div>

          <div className="midright">
            <img src={arrow} className="arrowimg" />
            <h2>BUY TICKETS ONLINE NOW!</h2>
          </div>
        </div>
        <div className="bottom">
          <span className="bottomquote">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est.
          </span>
          <div className="events">
            <div className="event loop1">
              15.06 / SOME RANDOM / LINEUP / DJS / ARTISTS / GOOD MUSIC / TECHNO
              / SOMEONE YOU WANT TO HEAR
            </div>
            <div className="event loop1">
              16.06 / SOME RANDOM / LINEUP / DJS / ARTISTS / GOOD MUSIC / TECHNO
              / SOMEONE YOU WANT TO HEAR
            </div>
            <div className="event loop1">
              17.06 / SOME RANDOM / LINEUP / DJS / ARTISTS / GOOD MUSIC / TECHNO
              / SOMEONE YOU WANT TO HEAR
            </div>
            <div className="event loop1">
              17.06 / SOME RANDOM / LINEUP / DJS / ARTISTS / GOOD MUSIC / TECHNO
              / SOMEONE YOU WANT TO HEAR
            </div>
            <div className="event loop2">
              18.06 / SOME RANDOM / LINEUP / DJS / ARTISTS / GOOD MUSIC / TECHNO
              / SOMEONE YOU WANT TO HEAR
            </div>
            <div className="event loop2">
              19.06 / SOME RANDOM / LINEUP / DJS / ARTISTS / GOOD MUSIC / TECHNO
              / SOMEONE YOU WANT TO HEAR
            </div>
            <div className="event loop2">
              20.06 / SOME RANDOM / LINEUP / DJS / ARTISTS / GOOD MUSIC / TECHNO
              / SOMEONE YOU WANT TO HEAR
            </div>
            <div className="event loop2">
              20.06 / SOME RANDOM / LINEUP / DJS / ARTISTS / GOOD MUSIC / TECHNO
              / SOMEONE YOU WANT TO HEAR
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
