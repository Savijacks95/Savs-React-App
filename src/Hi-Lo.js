import React from "react";
import sun from "./sun.jpg";
import moon from "./moon.jpg";

export default function HiLo() {
  return (
    <div>
      <div className="grid">
        <div className="four">
          <div className="HighTemp">Highs</div>
          <img
            src={sun}
            width="100"
            height="100"
            alt=""
            className="high-icon"
          />
        </div>
      </div>
      <div className="five">
        <div className="LowTemp">Low</div>
        <img src={moon} width="100" height="100" alt="" className="high-icon" />
      </div>
    </div>
  );
}
