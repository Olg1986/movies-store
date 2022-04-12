import React, {useState, useCallback} from 'react'
import {BiCartAlt} from 'react-icons/bi'
import { useSelector } from 'react-redux'
import CartMenu from '../cart-menu/Cart-Menu'
import ItemsInCart from '../items-in-cart/Items-In-Cart'
import {useNavigate} from 'react-router-dom'
import {calcTotalPrice} from '../utils'

import './Cart-Block.css';


const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const items = useSelector((state) => state.cart.itemsInCart)
    const navigate = useNavigate()
    const totalPrice = calcTotalPrice(items)

    const handleGoToOrderClick = useCallback(() => {
        setIsCartMenuVisible(false);
        navigate('/order');
      }, [navigate]);

    return (
        <div className="cart-block">
      <ItemsInCart quantity={items.length}/>
      <BiCartAlt
        color="white"
        size={25}
        className="cart-icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className="total-price">{totalPrice} руб.</span>
      ) : null}
      {isCartMenuVisible && <CartMenu onClick={ handleGoToOrderClick }/>}
    </div>
    );
}

export default CartBlock;
