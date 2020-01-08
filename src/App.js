import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateScore from "./components/create-score.component";
import EditScore from "./components/edit-score.component";
import ScoresList from "./components/scores-list.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>Welcome to Ourcade React!</h2>
        </div>
        <Route path="/" exact component={ScoresList} />
        <Route path="/edit/:id" component={EditScore} />
        <Route path="/create" component={CreateScore} />
      </Router>
    );
  }
}

export default App;
