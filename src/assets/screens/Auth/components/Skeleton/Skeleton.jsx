import React, { useEffect, useState } from "react";
import "./Skeleton.css";

function Skeleton({ count }) {
  const [ArrayCount, SetArrayCount] = useState([]);
  useEffect(() => {
    const ArrayLength = new Array(count).fill(0);
    SetArrayCount(ArrayLength);
  }, [count]);

  return (
    <React.Fragment>
      {ArrayCount.map((length, index) => (
        <div className="skeleton" key={index}>
          <div className="card">
            <div className="img"></div>
            <div className="titel"></div>
            <div className="data">
              <div className="time"></div>
              <span>|</span>
              <div className="genre"></div>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}
export default Skeleton;
