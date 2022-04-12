import React, {useState, useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useGetFilterQuery} from '../../store/movies/moviesSlice'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {setCurrentMovie} from '../../store/movie-id/movieIdSlece'
import SearchItem from '../search-item/Search-Item'
import SearchInput from '../search-input/Search-Input'
import CartBlock from '../cart-block/Cart-Block'
import Sidebar from '../sidebar/Sidebar'


import "./Header.css"


const Header = () => {
const [name, setName] = useState('')
const {data = []} = useGetFilterQuery(name)
const navigate = useNavigate()
const dispatch = useDispatch()
const elem = useRef(null)
const [isSidebarShow, setIsSidebarShow] = useState(false)


const handleClick = (item) => {
    if (item.length === 0) {
        elem.current.style.display = 'none';
    }
    elem.current.style.display = 'flex';
    setName(item)
}

const handleMovieClick = (movie) => {
    dispatch(setCurrentMovie(movie))
    navigate(`/app/${movie.title}`)
    elem.current.style.display = 'none'
}

const handleOutsideClick = () => {
    elem.current.style.display = 'none'
};

useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
},[])



  const toggleSidebar = () => {
    setIsSidebarShow(!isSidebarShow)
  }

    return (
            <div className="header">
            
            <div className="wrapper">
                <Link to="/" className="header__store-title">
                    Movie Store
                </Link>
                <SearchInput onClick={handleClick}/>
            </div>
            <div ref={elem} className="box">
                {
                data && data.map(item => {
                return <SearchItem movie={item} onClick={handleMovieClick} />
                })
            }
            </div>
            <Sidebar 
                isSidebarShow={isSidebarShow}
                onClick={toggleSidebar}
            />
            <div className="wrapper header__cart-btn">
                <CartBlock/>
            </div>
           
        </div>
    );
}

export default Header;
