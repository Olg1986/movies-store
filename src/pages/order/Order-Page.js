import React from 'react'
import {useSelector} from 'react-redux'
import OrderItem from '../../components/order-item/Order-Item'
import {calcTotalPrice, enumerate} from '../../components/utils'
import Layout from '../../components/layout/Layout'
import './order-page.css'

const OrderPage = () => {
  
    const items = useSelector((state) => state.cart.itemsInCart);

    if(items.length < 1) {
        return <h1 className="order-title">Ваша корзина пуста!</h1>
    }

    return (
        <Layout>
        <div className="order-page">
            <div className="order-page__left">
                { items.map(movie => <OrderItem movie={movie}/>)}
            </div>
            <div className="order-page__right">
                <div className="order-page__total-price">
                    <span>{ items.length } { enumerate(items.length, ['товар', 'товара', 'товаров'])} на сумму {calcTotalPrice(items)} руб.</span>
                </div>
            </div>
        </div>
        </Layout>
    )
  
}

export default OrderPage