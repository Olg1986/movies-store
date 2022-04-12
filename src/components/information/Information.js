import React from 'react'
import MovieGenre from '../movie-genre/Movie-Genre'
import SliderBuy from '../slider-buy/Slider-Buy'
import './information.css'

const Information = ({title, type}) => {
  return (
    <div className="info">
        <h2 className="info-title">{title}</h2>
        {
            type && type.map((item, i) => <MovieGenre key={i} item={item}/>)
        }
        
        <SliderBuy/>
    </div>
  )
}

export default Information