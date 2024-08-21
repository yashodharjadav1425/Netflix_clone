import React, { useEffect, useState } from 'react';
import Detail from './Detail';
import "./index.css";

export const CardComponent = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            .then(res => res.json())
            .then(data => setPopularMovies(data.results));
    }, []);

    const handleMovieClick = (movieId) => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then((response) => response.json())
            .then((data) => setSelectedMovie(data));
    };

    return (
            <div className='container main-component d-flex justify-content-center align-items-center'>
                <div>
                    <div className="container cards-container text-center">
                        <div className='row'>
                            {popularMovies.map(movie => (
                                <div key={movie.id} className='col col-4 col-sm-3 col-md-2 col-lg-2 mb-4'>
                                    <img
                                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                        className="img-thumbnail"
                                        alt={movie.title}
                                        onClick={() => handleMovieClick(movie.id)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pass the selectedMovie and setSelectedMovie as props to Detail component */}
                <Detail selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />
            </div>
    );
};
