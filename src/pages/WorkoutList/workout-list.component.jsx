import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/header/header.component";
import { useNavigate } from "react-router-dom";
import Routine from "../../components/Routine/routine.component";
import "./workout-list.styles.scss";
import PropTypes from "prop-types";

import useUser from "../../hooks/use-user";
import LoggedInUserContext from "../../contexts/logged-in-user";
import { WorkoutListContext } from "../../contexts/workout-list.context";

const WorkoutListPage = ({ user: loggedInUser }) => {
  const { user, setActiveUser } = useUser(loggedInUser?.uid);
  const navigate = useNavigate();

  const {session, setSession} = useContext(WorkoutListContext);

  
  useEffect(() => {
    document.title = "Workouts - Journey";
  }, []);

  useEffect(() =>{
    setSession(user?.sessions);
    return () =>  {
      setSession(user?.sessions)
    }
  }, [user?.sessions])
  

  return (
    <LoggedInUserContext.Provider value={{ user, setActiveUser }}>
      <div className="workoutlist-page">
        <Header title="Workouts" />
        <div className="workouts">
          <div>
            {" "}
            {session?.map((el) => (
              <Routine name={el.name} workouts={el.workoutList} id={el.id} user={user}/>
            ))}
          </div>
        </div>
        <div
          onClick={() => navigate("/createworkout")}
          className="create-workout"
        >
          CREATE WORKOUT
        </div>
        <div
          onClick={() => {
            console.log(session);
          }}
        >
          console
        </div>
      </div>
    </LoggedInUserContext.Provider>
  );
};

WorkoutListPage.propTypes = {
  user: PropTypes.object.isRequired,
};

export default WorkoutListPage;
