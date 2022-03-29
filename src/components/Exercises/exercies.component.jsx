import React, {useState} from "react";

const Exercise = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
  };

  const [inputNumber, setInputNumber] = useState("")
  const inputNumberHandler = (e) => {
    setInputNumber(e.target.value)
  };
  const submitNumberHandler = (e) => {
    if (e.key === 'Enter') {
      console.log(inputNumber)
    }
  }
  const [inputRep, setInputRep] = useState("")
  const inputRepHandler = (e) => {
    setInputRep(e.target.value)
  };
  const submitRepHandler = (e) => {
    if (e.key === 'Enter') {
      console.log(inputRep)
    }
  }
  return (
    <div className="exercise">
      <li className={`exercise-item ${todo.completed ? "completed" : ''}`}>{text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
      <input
        value={inputNumber}
        onChange={inputNumberHandler}
        type="number"
        className="set-input"
        onKeyDown={submitNumberHandler}
        placeholder="Sets"
      />
      <input
        value={inputRep}
        onChange={inputRepHandler}
        type="number"
        className="set-input"
        onKeyDown={submitRepHandler}
        placeholder="Reps"
      />
    
    </div>
  );
};

export default Exercise;
