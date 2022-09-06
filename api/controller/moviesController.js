const TopRatedMovie = require('../model/TopRatedMovie');
const UpcomingMovie = require('../model/UpcomingMovie');
const NowPlayingMovie = require('../model/NowPlayingMovie');
const PopularMovie = require('../model/PopularMovie');

// All Movies Lists GET Controller
const getTopRatedMoviesController = (req, res, next) => {
    TopRatedMovie.find()
        .then(movie => {
            res.status(200).json({
                message: 'Top Rated Movies Found',
                movie
            })
        })
        .catch(error => {
            res.status(500).json({
                message: 'Top Rated Movies Not Found',
                error
            })
        })
};

const getUpcomingMoviesController = (req, res, next) => {
        UpcomingMovie.find()
        .then(movie => {
            res.status(200).json({
                message: 'Upcoming Movies Found',
                movie
            })
        })
        .catch(error => {
            res.status(500).json({
                message: 'Upcoming Movies Not Found',
                error
            })
        })
};

const getNowPlayingMoviesController = (req, res, next) => {
        NowPlayingMovie.find()
        .then(movie => {
            res.status(200).json({
                message: 'Now-playing Movies Found',
                movie
            })
        })
        .catch(error => {
            res.status(500).json({
                message: 'Now-playing Movies Not Found',
                error
            })
        })
};

const getPopularMoviesController = (req, res, next) => {
        PopularMovie.find()
        .then(movie => {
            res.status(200).json({
                message: 'Popular Movies Found',
                movie
            })
        })
        .catch(error => {
            res.status(500).json({
                message: 'Popular Movies Not Found',
                error
            })
        })
};

// Single Movie List GET Controller
const getSingleTopRatedMovieController = (req, res, next) => {
    let id = req.params.id;
    TopRatedMovie.findById(id)
        .then(movie => {
            res.status(200).json({
                message: 'Movie Found on Top Rated',
                movie
            })
        })
        .catch(error => {
            res.status(500).json({
                message: 'Movie Not Found on Top Rated',
                error
            })
        })
}

const getSingleUpcomingMovieController = (req, res, next) => {
    let id = req.params.id;
    UpcomingMovie.findById(id)
        .then(movie => {
            res.status(200).json({
                message: 'Movie Found on Upcoming',
                movie
            })
        })
        .catch(error => {
            res.status(500).json({
                message: 'Movie Not Found on Upcoming',
                error
            })
        })
}

const getSingleNowPlayingMovieController = (req, res, next) => {
    let id = req.params.id;
    NowPlayingMovie.findById(id)
        .then(movie => {
            res.status(200).json({
                message: 'Movie Found on Now Playing',
                movie
            })
        })
        .catch(error => {
            res.status(500).json({
                message: 'Movie Not Found on Now Playing',
                error
            })
        })
}

const getSinglePopularMovieController = (req, res, next) => {
    let id = req.params.id;
    PopularMovie.findById(id)
        .then(movie => {
            res.status(200).json({
                message: 'Movie Found on Popular',
                movie
            })
        })
        .catch(error => {
            res.status(500).json({
                message: 'Movie Not Found on Popular',
                error
            })
        })
}

// All POST Method Controller
const postTopRatedMoviesController = (req, res, next) => {
    const movie = new TopRatedMovie({
        title: req.body.title,
        releasedDate: req.body.releasedDate,
        movieType: req.body.movieType,
        description: req.body.description,
        director: req.body.director,
        stars: req.body.stars
    })
    movie.save()
        .then(data => {
            res.status(201).json({
                message: 'Top Rated Movie Added Successfully',
                movie: data
            })
        })
        .catch(error => {
            res.status(500).json({
                message: 'Top Rated Movie Added Failed',
                error
            })
        })
}

const postUpcomingMoviesController = (req, res, next) => {
        const movie = new UpcomingMovie({
        title: req.body.title,
        releasedDate: req.body.releasedDate,
        movieType: req.body.movieType,
        description: req.body.description,
        director: req.body.director,
        stars: req.body.stars
    })
    movie.save()
        .then(data => {
            res.status(201).json({
                message: 'Upcoming Movie Added Successfully',
                movie: data
            })
        })
        .catch(error => {
            res.status(500).json({
                message: 'Upcoming Movie Added Failed',
                error
            })
        })
}

const postNowPlayingMoviesController = (req, res, next) => {
        const movie = new NowPlayingMovie({
        title: req.body.title,
        releasedDate: req.body.releasedDate,
        movieType: req.body.movieType,
        description: req.body.description,
        director: req.body.director,
        stars: req.body.stars
    })
    movie.save()
        .then(data => {
            res.status(201).json({
                message: 'Now Playing Movie Added Successfully',
                movie: data
            })
        })
        .catch(error => {
            res.status(500).json({
                message: 'Now Playing Movie Added Failed',
                error
            })
        })
}

const postPopularMoviesController = (req, res, next) => {
        const movie = new PopularMovie({
        title: req.body.title,
        releasedDate: req.body.releasedDate,
        movieType: req.body.movieType,
        description: req.body.description,
        director: req.body.director,
        stars: req.body.stars
    })
    movie.save()
        .then(data => {
            res.status(201).json({
                message: 'Popular Movie Added Successfully',
                movie: data
            })
        })
        .catch(error => {
            res.status(500).json({
                message: 'Popular Movie Added Failed',
                error
            })
        })
}

// All PUT Method Controller
const updateTopRatedMoviesController = (req, res, next) => {
    let id = req.params.id;
    const updatedMovie = {
        title: req.body.title,
        releasedDate: req.body.releasedDate,
        movieType: req.body.movieType,
        description: req.body.description,
        director: req.body.director,
        stars: req.body.stars
    }
    TopRatedMovie.findByIdAndUpdate(id, { $set: updatedMovie })
        .then(movie => {
            TopRatedMovie.findById(movie._id)
                .then(newMovie => {
                    res.json({
                        message: 'Top Rated Movie Updated Successful',
                        newMovie
                    })
                })
        })
        .catch(error => {
            res.status(500).json({
                message: 'Top Rated Movie Updated Failed',
                error
            })
        })
}

const updateUpcomingMoviesController = (req, res, next) => {
        let id = req.params.id;
    const updatedMovie = {
        title: req.body.title,
        releasedDate: req.body.releasedDate,
        movieType: req.body.movieType,
        description: req.body.description,
        director: req.body.director,
        stars: req.body.stars
    }
    UpcomingMovie.findByIdAndUpdate(id, { $set: updatedMovie })
        .then(movie => {
            UpcomingMovie.findById(movie._id)
                .then(newMovie => {
                    res.json({
                        message: 'Upcoming Movie Updated Successful',
                        newMovie
                    })
                })
        })
        .catch(error => {
            res.status(500).json({
                message: 'Upcoming Movie Updated Failed',
                error
            })
        })
}

const updateNowPlayingMoviesController = (req, res, next) => {
        let id = req.params.id;
    const updatedMovie = {
        title: req.body.title,
        releasedDate: req.body.releasedDate,
        movieType: req.body.movieType,
        description: req.body.description,
        director: req.body.director,
        stars: req.body.stars
    }
    NowPlayingMovie.findByIdAndUpdate(id, { $set: updatedMovie })
        .then(movie => {
            NowPlayingMovie.findById(movie._id)
                .then(newMovie => {
                    res.json({
                        message: 'Now Playing Movie Updated Successful',
                        newMovie
                    })
                })
        })
        .catch(error => {
            res.status(500).json({
                message: 'Now Playing Movie Updated Failed',
                error
            })
        })
}

const updatePopularMoviesController = (req, res, next) => {
        let id = req.params.id;
    const updatedMovie = {
        title: req.body.title,
        releasedDate: req.body.releasedDate,
        movieType: req.body.movieType,
        description: req.body.description,
        director: req.body.director,
        stars: req.body.stars
    }
    PopularMovie.findByIdAndUpdate(id, { $set: updatedMovie })
        .then(movie => {
            PopularMovie.findById(movie._id)
                .then(newMovie => {
                    res.json({
                        message: 'Popular Movie Updated Successful',
                        newMovie
                    })
                })
        })
        .catch(error => {
            res.status(500).json({
                message: 'Popular Movie Updated Failed',
                error
            })
        })
}

// All DELETE Controller
const deleteTopRatedMoviesController = (req, res, next) => {
    let id = req.params.id;
    TopRatedMovie.findByIdAndRemove(id)
        .then(movie => {
            res.json({
                message: 'Top Rated Movie Deleted Successfully',
                movie
            })
        })
        .catch(error => {
            res.status(500).json({
                message: 'Top Rated Movie Can Not Deleted',
                error
            })
        })
}

const deleteUpcomingMoviesController = (req, res, next) => {
        let id = req.params.id;
    UpcomingMovie.findByIdAndRemove(id)
        .then(movie => {
            res.json({
                message: 'Upcoming Movie Deleted Successfully',
                movie
            })
        })
        .catch(error => {
            res.status(500).json({
                message: 'Upcoming Movie Can Not Deleted',
                error
            })
        })
}

const deleteNowPlayingMoviesController = (req, res, next) => {
        let id = req.params.id;
    NowPlayingMovie.findByIdAndRemove(id)
        .then(movie => {
            res.json({
                message: 'Now Playing Movie Deleted Successfully',
                movie
            })
        })
        .catch(error => {
            res.status(500).json({
                message: 'Now Playing Movie Can Not Deleted',
                error
            })
        })
}

const deletePopularMoviesController = (req, res, next) => {
        let id = req.params.id;
    PopularMovie.findByIdAndRemove(id)
        .then(movie => {
            res.json({
                message: 'Popular Movie Deleted Successfully',
                movie
            })
        })
        .catch(error => {
            res.status(500).json({
                message: 'Popular Movie Can Not Deleted',
                error
            })
        })
}

module.exports = {
    getTopRatedMoviesController,
    getUpcomingMoviesController,
    getNowPlayingMoviesController,
    getPopularMoviesController,
    getSingleTopRatedMovieController,
    getSingleUpcomingMovieController,
    getSingleNowPlayingMovieController,
    getSinglePopularMovieController,
    postTopRatedMoviesController,
    postUpcomingMoviesController,
    postNowPlayingMoviesController,
    postPopularMoviesController,
    updateTopRatedMoviesController,
    updateUpcomingMoviesController,
    updateNowPlayingMoviesController,
    updatePopularMoviesController,
    deleteTopRatedMoviesController,
    deleteUpcomingMoviesController,
    deleteNowPlayingMoviesController,
    deletePopularMoviesController
}