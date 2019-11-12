import React from 'react';
import './BookListItem.css';

const BookListItem = ({ book }) => {
    const { title, author, price, cover } = book
    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={cover} alt={title}/>
            </div>
            <div className="book-description">
                <span href="#" className="book-title">{title}</span>
                <div className="book-author">{author}</div>
                <div className="book-price">${price}</div>
                <button className="btn btn-info add-to-cart">Add to cart</button>
            </div>
        </div>
    )
}

export default BookListItem;