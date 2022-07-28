import { useContext, useState } from "react";

import "./exercise-log.styles.scss";
import FirebaseContext from "../../contexts/firebase";

const ExerciseLog = ({
  name,
  rep,
  set,
  setRoutineLog,
  user,
  setTempArray
}) => {
  let options = Array.from(Array(parseInt(set)).keys());

  const [error, setError] = useState("");

  const { firebase, FieldValue } = useContext(FirebaseContext);

  const [inputWeight, setInputWeight] = useState("");
  const [inputReps, setInputReps] = useState();
  const [inputSet, setInputSet] = useState();
  let log = {
    name: "",
    rep: 0,
    set: 0,
    id: 0,
    date: 0,
    weight:0
  };

  const handleLogWorkout = async (event) => {
    try {
      event.preventDefault();
      setError("");
      log.name = name;
      log.rep = inputReps;
      log.set = inputSet;
      log.id = Math.random() * 1000;
      log.date = Date.now();
      log.weight = inputWeight
      setRoutineLog((prevState) => [...prevState, log]);
 
      await firebase
        .firestore()
        .collection("users")
        .doc(user.docId)
        .update({ routineLog: FieldValue.arrayUnion(log) });
        setTempArray((prevState) => [...prevState, log])
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  const inputWeightHandler = (e) => {
    setInputWeight(e.target.value);
  };

  const inputRepsHandler = (e) => {
    setInputReps(e.target.value);
  };

  const inputSetsHandler = (e) => {
    setInputSet(e.target.value);
  };

  return (
    <div className="exercise-log">
      <div className="exercise">{name}</div>
      <form className="exercise">
        <input
          className="reps"
          type="number"
          placeholder={`${rep}`}
          value={inputReps}
          onChange={inputRepsHandler}
        ></input>
        <select
          className="set"
          type="number"
          placeholder="sets"
          value={inputSet}
          onChange={inputSetsHandler}
        >
          <option value="" defaultValue className="default">
            set
          </option>
          {options.map((i) => (
            <option>{i + 1}</option>
          ))}
        </select>
        <input
          className="weight"
          type="number"
          placeholder="lbs"
          value={inputWeight}
          onChange={inputWeightHandler}
        ></input>
        <button className="submit-button" onClick={handleLogWorkout}>
          Log Set
        </button>
        {error && <p className="error-message">Please fill in all fields</p>}
      </form>
      <div></div>
    </div>
  );
};

export default ExerciseLog;
