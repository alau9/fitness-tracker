import React, { useContext, useState } from "react";
import { WorkoutListContext } from "../../contexts/workout-list.context";
import "./form.styles.scss";

const Form = () => {
  const { addToWorkoutList } = useContext(WorkoutListContext);

  const [inputText, setInputText] = useState("");
  const [inputReps, setInputReps] = useState();
  const [inputSets, setInputSets] = useState();

  const [error, setError] = useState("");

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const inputRepsHandler = (e) => {
    setInputReps(e.target.value);
  };

  const inputSetsHandler = (e) => {
    setInputSets(e.target.value);
  };
  const submitWorkoutListHandler = (e) => {
    e.preventDefault();
    if (inputText === "" || inputReps === "" || inputSets === "") {
      setError("Please fill out all fileds")
    }
    else {
      setError("")
      addToWorkoutList(inputText, inputReps, inputSets, Math.random() * 1000);
      setInputText("");
      setInputReps("");
      setInputSets("");
    }

  };
  return (
    <form className="form">
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="exercise-input"
        placeholder="Exercise"
        required
      />
      <input
        value={inputReps}
        onChange={inputRepsHandler}
        type="number"
        className="exercise-input"
        placeholder="Reps"
        required
      />
      <input
        value={inputSets}
        onChange={inputSetsHandler}
        type="number"
        className="exercise-input"
        placeholder="Sets"
        required
      />
      <div className="add">
        <div className="add-text">Add Exercise</div>
        <button
          onClick={submitWorkoutListHandler}
          className="add-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
      </div>
      {error && <p className="error-message">Please fill in all fields</p>}
    </form>
  );
};

export default Form;
