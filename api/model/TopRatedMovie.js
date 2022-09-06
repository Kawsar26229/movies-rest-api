const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const TopRatedMovieSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    releasedDate: {
        type: String,
        required: true
    },
    movieType: [String],
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

const TopRatedMovie = model('TopRatedMovie', TopRatedMovieSchema);
module.exports = TopRatedMovie;