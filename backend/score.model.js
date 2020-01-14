const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Score = new Schema({
    score_value: {
        type: String
    },
    score_game: {
        type: String
    },
    score_multiplayer: {
      type: Boolean
    },
    score_player_num: {
        type: String
    }
});

module.exports = mongoose.model('Score', Score);
