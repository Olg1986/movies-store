import React, {useState} from 'react'
import {useGetCardsQuery} from '../../store/movies/moviesSlice'
import Main from '../../components/main/Main'
import MovieItem from '../../components/movie-item/Movie-Item'
import SearchPanel from '../../components/search-panel/Search-Panel'
import Layout from '../../components/layout/Layout'
import './home.css'



const Home = () => {
    const [typeCards, setTypeCards] = useState('');
    const {data = []} = useGetCardsQuery(typeCards);

  const handleClick = (item) => {
    setTypeCards(item);
  }

    
    return (
        <>
        <Layout>
        <Main/>
          <SearchPanel handleClick={handleClick} items={["Кино", "Семейный", "Фантастика", "Мультфильм", "Детям", "Фэнтези"]}/>
          <div className="home">
            {data.map(movie => <MovieItem movie={movie} key={movie.id}/>)}
          </div>
        </Layout>
        </>
    );
}

export default Home;
