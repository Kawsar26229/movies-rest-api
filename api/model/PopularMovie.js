const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const PopularMovieSchema = new Schema({
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

const PopularMovie = model('PopularMovie', PopularMovieSchema);
module.exports = PopularMovie;