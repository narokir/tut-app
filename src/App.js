import React from "react";
//import logo from "./logo.svg";
import Hello from "./Components/Hello";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Hello />

        <Switch>
          <Route exact path="/">
            <h1 className="font-bold text-2xl">Home Page</h1>
          </Route>

          <Route path="/about">
            <h1 className="font-bold text-2xl">About Page</h1>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
