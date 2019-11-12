import React, { useEffect } from 'react';
import BookListItem from '../BookListItem/BookListItem';
import { connect } from 'react-redux';
import withBookstoreService from '../Hoc/WithBookstoreService';
import { booksLoaded, booksRequested, booksError } from '../../actions';
import compose from '../../utils/compose';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import './BookList.css';

const BookList = (props) => {
    const { error, books, loading, fetchBooks } = props;

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <ErrorIndicator />
    }

    return (
        <ul className="book-list">
            {
                books.map(book => {
                    return (
                        <li key={book.id}>
                            <BookListItem book={book} />
                        </li>
                    )
                })
            }

        </ul>
    )
};

const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps;
    return {
        fetchBooks: () => {

            dispatch(booksRequested());
            bookstoreService.getBooks()
                .then((data) => dispatch(booksLoaded(data)))
                .catch((err) => dispatch(booksError(err)));

        }
    }
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);