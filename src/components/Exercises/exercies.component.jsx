import React from "react";

const Exercise = ({text}) => {
  return (
    <div className="exercise">
      <li className="exercise-item">{text}</li>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Exercise;
