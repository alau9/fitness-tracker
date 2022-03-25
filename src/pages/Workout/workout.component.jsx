import React, { useState } from "react";
import Header from "../../components/header/header.component";
import Form from "../../components/Form/form.component";
import ExerciseList from "../../components/ExerciseList/exercise-list.component";

const WorkoutPage = () => {
    const[inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([])
  return (
    <div>
      <Header title="Workout" />
      <Form todos={todos} setTodos={setTodos}setInputText={setInputText} inputText={inputText}/>
      <ExerciseList todos={todos} />
    </div>
  );
};

export default WorkoutPage;
