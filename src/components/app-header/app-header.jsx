import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import {updateTotalPrice} from "../../actions/action";

const AppHeader = ({items, updateTotalPrice,totalPrice}) => {

    useEffect(() => {
        updateTotalPrice();
    }, [items, updateTotalPrice])

    return (
        <header className="header">
            <Link className="header__link" to="/">
                Menu
            </Link>
            <Link className="header__link" to="/cart/">
                <img className="header__cart" src={cartIcon} alt="cart"/>
                Total: {totalPrice} $
            </Link>
        </header>
    )
};

const mapStateToProps = ({items,totalPrice}) => {
    return {
        items,
        totalPrice
    }
};

const mapDispatchToProps = {
    updateTotalPrice
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);