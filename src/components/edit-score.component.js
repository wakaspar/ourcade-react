import React, { Component } from 'react';
import axios from 'axios';

import DeleteScore from "./delete-score.component";

export default class EditScore extends Component {

    constructor(props){
      super(props);
      // binds methods to class constructor
      this.onChangeScoreValue = this.onChangeScoreValue.bind(this);
      this.onChangeScoreGame = this.onChangeScoreGame.bind(this);
      this.onChangeScorePlayerNum = this.onChangeScorePlayerNum.bind(this);
      this.onChangeScoreMultiplayer = this.onChangeScoreMultiplayer.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.handleDeleteScore = this.handleDeleteScore.bind(this);

      this.state = {
        score_value: '',
        score_game: '',
        score_multiplayer: false,
        score_player_num: ''
      }
    }

    componentDidMount(){
      axios.get('http://localhost:4000/scores/' + this.props.match.params.id)
        .then(response => {
          this.setState({
            score_value : response.data.score_value,
            score_game : response.data.score_game,
            score_multiplayer : response.data.score_multiplayer,
            score_player_num : response.data.score_player_num
          })
        })
        .catch(function(error){
          console.log(error);
        })
    }

    // onChange methods
    onChangeScoreValue(e) {
        this.setState({
            score_value: e.target.value
        });
    }
    onChangeScoreGame(e) {
        this.setState({
            score_game: e.target.value
        });
    }
    onChangeScorePlayerNum(e) {
        this.setState({
            score_player_num: e.target.value
        });
    }
    onChangeScoreMultiplayer(e) {
        this.setState({
            score_multiplayer: e.target.value
        });
    }
    // form onSubmit method
    onSubmit(e) {
       e.preventDefault();
       const obj = {
         score_value: this.state.score_value,
         score_game: this.state.score_game,
         score_multiplayer: this.state.score_multiplayer,
         score_player_num: this.state.score_player_num
       };
       console.log(obj);
       axios.post('http://localhost:4000/scores/update/' + this.props.match.params.id, obj)
           .then(res => console.log(res.data));

       this.props.history.push('/');
    }

    handleDeleteScore(){
        this.props.history.push('/');
    }

    render() {
        return (
          <div style={{marginTop: 10}}>
            <h3>Edit Score</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                  <label>Score value: </label>
                  <input  type="text"
                          className="form-control"
                          value={this.state.score_value}
                          onChange={this.onChangeScoreValue}
                          placeholder={this.state.score_value}
                          />
              </div>
              <div className="form-group">
                  <label>Game played: </label>
                  <input  type="text"
                          className="form-control"
                          value={this.state.score_game}
                          onChange={this.onChangeScoreGame}
                          />
              </div>
              <div className="form-group">
                  <div className="form-check form-check-inline">
                      <input  className="form-check-input"
                              type="radio"
                              name="multiplayerOptionsTrue"
                              id="multiplayerTrue"
                              value="true"
                              checked={this.state.score_multiplayer==='true'}
                              onChange={this.onChangeScoreMultiplayer}
                              />
                      <label className="form-check-label">Multiplayer</label>
                  </div>
                  <div className="form-check form-check-inline">
                      <input  className="form-check-input"
                              type="radio"
                              name="multiplayerOptionsFalse"
                              id="multiplayerFalse"
                              value="false"
                              checked={this.state.score_multiplayer==='false'}
                              onChange={this.onChangeScoreMultiplayer}
                              />
                      <label className="form-check-label">Single player</label>
                  </div>
               </div>
               <div className="form-group">
                 <label>Player number: </label>
                 <br/>
                 <div className="form-check form-check-inline">
                     <input  className="form-check-input"
                             type="radio"
                             name="playerNumberOptions"
                             id="playerOne"
                             value="1"
                             checked={this.state.score_player_num==='1'}
                             onChange={this.onChangeScorePlayerNum}
                             />
                     <label className="form-check-label">1</label>
                 </div>
                 <div className="form-check form-check-inline">
                     <input  className="form-check-input"
                             type="radio"
                             name="playerNumberOptions"
                             id="playerTwo"
                             value="2"
                             checked={this.state.score_player_num==='2'}
                             onChange={this.onChangeScorePlayerNum}
                             />
                     <label className="form-check-label">2</label>
                 </div>
                 <div className="form-check form-check-inline">
                     <input  className="form-check-input"
                             type="radio"
                             name="playerNumberOptions"
                             id="playerThree"
                             value="3"
                             checked={this.state.score_player_num==='3'}
                             onChange={this.onChangeScorePlayerNum}
                             />
                     <label className="form-check-label">3</label>
                 </div>
                 <div className="form-check form-check-inline">
                     <input  className="form-check-input"
                             type="radio"
                             name="playerNumberOptions"
                             id="playerFour"
                             value="4"
                             checked={this.state.score_player_num==='4'}
                             onChange={this.onChangeScorePlayerNum}
                             />
                     <label className="form-check-label">4</label>
                 </div>
              </div>

              <div className="form-group">
                  <input type="submit" value="Edit Score" className="btn btn-primary" style={{marginRight: 10}} />
                  <DeleteScore score={this.props.match.params.id} unmount={this.handleDeleteScore} />
              </div>
            </form>
          </div>
        )
    }
}
