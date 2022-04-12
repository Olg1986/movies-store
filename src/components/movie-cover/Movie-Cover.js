import React from 'react';
import './Movie-Cover.css';

const MovieCover = ({image = ""}) => {
    return (
        <img src={image} className="movie-cover" alt="painting"/>
    );
}

export default MovieCover;
