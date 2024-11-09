// import { useState } from "react";
import "./index.css";
import qr from "./assets/qrcode.png";
import Dot from "./svg-dot";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

function Section() {
  const location = useLocation();
  return (
    <>
      <section>
        <div className="header">
          <div className="merge" style={{ height: "fit-content" }}>
            <Link to="/">
              <h4 className="pointer">main</h4>
            </Link>
            <Dot />
            <NavLink to="/about">
              <h4 className="pointer">about</h4>
            </NavLink>
            <Dot />
            <NavLink to="/events">
              <h4 className="pointer">events</h4>
            </NavLink>
          </div>
          <>
            {location.pathname === "/" ? (
              <div className="merge">
                <div className="contact">
                  <h3>kodtechno@contact.com </h3>
                  <h3>+321456790</h3>
                  <div className="outline">
                    <h3>UL. JXDWKKDJ 56</h3>
                  </div>
                </div>
                <img src={qr} className="qrimg" />
              </div>
            ) : (
              <div></div>
            )}
          </>
        </div>

        <Outlet />
      </section>
    </>
  );
}

export default Section;
