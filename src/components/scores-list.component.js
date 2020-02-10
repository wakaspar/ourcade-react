import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


// 'Score' functional component definition
const Score = props => (
  <tr>
    <td className={props.score.score_multiplayer ? 'multiplayer' : ''}>{props.score.score_value}</td>
    <td className={props.score.score_multiplayer ? 'multiplayer' : ''}>{props.score.score_game}</td>
    <td className={props.score.score_multiplayer ? 'multiplayer' : ''}>{props.score.score_multiplayer}</td>
    <td className={props.score.score_multiplayer ? 'multiplayer' : ''}>{props.score.score_player_num}</td>
    <td>
      <Link to={"/edit/" + props.score._id}>Edit</Link>
    </td>
    <td>
      <Link to={"/delete/" + props.score._id}>Delete</Link>
    </td>
  </tr>
)

export default class ScoresList extends Component {

    constructor(props){
      super(props);
      this.state = { scores : [] };
    }

    // Retrieves list of scores from database
    componentDidMount(){
      axios.get('http://localhost:4000/scores/')
        .then( respsonse => {
          this.setState({ scores: respsonse.data });
        })
        .catch(function(error){
          console.log(error);
        })
    }

    // Maps data from this.state & returns instance of 'Score' functional component
    scoreList(){
      return this.state.scores.map(function(currentScore, i){
        return <Score score={currentScore} key={i} />
      })
    }

    // renders Scoreboard table
    render() {
        return (
            <div>
                <h3>Scoreboard</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                  <thead>
                    <tr>
                      <th>Score Value</th>
                      <th>Score Game</th>
                      <th>Score Multiplayer</th>
                      <th>Score Player #</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    { this.scoreList() }
                  </tbody>
                </table>
            </div>
        )
    }
}
