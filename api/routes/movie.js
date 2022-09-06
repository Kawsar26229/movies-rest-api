const express = require('express');
const { getTopRatedMoviesController, getUpcomingMoviesController, getNowPlayingMoviesController, getPopularMoviesController, getSingleTopRatedMovieController, getSingleUpcomingMovieController, getSingleNowPlayingMovieController, getSinglePopularMovieController, postTopRatedMoviesController, postUpcomingMoviesController, postNowPlayingMoviesController, postPopularMoviesController, updateTopRatedMoviesController, updateUpcomingMoviesController, updateNowPlayingMoviesController, updatePopularMoviesController, deleteTopRatedMoviesController, deleteUpcomingMoviesController, deleteNowPlayingMoviesController, deletePopularMoviesController } = require('../controller/moviesController');
const authenticate = require('../middleware/authenticate');
const router = express.Router();

// All GET Method
router.get('/top-rated', getTopRatedMoviesController);

router.get('/upcoming', getUpcomingMoviesController);

router.get('/now-playing', getNowPlayingMoviesController);

router.get('/popular', getPopularMoviesController);

router.get('/top-rated/:id', authenticate, getSingleTopRatedMovieController);

router.get('/upcoming/:id', authenticate, getSingleUpcomingMovieController);

router.get('/now-playing/:id', authenticate, getSingleNowPlayingMovieController);

router.get('/popular/:id', authenticate, getSinglePopularMovieController);

// All POST Method
router.post('/top-rated', authenticate, postTopRatedMoviesController);

router.post('/upcoming', authenticate, postUpcomingMoviesController);

router.post('/now-playing', authenticate, postNowPlayingMoviesController);

router.post('/popular', authenticate, postPopularMoviesController);

// All PUT Method
router.put('/top-rated/:id', authenticate, updateTopRatedMoviesController);

router.put('/upcoming/:id', authenticate, updateUpcomingMoviesController);

router.put('/now-playing/:id', authenticate, updateNowPlayingMoviesController);

router.put('/popular/:id', authenticate, updatePopularMoviesController);

// All DELETE Method
router.delete('/top-rated/:id', authenticate, deleteTopRatedMoviesController);

router.delete('/upcoming/:id', authenticate, deleteUpcomingMoviesController);

router.delete('/now-playing/:id', authenticate, deleteNowPlayingMoviesController);

router.delete('/popular/:id', authenticate, deletePopularMoviesController);

module.exports = router;