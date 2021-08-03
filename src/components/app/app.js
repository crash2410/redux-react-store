import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainPage, CartPage } from '../pages';
import AppHeader from '../app-header';
import WithRestoService from '../hoc/with-resto-service';

import Background from './food-bg.jpg';

const App = ({ RestoService }) => {
    return (
        <div style={{ background: `url(${Background}) center center/cover no-repeat` }} className="app">
            <AppHeader total={50} />
            <Switch>
                <Route exact path='/'>
                    <MainPage />
                </Route>
                <Route exact path='/cart/'>
                    <CartPage />
                </Route>
            </Switch>
        </div>
    )
}

export default WithRestoService()(App);