import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bookDeleteFromCart, bookAddToCart, bookCountDecreaseInCart } from '../../actions';
import PropTypes from 'prop-types';
import './ShoppingCart.css';

const ShoppingCart = ({ items, total, onInc, onDec, onDelete }) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;

    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            className="btn btn-outline-warning btn-sm"
            onClick={() => onDec(id)}
          >
            <i className="fa fa-minus-circle" />
          </button>
          <button
            className="btn btn-outline-success btn-sm"
            onClick={() => onInc(id)}
          >
            <i className="fa fa-plus-circle" />
          </button>

          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => onDelete(id)}
          >
            <i className="fa fa-trash-o" />
          </button>
        </td>
      </tr>
    )
  };

  if (items.length === 0) {
    return (
      <div className="empty-shopping-cart">
        <Link to="/">
          <i className="fa fa-shopping-basket" />
          <span>Your shopping cart is empty</span>
        </Link>
      </div>
    )
  };

  return (
    <div className="shopping-cart">
      <h2>Your order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Book Title</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map(renderRow)}
        </tbody>
      </table>

      <h2 className="total">Total: ${total}</h2>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = {
  onInc: (id) => bookAddToCart(id),
  onDec: (id) => bookCountDecreaseInCart(id),
  onDelete: (id) => bookDeleteFromCart(id)
};

ShoppingCart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  total: PropTypes.number,
  onInc: PropTypes.func.isRequired,
  onDec: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);