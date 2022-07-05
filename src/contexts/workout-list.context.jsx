import { createContext, useState } from "react";


//default exercises
let BenchPress = {
  name: "Bench Press",
  reps: 10,
  sets: 3,
  id: 1,
};

let MilitaryPress = {
  name: "Military Press",
  reps: 10,
  sets: 3,
  id: 2,
};
let MachineFlys = {
  name: "Machine Flys",
  reps: 10,
  sets: 3,
  id: 3,
};
let PullUps = {
  name: "Pull Ups",
  reps: 10,
  sets: 3,
  id: 4,
};

let LatPulldown = {
  name: "Lat Pulldown",
  reps: 10,
  sets: 3,
  id: 5,
};

let SeatedRow = {
  name: "Seated Row",
  reps: 10,
  sets: 3,
  id: 6,
};

let Squat = {
  name: "Squat",
  reps: 5,
  sets: 3,
  id: 7,
};

let CalfRaises = {
  name: "Calf Raises",
  reps: 10,
  sets: 3,
  id: 7,
};

let Lunges = {
  name: "Lunges",
  reps: 10,
  sets: 3,
  id: 7,
};

let TricepPulldown ={
  name: "Tricep Pulldown",
  reps: 10,
  sets: 3,
  id: 8,
};

let LateralRaise ={
  name: "Lateral Raise",
  reps: 10,
  sets: 3,
  id: 8,
};

let BicepCurl ={
  name: "Bicep Curl",
  reps: 10,
  sets: 3,
  id: 8,
};

let HammerCurl ={
  name: "Hammer Curl",
  reps: 10,
  sets: 3,
  id: 8,
};

let RDL ={
  name: "Romanian Dead Lift",
  reps: 10,
  sets: 3,
  id: 8,
};

let LegPress= {
  name: "Leg Press",
  reps: 10,
  sets: 3,
  id: 8,
};



//default sessions
let Push = {
  name: "Push",
  workoutList: [BenchPress, MilitaryPress, MachineFlys,TricepPulldown, LateralRaise],
  id: 1,
};

let Pull = {
  name: "Pull",
  workoutList: [PullUps, LatPulldown, SeatedRow, BicepCurl, HammerCurl],
  id: 2,
};

let Legs = {
  name: "Legs",
  workoutList: [Squat, CalfRaises, Lunges, RDL, LegPress ],
  id: 3,
};

//workoutlist context
export const WorkoutListContext = createContext();

//UserContext
export  const UserContext = createContext(null);


export function WorkoutListProvider({ children }) {
  const [workoutList, setWorkoutList] = useState([]);

  const addToWorkoutList = (name, reps, sets, id) => {
    setWorkoutList((prevState) => [...prevState, { name, reps, sets, id }]);
  };

  const deleteFromWorkoutList = (id) => {
    setWorkoutList((prevState) => prevState.filter((el) => el.id !== id));
  };

  const clearWorkList = () => {
    setWorkoutList(() => []);
  };

  //session context
  const [session, setSession] = useState([Push, Pull, Legs]);

  const addToSession = (el) => {
    setSession((prevState) => [...prevState, el]);
  };

  const deleteFromSession = (id) => {
    setSession((prevState) => prevState.filter((el) => el.id !== id));
  };


  
  return (
    <WorkoutListContext.Provider
      value={{
        workoutList,
        setWorkoutList,
        clearWorkList,
        addToWorkoutList,
        deleteFromWorkoutList,
        session,
        setSession,
        addToSession,
        deleteFromSession,
      }}
    >
      {" "}
      {children}{" "}
    </WorkoutListContext.Provider>
  );
}

//session  context
