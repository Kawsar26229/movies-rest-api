const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const NowPlayingMovieSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    releasedDate: {
        type: String,
        required: true
    },
    movieType: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    stars: [String]
});

const NowPlayingMovie = model('NowPlayingMovie', NowPlayingMovieSchema);
module.exports = NowPlayingMovie;