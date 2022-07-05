import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorkoutListPage from "./pages/WorkoutList/workout-list.component";
import CreateWorkoutListPage from "./pages/CreateWorkoutList/create-workout.component";
import ProgressPage from "./pages/Progress/progress.component";
import WorkoutRoutine from "./pages/WorkoutRoutine/workout-routine";
import History from "./pages/History/history.component";
import { WorkoutListProvider, userContext } from "./contexts/workout-list.context"
import Login from "./pages/Login/login.component";
import SignUp from "./pages/Signup/signup.component";
import useAuthListener from "./hooks/use-auth-listener"
import ProtectedRoute from './helpers/protected-route';


function App() {

  const { user } = useAuthListener();

  return (

    <WorkoutListProvider value={{ user }}>
      <BrowserRouter>
        <Routes>
          <Route  exact path="/"   element={  <WorkoutListPage user={user}/> } />
          <Route exact path="/createworkout" element={<CreateWorkoutListPage user={user}/>} />
          <Route exact path="/progress" element={<ProgressPage />} />
          <Route exact path="/workoutroutine/:name" element={<WorkoutRoutine user={user}/>} />
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/signup" element={<SignUp/>}></Route>
          <Route exact path="/history" element={<History  user={user}/>}></Route>
        </Routes>
      </BrowserRouter>
    </WorkoutListProvider>
  );
}

export default App;
