import React, { Component } from 'react';
import { connect } from 'react-redux';
import WithRestoService from '../hoc/index';
import { menuLoaded, menuRequsted, menuError } from '../../actions/index';
import Spinner from '../spinner';
import Error from '../error/index';

import './itemPage.css';

class ItemPage extends Component {
    componentDidMount() {
        const { menuItems, menuRequsted, RestoService, menuLoaded, menuError } = this.props;
        if (menuItems.length === 0) {
            menuRequsted();

            RestoService.getMenuItems()
                .then(res => menuLoaded(res))
                .catch(e => menuError());
        }
    }

    render() {
        const { loading, error, match } = this.props;

        if (loading) {
            return (
                <div className="item_page">
                    <Spinner />
                </div>
            )
        }

        if (error) {
            return (
                <div className="item_page">
                    <Error />
                </div>
            )
        }

        console.log(match.params)

        const item = this.props.menuItems.find(el => +el.id === +this.props.match.params.id)
        const{title, url, category, price} = item;

        return (
            <div className = "item_page">
                <div className="menu__item item_block">
                     <div className="menu__title">{title}</div>
                    <img className="menu__img" src={url} alt={title}></img>
                    <div className="menu__category">Category: <span>{category}</span></div>
                    <div className="menu__price">Price: <span>{price}$</span></div>
                    <button className="menu__btn">Add to cart</button>
                    <span className = {`menu__category_Img ${category}`}></span> 
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchToProps = {
    menuLoaded,
    menuRequsted,
    menuError
};


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(ItemPage));