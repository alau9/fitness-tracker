import React from "react";
import Exercise from "../Exercises/exercies.component";

const ExerciseList = ({ todos }) => {
  console.log(todos);
  return (
    <div className="list-container">
      <ul className="exercise-list">
        {todos.map((todo) => (
          <Exercise text={todo.text} />
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;
