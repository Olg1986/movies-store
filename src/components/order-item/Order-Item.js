import React from 'react'
import { useDispatch } from 'react-redux'
import { AiOutlineCloseCircle } from "react-icons/ai"
import MovieCover  from '../movie-cover/Movie-Cover'
import {deleteItemsFromCart} from '../../store/cart/cartSlice'
import './order-item.css';


const OrderItem = ({ movie }) => {
    const dispatch = useDispatch()
    const handleDeleteClick = () => {
        dispatch(deleteItemsFromCart(movie.id))
    }
    return (
        <div className="order-item">
            <div className="order-item__cover">
                <MovieCover image={movie.image}/>
            </div>
            <div className="order-item__title">
                <span> {movie.title} </span>
            </div>
            <div className="order-item__price">
                <span>{movie.price} руб.</span>
                <AiOutlineCloseCircle
                    size={25}
                    className="cart-item__delete-icon"
                    onClick={handleDeleteClick}
                />
            </div>
        </div>
    )
}

export default OrderItem