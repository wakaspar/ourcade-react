import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg"

import CreateScore from "./components/create-score.component";
import EditScore from "./components/edit-score.component";
import ScoresList from "./components/scores-list.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <a class="navbar-brand" href="/" target="_blank">
             <img src={logo} width="30" height="30" alt="Ourcade React" />
           </a>
           <Link to="/" className="navbar-brand">Ourcade React</Link>
           <div className="collpase navbar-collapse">
             <ul className="navbar-nav mr-auto">
               <li className="navbar-item">
                 <Link to="/" className="nav-link">Scoreboard</Link>
               </li>
               <li className="navbar-item">
                 <Link to="/create" className="nav-link">Create Score</Link>
               </li>
             </ul>
           </div>
         </nav>
         <br/>
         {/* Route Definitons - NOTE: keep inside bootstrap container  */}
         <Route path="/" exact component={ScoresList} />
         <Route path="/edit/:id" component={EditScore} />
         <Route path="/create" component={CreateScore} />

        </div>
      </Router>
    );
  }
}

export default App;
