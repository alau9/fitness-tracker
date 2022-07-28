import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./footer.styles.scss";

const Footer = (props) => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="items" onClick={() => {
        navigate("/")
      }}>Home</div>
      <div className="items" onClick={() => {
        navigate("/createworkout")
      }}>Create Workout</div>
      <div className="items" onClick={() => {
        navigate("/history")
      }}>History</div>
    </div>

  );
};

export default Footer;