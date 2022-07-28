import {useContext} from "react";
import { WorkoutListContext } from "../../contexts/workout-list.context";
import Exercise from "../Exercise/exercise.component";


const ExerciseList = () => {
  const { workoutList } = useContext(WorkoutListContext);
  
  return (
    <div className="list-container">
      <div className="exercise-list">
        {workoutList.map((workout) => (
          <Exercise
           name={workout.name}
           rep={workout.reps}
           set={workout.sets}
           id={workout.id}
          />
     
        ))}
      </div>
    
    </div>
  );
};

export default ExerciseList;
