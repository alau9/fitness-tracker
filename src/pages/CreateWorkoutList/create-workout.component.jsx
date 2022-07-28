import React, { useState, useContext } from "react";
import Header from "../../components/header/header.component";
import Form from "../../components/Form/form.component";
import ExerciseList from "../../components/ExerciseList/exercise-list.component";
import { useNavigate } from "react-router-dom";
import { WorkoutListContext } from "../../contexts/workout-list.context";
import "./create-workout.styles.scss";
import useUser from "../../hooks/use-user";
import FirebaseContext from "../../contexts/firebase";

import LoggedInUserContext from "../../contexts/logged-in-user";

const CreateWorkoutPage = ({ user: loggedInUser }) => {


  
  const navigate = useNavigate();
  const { workoutList, clearWorkList } = useContext(WorkoutListContext);

  const { user, setActiveUser } = useUser(loggedInUser.uid);
  const [inputName, setInputName] = useState("");
  

  const { firebase, FieldValue } = useContext(FirebaseContext);
 
  const inputNameHandler = (e) => {
    e.preventDefault();
    setInputName(e.target.value);
  };

  let routine = {
    name: "",
    workoutList: [],
    id: 0,
  };

  const createRoutine =  async () => {
    routine.name = inputName;
    routine.workoutList = [...workoutList];
    routine.id = Math.random() * 1000;
    clearWorkList();
 
    await firebase.firestore().collection('users').doc(user.docId).update({sessions: FieldValue.arrayUnion(routine)  })
   
    navigate("/");
  };

  return (
    <div className="create-workout">
      <Header title="Create Workout" />
      <input
        className="session-name"
        value={inputName}
        placeholder="Session Name"
        type="text"
        onChange={inputNameHandler}
        required
      />
      <Form />
      <ExerciseList />
      <div className="done" onClick={createRoutine}>
        Create
      </div>
      <div className="home" onClick={() => navigate("/")}>
        Home
      </div>
    </div>
  );
};

export default CreateWorkoutPage;
