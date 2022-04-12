import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteItemsFromCart } from '../../store/cart/cartSlice'
import { AiOutlineCloseCircle } from "react-icons/ai"
import './Cart-Item.css'

const CartItem = ({title, price, id}) => {
    const dispatch = useDispatch()

    const handleDeleteClick = () => {
        dispatch(deleteItemsFromCart(id))
    }

  return (
    <div className="cart-item">
      <span>{title} </span>
      <div className="cart-item__price">
        <span>{price} руб.</span>
        <AiOutlineCloseCircle
          size={15}
          className="cart-item__delete-icon"
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  )
}

export default CartItem