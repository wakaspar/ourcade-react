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

  render() {
    return (
      <div>
        <p>Welcome to CreateScore Component</p>
      </div>
    )
  }
}
