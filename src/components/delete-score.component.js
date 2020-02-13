import React, { Component } from 'react';
import axios from 'axios';

export default class DeleteScore extends Component {
    constructor(props){
      super(props);

      this.onDeleteScore = this.onDeleteScore.bind(this);
    }

    onDeleteScore(e){
      e.preventDefault();
      axios.delete('http://localhost:4000/scores/delete/' + this.props.score)
        .then(res => console.log(res.data));
      this.props.unmount();
    }

    render() {
        return (
            <span>
              <input type="button" onClick={this.onDeleteScore} value="Delete Score" className="btn btn-danger" />
            </span>
        )
    }
}
