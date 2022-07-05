import FirebaseContext from "../../contexts/firebase";
import useUser from "../../hooks/use-user";
import { useNavigate } from "react-router-dom";

const History = ({ user: loggedInUser }) => {
  const navigate = useNavigate();
  const { user, setActiveUser } = useUser(loggedInUser?.uid);

  return (
    <div>
      <div>Exercises</div>
      <div>{user?.routineLog[0].date}</div>
      <div>{user?.routineLog[0].rep}</div>
      <div>{user?.routineLog[0].set}</div>
    {/* Calendar  where you can select date to see that date's logs, while viewing logs can go into each exercise to see prgoress made */}

    </div>
  );
};

export default History;
