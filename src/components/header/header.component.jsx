import {useContext} from "react";
import { useNavigate } from "react-router-dom";
import './header.styles.scss'
import FirebaseContext from "../../contexts/firebase";

const Header = (props) =>{
    const navigate = useNavigate();
    const { firebase } = useContext(FirebaseContext);
    return(
        <div className="header">
            <div className="title">{props.title}</div>
            <div className="sign-out">
                <div onClick={() => {
                    firebase.auth().signOut();
                    navigate("/login")
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      firebase.auth().signOut();
                      navigate("/login")
                    }
                  }} >
                      Sign Out
                  </div>
            </div>
        </div>
    )
}

export default Header