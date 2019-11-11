import React from 'react';
import BookList from '../BookList/BookList';

const HomePage = () => {
    return (
        <div className="jumbotron">
            <h1>Home Page</h1>
            <BookList />
        </div>
    )
}

export default HomePage;