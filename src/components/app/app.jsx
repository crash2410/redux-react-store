import React from 'react';
import {Route, Switch} from 'react-router-dom';
import CartPage from '../pages/cart-page/cart-page'
import MainPage from '../pages/main-page/main-page';
import AppHeader from '../app-header/app-header';
import WithRestoService from '../hoc/with-resto-service';

import Background from './food-bg.jpg';
import ItemPage from '../pages/item-page/item-page';

const App = () => {
    return (
        <div style={{
            background: `url(${Background}) center center/cover no-repeat`,
            height: '100%'
        }} className="app">
            <AppHeader total={50}/>
            <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route exact path='/cart/' component={CartPage}/>
                <Route path='/:id' component={ItemPage}/>
            </Switch>
        </div>
    )
}

export default WithRestoService()(App);