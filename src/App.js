import { useState } from "react";

import Color from "./Components/Color";

const COLORS = [
  {
    id: "red",
    color: "red"
  },
  {
    id: "blue",
    color: "blue"
  },
  {
    id: "green",
    color: "green"
  }
];

export default function App() {
  const [numberOfSquares, setNumberOfSquaresValue] = useState(0);
  const [colorsToDisplay, setColorsToDisplay] = useState([]);

  const generateColors = () => {
    let generatedColors = [];
    for (let index = 0; index < numberOfSquares; index++) {
      const referIndex = (index + 1) % COLORS.length;
      const colorIndexToRefer =
        referIndex === 0 ? COLORS.length - 1 : referIndex - 1;
      const colorToDisplay = COLORS[colorIndexToRefer];
      generatedColors.push(colorToDisplay);
    }
    return generatedColors;
  };

  const DisplaySquares = () => {   
    return colorsToDisplay.map((colorToDisplay, index) => {
      return (
        <Color
          index={index}
          deleteColor={deleteColor}
          key={index}
          {...colorToDisplay}
        />
      );
    });
  };

  const deleteColor = (colorIndexToDelete) => {
    setColorsToDisplay(
      colorsToDisplay.filter((colorToDisplay, index) => {
        return index !== colorIndexToDelete;
      })
    );
  };

  const handleInputChange = (e) => {
    setNumberOfSquaresValue(e.target.value);
  };

  const colorsList = () => {
    const generatedColors = generateColors();
    setColorsToDisplay(generatedColors);
  };

  

  return (
    <div className="App">
      {/* {displaySquares} */}
      <label>Enter number of squares</label>:<br />
      <input
        type="number"
        value={numberOfSquares}
        onChange={handleInputChange}
      />
      <br /><br />
      <button onClick={colorsList}>Display Squares</button>
      <DisplaySquares />
    </div>
  );
}
