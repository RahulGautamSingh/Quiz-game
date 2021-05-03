import { useState } from "react";
import React from "react";
import Confetti from "react-dom-confetti";

export default function Option(props) {
  let [bgColor, setBgColor] = useState("transparent");
  let [selected, setSelected] = useState(false);
  return (
    <>
      <button
        style={{ backgroundColor: selected ? bgColor : "transparent" }}
        className="option"
        onClick={() => {
          setSelected(true);
          setBgColor(props.clickHandler(props.index));
        }}
        key={props.key}
      >
        {props.value}
      </button>
      <Confetti active={bgColor === "green"} />
    </>
  );
}
