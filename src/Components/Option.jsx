import { useState } from "react";
import React from "react";
import Confetti from "react-dom-confetti";
import Button from "@mui/material/Button";

export default function Option(props) {
  let [bgColor, setBgColor] = useState("transparent");
  // eslint-disable-next-line
  let [selected, setSelected] = useState(false);

  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };
  return (
    <>
      <Button
      variant="contained"
      style={{ padding: "15px 30px", fontSize: "20px", letterSpacing: "2px" }}
        className="option"
        onClick={() => {
          setBgColor("green")
          setSelected(true);
          props.clickHandler(props.index);
          
        }}
        key={props.key}
        disabled={props.disabled}

      >
        {props.value}
      </Button>
      <Confetti active={bgColor === "green"} config={config}/>
    </>
  );
}
