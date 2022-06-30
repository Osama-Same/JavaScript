import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/register";
import Navbar from "./components/Navbar/Navbar";
import GetUsers from "./components/GetUsers/GetUsers";
import Home from "./components/Home/Home"
import Profile from "./components/Profile/Profile";
// functional component
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/users">
          <Navbar />
          <GetUsers />
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/Home/:idUser'>
          <Navbar/>
           <Home/>
        </Route>
        <Route exact path='/GetUsers'>
          <Navbar/>
           <GetUsers/>
        </Route>
        <Route exact path='/Profile/:idUser'>
          <Navbar/>
           <Profile/>
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
