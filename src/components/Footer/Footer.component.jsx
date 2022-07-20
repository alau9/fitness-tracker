import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Footer = (props) => {
  const navigate = useNavigate();
  return (
    <div className="footer">
        <div>Home</div>
        <div>Create Workout</div>
        <div>Calendar</div>
    </div>
  );
};

export default Footer;