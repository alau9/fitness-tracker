import React, { useState } from "react";

const Exercise = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const [inputNumber, setInputNumber] = useState("");
  const inputNumberHandler = (e) => {
    setInputNumber(e.target.value);
  };
  const submitNumberHandler = (e) => {
    if (e.key === "Enter") {
      console.log(inputNumber);
    }
  };
  const [inputRep, setInputRep] = useState("");
  const inputRepHandler = (e) => {
    setInputRep(e.target.value);
  };

  const submitRepHandler = (e) => {
    if (e.key === "Enter") {
      console.log(inputRep);
    }
  };
  return (
    <div className="exercise">
      <li className={`exercise-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <input
        value={inputNumber}
        onChange={inputNumberHandler}
        type="number"
        className="set-input"
        onKeyDown={submitNumberHandler}
        placeholder="Sets"
      />
      <input
        value={inputRep}
        onChange={inputRepHandler}
        type="number"
        className="set-input"
        onKeyDown={submitRepHandler}
        placeholder="Reps"
      />
          <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Exercise;
