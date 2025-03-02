import { useState } from "react";

function About() {
  const [revealed, setRevealed] = useState({ div1: false, div2: false });

  const handleInfo = (div) => {
    setRevealed((prevState) => ({ ...prevState, [div]: !prevState[div] }));
  };

  return (
    <div className="about">
      <h2 className="about1">
        Welcome to my random project generator idea website of techno club in
        katowice.
      </h2>

      <h2 className="about1">
        Its a fullstack project basen on react with SQL database where you can
        also be a customer just as an owner.
      </h2>
      <div className="about2">
        <h4>
          to get access to the admin panel, use login and password which are
          hidden below
        </h4>
        <div
          className={`hidden-info ${revealed.div1 ? "revealed" : "hidden"}`}
          onClick={() => handleInfo("div1")}
        >
          <h4>adminmode</h4>
        </div>
        <div
          className={`hidden-info ${revealed.div2 ? "revealed" : "hidden"}`}
          onClick={() => handleInfo("div2")}
        >
          <h4>passtoadminpanel</h4>
        </div>
      </div>
      <h2 className="about1">(some parts are still in progress)</h2>
    </div>
  );
}

export default About;
