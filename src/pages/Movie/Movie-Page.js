import React from 'react'
import {useSelector} from 'react-redux'
import MovieBuy from '../../components/movie-buy/Movie-Buy'
import MovieCover from '../../components/movie-cover/Movie-Cover'
import MovieGenre from '../../components/movie-genre/Movie-Genre'
import Layout from '../../components/layout/Layout'
import './movie-page.css'

const MoviePage = () => {
  const movie = useSelector(state => state.movie.currentMovie)
  if (!movie) return null
  
  return (
    <Layout>
    <div className="movie-page">
      <h1 className="movie-page__title">{movie.title}</h1>
      <div className="movie-page__content">
        <div className="movie-page__left">
        <iframe
            width="90%"
            height="400px"
            src={movie.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="movie-page__right">
        <MovieCover image={`/${movie.image}`}/>
          <p>{movie.description}</p>
          <p >Популярные метки для этого продукта:</p>
          {movie.type.map((item, i )=> <MovieGenre item={item} key={item[i]}/>)}
          <div className="movie-page__buy-muvie">
            <MovieBuy movie={movie} />
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default MoviePage

