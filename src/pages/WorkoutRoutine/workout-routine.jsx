import Header from "../../components/header/header.component";
import ExerciseLog from "../../components/ExerciseLog/exercise-log.component";
import { WorkoutListContext } from "../../contexts/workout-list.context";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import "./workout-routine.styles.scss";
import FirebaseContext from "../../contexts/firebase";
import useUser from "../../hooks/use-user";

const WorkoutRoutine = ({ user: loggedInUser }) => {
  const { user, setActiveUser } = useUser(loggedInUser?.uid);
  const { name } = useParams();
  const { workoutList, session } = useContext(WorkoutListContext);
  const [currentRoutine, setCurrentRoutine] = useState(session[1]);
  const navigate = useNavigate();
  const capitalize = (str) => {
    let first = str.charAt(0);
    let upper = first.toUpperCase();
    let remain = str.slice(1);
    return upper + remain;
  };

  const [tempArray, setTempArray] = useState([]);

  const [routineLog, setRoutineLog] = useState("");

  useEffect(() => {
    let index = session.findIndex((el) => el.name.toLowerCase() === name);
    setCurrentRoutine(() => session[index]);
  }, [currentRoutine, session, name]);

  return (
    <div className="workout-routine">
      <Header title={capitalize(name)} />
      <div className="exercise-list">
        {currentRoutine?.workoutList.map((workout) => (
          <ExerciseLog
            name={workout.name}
            rep={workout.reps}
            set={workout.sets}
            id={workout.id}
            user={user}
            routineLog={routineLog}
            setRoutineLog={setRoutineLog}
            setTempArray={setTempArray}
          />
        ))}
      </div>
      <div></div>
      
      {tempArray.length > 0 &&
        tempArray.map((el) => (
          <div className="temp-log">
            <div className="name">{(el.name).toUpperCase()}</div>
            <div className="set">REPS:{el.rep}</div>
            <div className="rep">SET:{el.set}</div>
            <div className="rep">WEIGHT:{el.weight} LBS</div>
          </div>
        ))}
      <div className="finish-workout" onClick={() => navigate("/")}>
        Finish Workout
      </div>
    </div>
  );
};

//todo make a new exercise list with reps and set input

export default WorkoutRoutine;
