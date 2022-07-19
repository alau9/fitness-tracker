import FirebaseContext from "../../contexts/firebase";
import Calendar from "../../components/Calendar/calendar.component"
import useUser from "../../hooks/use-user";
import { useNavigate } from "react-router-dom";

const History = ({ user: loggedInUser }) => {
  const navigate = useNavigate();
  const { user, setActiveUser } = useUser(loggedInUser?.uid);

  return (
    <div>
      <Calendar />
    {/* Calendar  where you can select date to see that date's logs, while viewing logs can go into each exercise to see prgoress made */}

    </div>
  );
};

export default History;
