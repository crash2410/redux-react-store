import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc/index';
import {menuError, menuLoaded, menuRequsted, addedToCart, deleteFromCart} from '../../actions/index';
import Spinner from '../spinner';
import Error from '../error/index';

import './menu-list.scss';

class MenuList extends Component {
    componentDidMount() {
        this.props.menuRequsted();

        const { RestoService } = this.props;
        RestoService.getMenuItems()
            .then(res => this.props.menuLoaded(res))
            .catch(e => this.props.menuError());
    }

    render() {
        const {menuItems, loading, error, addedToCart} = this.props;

        const items = menuItems.map((menuItem) => {
            return <MenuListItem key={menuItem.id} menuItem={menuItem} onAddToCart={() => addedToCart(menuItem.id)}/>
        })
        const spinner = loading ? <Spinner /> : null;
        const errors = error ? <Error /> : null;

        return (
            <View items={items} spinner={spinner} errors={errors}/>
        )
    }
}

const View = ({ items, spinner, errors }) => {
    return (
        <ul className="menu__list">
            {spinner}
            {items}
            {errors}
        </ul>
    )
}


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
    menuError,
    addedToCart,
    deleteFromCart
};


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));