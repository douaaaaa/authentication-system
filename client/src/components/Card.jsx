import React from "react";

function Card(props) {
  return (
    <div style={{ ...props }} className=" absolute cards">
      <div className="  innerCard h-full w-full "></div>
    </div>
  );
}

export default Card;
