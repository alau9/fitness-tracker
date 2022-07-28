import { useContext } from "react";
import { WorkoutListContext } from "../../contexts/workout-list.context";
import "./exercise.styles.scss";

const Exercise = ({ name, rep, set, id }) => {
  const { deleteFromWorkoutList } = useContext(WorkoutListContext);


  const deleteHandler = (e) => {
    e.preventDefault();
    deleteFromWorkoutList(id);
  };

  return (
    <div className="exercise">
      <div className="exercise-item">{name.toUpperCase()}</div>
      <div className="exercise-item">R:{rep}</div>
      <div className="exercise-item">S:{set}</div>{" "}
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};

export default Exercise;
