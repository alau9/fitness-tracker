import React from "react";
import Exercise from "../Exercises/exercies.component";

const ExerciseList = ({ todos, setTodos }) => {
  console.log(todos);
  return (
    <div className="list-container">
      <ul className="exercise-list">
        {todos.map((todo) => (
          <Exercise
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            todo={todo}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;
