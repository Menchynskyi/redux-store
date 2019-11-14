import React from 'react';

import BookListItem from '../BookListItem/BookListItem';

import './BookList.css';

const BookList = ({ books, onAddToCart }) => {
    return (
        <ul className="book-list">
            {
                books.map(book => {
                    return (
                        <li key={book.id}>
                            <BookListItem 
                                book={book}
                                onAddToCart={() => onAddToCart(book.id)} />
                        </li>
                    )
                })
            }

        </ul>
    )
};

export default BookList;