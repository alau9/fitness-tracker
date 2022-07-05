import { useContext, useEffect } from "react";
import { WorkoutListContext } from "../../contexts/workout-list.context";
import { useNavigate } from "react-router-dom";
import "./routine.styles.scss";
import FirebaseContext from "../../contexts/firebase";
import LoggedInUserContext from "../../contexts/logged-in-user";
import useUser from "../../hooks/use-user";
import { useCollectionData} from "react-firebase-hooks/firestore"

const Routine = ({ name, id, user }) => {


  const navigate = useNavigate();

  // const { user, setActiveUser } = useUser(loggedInUser.userId);
  const { firebase, FieldValue } = useContext(FirebaseContext);

  const { deleteFromSession } = useContext(WorkoutListContext);

  const findRoutineById = (id) => {
    let newArr = user.sessions.filter((el) => el.id === id)
    return(newArr[0])
  }

  const deleteHandler = async (e) => {
    e.preventDefault();
    deleteFromSession(id)
   await firebase.firestore().collection('users').doc(user.docId).update({sessions: FieldValue.arrayRemove(findRoutineById(id))  })
  };

  let  nameVar = name?.toString()

  return (
    <div className="routine">
      <div
        onClick={() => navigate(`workoutroutine/${nameVar.toLowerCase()}`)}
        className="workout-name"
      >
        {nameVar?.toUpperCase()}
      </div>
      <button onClick={deleteHandler} className="delete-button">
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};

export default Routine;
