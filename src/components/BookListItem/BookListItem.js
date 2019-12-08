import React from 'react';
import './BookListItem.css';
import PropTypes from 'prop-types';

const BookListItem = ({ book, onAddToCart }) => {
  const { title, author, price, cover } = book;

  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={cover} alt={title} />
      </div>
      <div className="book-description">
        <span href="#" className="book-title">{title}</span>
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        <button
          className="btn btn-info add-to-cart"
          onClick={onAddToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

BookListItem.propTypes = {
  book: PropTypes.object,
  onAddToCart: PropTypes.func
};

export default BookListItem;