import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import MovieCover from '../movie-cover/Movie-Cover'
import MovieGenre from '../movie-genre/Movie-Genre'
import MovieBuy from '../movie-buy/Movie-Buy'
import {setCurrentMovie} from '../../store/movie-id/movieIdSlece'
import './Movie-Item.css';

const MovieItem = ({movie}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    

    const handleClick = () => {
        dispatch(setCurrentMovie(movie));
        navigate(`/app/${movie.title}`)

    }

    return (
        <div className="movie-item" onClick={handleClick}>
            <MovieCover image={movie.image}/>
            <div className="movie-item_details">
                <span className ="movie-item_title">{movie.title}</span>
                <div className ="movie-item_genre">
                    {movie.type.map((item, i )=> <MovieGenre item={item} key={item[i]}/>)}
                </div>
                <div className ="movie-item_buy">
                    <MovieBuy movie={movie}/>
                </div>
            </div>
        </div>
    );
}

export default MovieItem;
