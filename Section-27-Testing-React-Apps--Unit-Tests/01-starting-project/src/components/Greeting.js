import React, { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);
  const changeTextHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h2>Ahmed Hesham</h2>
      {!changedText && <Output>MERN Stack Developer</Output>}
      {changedText && <p>The Ultimate Developer</p>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
