import React from "react";

const Color = ({ color, index, deleteColor }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        id="square"
        style={{
          background: color,
          padding: "15px",
          width: "15px",
          height:"15px",
          margin: "10px"
        }}
      ></div>
      <button
        onClick={() => {
          deleteColor(index);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Color;
