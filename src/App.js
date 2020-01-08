import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

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
