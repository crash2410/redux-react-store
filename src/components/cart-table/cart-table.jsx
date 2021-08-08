import React from 'react';
import {connect} from 'react-redux';

import './cart-table.scss';
import {addedToCart, deleteFromCart, deleteItemFromCart, sendingItemsFromCart} from "../../actions/action";

const CartTable = ({items, deleteFromCart, addedToCart, deleteItemFromCart, totalPrice, sendingItemsFromCart}) => {
    const content = items.map((item) => {
        const {title, price, url, id, count} = item;
        return (
            <div key={id} className="cart__item">
                <img src={url} className="cart__item-img" alt={title}/>
                <div className="cart__item-block">
                    <div className="cart__item-titles">
                        <div className="cart__item-titles-name">Наименование:</div>
                        <div className="cart__item-titles-price">Цена:</div>
                        <div className="cart__item-titles-count">Количество:</div>
                    </div>
                    <div className="cart__item-information">
                        <div className="cart__item-information-title">{title}</div>
                        <div className="cart__item-information-price">{price}$</div>
                        <div className="cart__item-information-count">
                            <span onClick={() => deleteItemFromCart(id)}>-</span>
                            {count}
                            <span onClick={() => addedToCart(id)}>+</span>
                        </div>
                    </div>
                </div>
                <div onClick={() => deleteFromCart(id)} className="cart__close">&times;</div>
            </div>
        )
    })

    const notItems = content.length === 0 ? <div className="cart__not-items">Корзина пуста</div> :
        (
            <>
                <div className="cart__total-price">
                    Сумма вашего заказа: {totalPrice}$
                    <button onClick={() => sendingItemsFromCart()} className="cart__send-order">Отправить заказ</button>
                </div>
            </>
        );

    return (
        <View content={content} notItems={notItems}/>
    );
};

const View = ({content, notItems}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {content}
                {notItems}
            </div>

        </>
    )
}

const mapStateToProps = ({items, totalPrice}) => {
    return {
        items,
        totalPrice
    }
};

const mapDispatchToProps = {
    deleteFromCart,
    addedToCart,
    deleteItemFromCart,
    sendingItemsFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);