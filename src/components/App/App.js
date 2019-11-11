import React from 'react';
import { Route, Switch } from 'react-router-dom';
import withBookstoreService from '../Hoc/WithBookstoreService';
import HomePage from '../Pages/HomePage';
import CartPage from '../Pages/CartPage';

const App = ({ bookstoreService }) => {
    console.log(bookstoreService.getBooks());
    return (
            <Switch>
                <Route path="/" 
                       component={HomePage}
                       exact/>
                <Route path="/cart" 
                       component={CartPage}/>
            </Switch>
    )
}

export default withBookstoreService()(App);