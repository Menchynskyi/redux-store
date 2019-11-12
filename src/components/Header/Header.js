import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({itemsCount, total}) => {
    return (
        <header className="header row">
            <Link to="/" className="logo text-dark" >Redux Store</Link>
            <Link to="/cart" className="shopping-cart">
                <i className="cart-icon fa fa-shopping-cart" />
                {itemsCount} items (${total})
            </Link>
        </header>
    )
};

export default Header;
