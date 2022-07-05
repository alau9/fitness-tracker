import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseContext from "../../contexts/firebase";
import { doesUsernameExist } from "../../services/firebase";

const SignUp = () => {
  let BenchPress = {
    name: "Bench Press",
    reps: 10,
    sets: 3,
    id: 1,
  };

  let MilitaryPress = {
    name: "Military Press",
    reps: 10,
    sets: 3,
    id: 2,
  };
  let MachineFlys = {
    name: "Machine Flys",
    reps: 10,
    sets: 3,
    id: 3,
  };
  let PullUps = {
    name: "Pull Ups",
    reps: 10,
    sets: 3,
    id: 4,
  };

  let LatPulldown = {
    name: "Lat Pulldown",
    reps: 10,
    sets: 3,
    id: 5,
  };

  let SeatedRow = {
    name: "Seated Row",
    reps: 10,
    sets: 3,
    id: 6,
  };

  let Squat = {
    name: "Squat",
    reps: 5,
    sets: 3,
    id: 7,
  };

  let CalfRaises = {
    name: "Calf Raises",
    reps: 10,
    sets: 3,
    id: 7,
  };

  let Lunges = {
    name: "Lunges",
    reps: 10,
    sets: 3,
    id: 7,
  };

  let TricepPulldown = {
    name: "Tricep Pulldown",
    reps: 10,
    sets: 3,
    id: 8,
  };

  let LateralRaise = {
    name: "Lateral Raise",
    reps: 10,
    sets: 3,
    id: 8,
  };

  let BicepCurl = {
    name: "Bicep Curl",
    reps: 10,
    sets: 3,
    id: 8,
  };

  let HammerCurl = {
    name: "Hammer Curl",
    reps: 10,
    sets: 3,
    id: 8,
  };

  let RDL = {
    name: "Romanian Dead Lift",
    reps: 10,
    sets: 3,
    id: 8,
  };

  let LegPress = {
    name: "Leg Press",
    reps: 10,
    sets: 3,
    id: 8,
  };

  //default sessions
  let Push = {
    name: "Push",
    workoutList: [
      BenchPress,
      MilitaryPress,
      MachineFlys,
      TricepPulldown,
      LateralRaise,
    ],
    id: 1,
  };

  let Pull = {
    name: "Pull",
    workoutList: [PullUps, LatPulldown, SeatedRow, BicepCurl, HammerCurl],
    id: 2,
  };

  let Legs = {
    name: "Legs",
    workoutList: [Squat, CalfRaises, Lunges, RDL, LegPress],
    id: 3,
  };
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [username, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const handleSignUp = async (event) => {
    event.preventDefault();
    const usernameExists = await doesUsernameExist(username);
    if (!usernameExists.length) {
      try {
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password);

        await createdUserResult.user.updateProfile({
          displayName: username,
        });

        await firebase.firestore().collection("users").add({
          userId: createdUserResult.user.uid,
          username: username.toLowerCase(),
          fullName,
          emailAddress: emailAddress.toLowerCase(),
          sessions: [Push, Pull, Legs],
          dateCreated: Date.now(),
        });

        navigate("/");
      } catch (error) {
        setError(error.message);
      }
    } else {
      setError("That username is already taken,  please try another");
    }
  };

  useEffect(() => {
    document.title = "Signup - Journey";
  }, []);

  return (
    <div>
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={handleSignUp} method="POST">
          <input
            aria-label="Enter your username"
            type="text"
            placeholder="Username"
            className=""
            onChange={({ target }) => setUserName(target.value)}
            value={username}
          />
          <input
            aria-label="Enter your full name"
            type="text"
            placeholder="Full Name"
            className=""
            onChange={({ target }) => setFullName(target.value)}
            value={fullName}
          />
          <input
            aria-label="Enter your email address"
            type="text"
            placeholder="Email address"
            className=""
            onChange={({ target }) => setEmailAddress(target.value)}
            value={emailAddress}
          />
          <input
            aria-label="Enter your password"
            type="password"
            placeholder="Password"
            className=""
            onChange={({ target }) => setPassword(target.value)}
            value={password}
          />
          <button disabled={isInvalid} type="submit">
            Sign Up
          </button>
        </form>
      </div>
      <div onClick={() => navigate("/login")}>Log In</div>
    </div>
  );
};

export default SignUp;
