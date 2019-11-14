import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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

const mapStateToProps = ({ shoppingCart: { orderTotal, orderCount } }) => {
    return {
        itemsCount: orderCount,
        total: orderTotal
    }
}

export default connect(mapStateToProps)(Header);