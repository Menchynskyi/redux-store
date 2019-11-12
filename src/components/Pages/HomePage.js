import React from 'react';
import BookList from '../BookList/BookList';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

const HomePage = () => {
    return (
        <div>
            <BookList />
            <ShoppingCart />
        </div>
    )
}

export default HomePage;