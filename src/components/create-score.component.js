import React, { Component } from 'react';

export default class CreateScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score_value: '',
      score_game: '',
      score_player_num: '',
      score_multiplayer: false
    }
  }
  
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

  render() {
    return (
      <div>
        <p>Welcome to CreateScore Component</p>
      </div>
    )
  }
}
