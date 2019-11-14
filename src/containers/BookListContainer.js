import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchBooks, bookAddToCart } from '../actions';
import compose from '../utils/compose';

import withBookstoreService from '../components/Hoc/WithBookstoreService';
import Spinner from '../components/Spinner/Spinner';
import ErrorIndicator from '../components/ErrorIndicator/ErrorIndicator';
import BookList from '../components/BookList/BookList';

const BookListContainer = (props) => {
    const { error, books, loading, fetchBooks, onAddToCart } = props;

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <ErrorIndicator />
    }
    
    return <BookList 
                books={books}
                onAddToCart={onAddToCart}/>
};

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
    return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
    return bindActionCreators({
        fetchBooks: fetchBooks(bookstoreService),
        onAddToCart: bookAddToCart
    }, dispatch);
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);