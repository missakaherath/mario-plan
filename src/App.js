import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Navbar from "./components/layout/navbar";
import Dashboard from './components/dashboard/dashboard';
// import SignedInLinks from "./components/layout/singedinlinks"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <switch>
          <Route path="/" component={Dashboard}></Route>
        </switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
