import { React, useState, useEffect } from "react";

export const ColorCodes = () => {
  const [color, setColor] = useState();
  const [text, setText] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [showText, setShowText] = useState(false);
  const [colors, setColors] = useState(Array.from({ length: 3 }));

  const generateColors = () => {
   const randomColors = colors.map((color) => {
      const randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
      return "#" + randomColor;
    });
    const randomIndex = Math.floor(Math.random() * 3);
    setColor(randomColors[randomIndex]);
    setColors(randomColors);
  };

  const checkAnswer = (answer) => {
    if (answer === color) {
      setText('Correct!')
    } else {
      setText('Incorrect')
    }
    setShowText(true);
    setShowButton(true);
  }

  const restartGame = () => {
    generateColors();
    setShowText(false);
    setShowButton(false);
  };

  useEffect(() => {
    generateColors();
  }, [])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Color Codes</h1>
      {/* Randomly generate the HEX below. */}
      <h2>What color is this?</h2>
      <h2>{color}</h2>
      <div style={{
         display: "flex",
         flexDirection: "row",
         alignItems: "center",
         justifyContent: "center"
      }}>
      {colors.map((currentColor, index) => (
      <div 
        style={{
          id: index,
          height: 100,
          width: 100,
          backgroundColor: currentColor
        }} 
        data-testid={
          currentColor === color ? 
          "correct-color" : "incorrect-color"
        } 
        onClick={() => 
          checkAnswer(currentColor)}>
      </div>))}
    </div>
      <text>{showText ? text : ''}</text>
      <div>{showButton ? <button onClick={() => restartGame()}>Play Again?</button> : '' }</div>
      </div>
  );
};
