import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {setItemInCart, deleteItemsFromCart} from '../../store/cart/cartSlice'
import Button from '../button/Button'
import './Movie-Buy.css';

const MovieBuy = ({movie}) => {
    const dispatch = useDispatch()
    const items = useSelector((state) => state.cart.itemsInCart)
    const isItemInCart = items.some((item) => item.id ===  movie.id)

    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemInCart) {
          dispatch(deleteItemsFromCart(movie.id));
        } else {
          dispatch(setItemInCart(movie));
        }
      };
    return (
        <div className="movie-buy">
            <span className="movie-buy_price">{movie.price} руб.</span>
            <Button
                type={isItemInCart ? "secondary" : "primary" }
                onClick={handleClick}
            >
                {isItemInCart ? "Убрать из корзины" : "В Корзину"}
            </Button>
        </div>
    );
}

export default MovieBuy;
