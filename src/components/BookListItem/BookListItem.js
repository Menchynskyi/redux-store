import React, { Fragment } from 'react';

const BookListItem = ({ book }) => {
    const { title, author } = book
    return (
        <Fragment>
            <span>Title: {title}</span>
            <span>Author: {author}</span>
        </Fragment>
    )
}

export default BookListItem;