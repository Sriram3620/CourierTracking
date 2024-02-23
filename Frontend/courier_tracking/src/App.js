import {Route,Switch} from "react-router-dom"
import './App.css';
import TrackingForm from './Components/TrackingForm';
import LoginForm from "./Components/LoginForm";
import SignUp from "./Components/SignUp";
import ProtectedRoute from "./Components/ProtectedRoute";
import Home from "./Components/Home";
import TrackingDetails from "./Components/TrackingDetails";
import Admin from "./Components/AdminPage";
import TrackingContext from "./Context/Context";
import { useState } from "react";
function App() {
  const [TrackingNumber,setTrackingNumber]=useState('hello')
  const changeTracking=(num)=>
  {
    setTrackingNumber(num)
  }
  return (
    <div> 
     <TrackingContext.Provider value={{TrackingNumber,changeTracking:changeTracking}}>
     <Switch>
      <Route exact path="/login" component={LoginForm}></Route>
      <Route exact path="/signup" component={SignUp}></Route>
      <ProtectedRoute exact path="/" component={Home} ></ProtectedRoute>
      <ProtectedRoute exact path="/tracking-details" component={TrackingDetails} ></ProtectedRoute>
      <ProtectedRoute exact path="/admin" component={Admin} ></ProtectedRoute>
     </Switch>
     </TrackingContext.Provider>
    </div>
  );
}

export default App;
