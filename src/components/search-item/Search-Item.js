import React from 'react'
import './search-item.css'

const SearchItem = ({movie, onClick}) => {
  
  return (
    <div key={movie.id} className="item-movie" onClick={() => onClick(movie)}>
        <img className="item-movie_img" src={movie.image} alt="movie"/>
        <div className="item-movie_title">{movie.title}</div>
    </div>
  )
}

export default SearchItem