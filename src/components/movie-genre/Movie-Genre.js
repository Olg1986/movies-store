import React from 'react';
import './Movie-Genre.css';

const MovieGenre = ({item = ''}) => {
    return (
        <span className="movie-genre">
            {item}
        </span>
    );
}

export default MovieGenre;
