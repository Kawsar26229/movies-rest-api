const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const moviesRoute = require('./api/routes/movie');
const userRoute = require('./api/routes/user');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movies');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// All Routers
app.use('/api/movies', moviesRoute);
app.use('/api/users', userRoute)

app.get('/', (req, res, next) => {
    res.send('<h1>Welcome to the Movies World</h1>')
});

const PORT = process.env.PORT | 4545;
app.listen(PORT, () => {
    console.log(`Listening on the port ${PORT}`);
});