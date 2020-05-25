import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Navbar from "./components/layout/navbar";
import Dashboard from './components/dashboard/dashboard';
import ProjectDetails from './components/projects/projectdetails';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
import CreateProject from './components/projects/createproject';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/project/:id" component={ProjectDetails}></Route>
          <Route path="/signin" component={SignIn}></Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/createproject" component={CreateProject}></Route>
        </switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
