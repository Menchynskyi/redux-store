import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchBooks, bookAddToCart } from '../actions';
import compose from '../utils/compose';
import PropTypes from 'prop-types';

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
  };

  if (error) {
    return <ErrorIndicator />
  };

  return <BookList
    books={books}
    onAddToCart={onAddToCart} />
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

BookListContainer.propTypes = {
  error: PropTypes.bool,
  books: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  fetchBooks: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);