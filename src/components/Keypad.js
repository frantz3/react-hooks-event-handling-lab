import React from "react";

function Keypad() {
  function changeHandler() {
    console.log("Entering password...");
  }
  return <input type="password" onChange={changeHandler}></input>;
}

export default Keypad;
