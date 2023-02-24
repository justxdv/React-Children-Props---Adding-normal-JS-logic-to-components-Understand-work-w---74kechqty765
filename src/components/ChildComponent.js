import React, { useState, Children } from "react";

const ChildComponent = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setOutputValue(value * value);
  };

  return (
    <div id="child">
      {Children.only(children)}
      <input type="number" id="input" value={inputValue} onChange={handleInputChange} />
      <p id="output">{outputValue}</p>
    </div>
  );
};

export default ChildComponent;
