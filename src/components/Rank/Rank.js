import React from "react";

const Rank = ({ name, detections }) => {
  return (
    <div>
      <div className="white f3">{`${name}, your current detections count is: `}</div>
      <div className="white f1">{detections}</div>
    </div>
  );
};

export default Rank;
