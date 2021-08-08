import React, {Component} from 'react';
import MenuListItem from '../menu-list-item/menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc/with-resto-service';
import {menuError, menuLoaded, menuRequested, addedToCart, deleteFromCart} from '../../actions/action';
import Spinner from '../spinner/spinner';
import Error from '../error/error'

import './menu-list.scss';

class MenuList extends Component {
    componentDidMount() {
        if(this.props.menuItems.length === 0){
            this.props.menuRequsted();
        }
        this.onDataLoaded();

    }

    onDataLoaded = () => {
        const { RestoService } = this.props;
        RestoService.getMenuItems()
            .then(res => this.props.menuLoaded(res))
            .catch(() => this.props.menuError());
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
    menuRequsted: menuRequested,
    menuError,
    addedToCart,
    deleteFromCart
};


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));