import "./App.css";
import React, { useState } from "react";
import meter from "./svg-meter-gauge-needle.svg";
import speedometer from "./Group 729.png";

function App() {
  const [x, setX] = useState(0);
  const [fuil, setFuil] = useState(0);
  const [fuilColor, setColor] = useState("white");

  const circleClick = (e) => {
    console.log("clicked");
    if (e.target.id === "red") {
      setX(-90);
      setFuil(0);
      setColor("red");
    } else if (e.target.id === "avg") {
      setX(-60);
      setFuil(20);
      setColor("orange");
    } else if (e.target.id === "mid") {
      setX(0);
      setFuil(50);
      setColor("yellow");
    } else if (e.target.id === "high") {
      setX(90);
      setFuil(100);
      setColor("green");
    }
  };
  return (
    <div>
      <img id="speedometer" src={speedometer} alt="" />
      <img
        id="meter_needle"
        src={meter}
        alt=""
        style={{
          transform: `rotate( ${x}deg)`,
        }}
      />
      <div id="meter">
        <svg height="350" width="350">
          <circle
            id="red"
            r="150"
            cx="50%"
            cy="50%"
            stroke="#E04644"
            strokeWidth="90"
            strokeDasharray="471, 943"
            fill="none"
            onClick={circleClick}
          ></circle>
          <circle
            id="avg"
            r="150"
            cx="50%"
            cy="50%"
            stroke="#ff7100"
            strokeWidth="90"
            strokeDasharray="414, 943"
            fill="none"
            onClick={circleClick}
          ></circle>
          <circle
            id="mid"
            r="150"
            cx="50%"
            cy="50%"
            stroke="#ff9400"
            strokeWidth="90"
            strokeDasharray="314, 943"
            fill="none"
            onClick={circleClick}
          ></circle>
          <circle
            id="high"
            r="150"
            cx="50%"
            cy="50%"
            stroke="#00ffaa"
            strokeWidth="90"
            strokeDasharray="157, 943"
            fill="none"
            onClick={circleClick}
          ></circle>
        </svg>
      </div>

      <button className="fuil" style={{ background: fuilColor }}>
        {fuil}%
      </button>
    </div>
  );
}

export default App;
