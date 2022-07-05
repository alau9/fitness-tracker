import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseContext from "../../contexts/firebase";
import "./login.styles.scss";

const Login = () => {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
      navigate("/")
    } catch (error) {
      setEmailAddress("");
      setPassword("");
      setError(error.message);
    }
  };

  useEffect(() => {
    document.title = 'Login - Journey';
  }, []);

  return (
    <div>
      {error && <p className="">{error}</p>}
      <form onSubmit={handleLogin} method="post">
        <input
          type="text"
          aria-label="Enter you email address"
          placeholder="Email Address"
          onChange={({ target }) => setEmailAddress(target.value)}
          value={emailAddress}
        />
        <input
          aria-label="Enter your password"
          type="password"
          placeholder="Password"
          onChange={({ target }) => setPassword(target.value)}
          value={password}
        />
        <button
          disabled={isInvalid}
          type="submit"
          className={``}
        >
          Log In
        </button>
      </form>
      <div onClick={() => navigate("/signup")}>
          Sign Up
      </div>
    </div>
  );
};

export default Login;
