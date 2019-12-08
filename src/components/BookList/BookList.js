import React from 'react';
import PropTypes from 'prop-types';
import BookListItem from '../BookListItem/BookListItem';

import './BookList.css';

const BookList = ({ books, onAddToCart }) => (
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
);

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  onAddToCart: PropTypes.func.isRequired
};

export default BookList;