const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UpcomingMovieSchema = new Schema({
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

const UpcomingMovie = model('UpcomingMovie', UpcomingMovieSchema);
module.exports = UpcomingMovie;