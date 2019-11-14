import React from 'react';
import { Route, Switch } from 'react-router-dom';
import withBookstoreService from '../Hoc/WithBookstoreService';
import HomePage from '../Pages/HomePage';
import CartPage from '../Pages/CartPage';
import Header from '../Header/Header';

const App = ({ bookstoreService }) => {
    return (
        <main role="main" className="container">
            <Header/>
            <Switch>
                <Route path="/" 
                       component={HomePage}
                       exact/>
                <Route path="/cart" 
                       component={CartPage}/>
            </Switch>
        </main>
    )
}

export default withBookstoreService()(App);