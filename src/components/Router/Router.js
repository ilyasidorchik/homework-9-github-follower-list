// Реализуйте роутер

// Роутер должен иметь роуты для компонентов Login и Search
// Вам потребуется использовать PrivateRoute для Search
// По умолчанию нужно перенаправлять на страницу логина

import React, { PureComponent } from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

import Login from '../Login';
import Search from '../Search';
import PrivateRoute from '../PrivateRoute';

export default class Router extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Login} exact />
                    <PrivateRoute path='/search' component={Search} />
                    <Redirect to='/' />
                </Switch>
            </BrowserRouter>
        );
    }
}