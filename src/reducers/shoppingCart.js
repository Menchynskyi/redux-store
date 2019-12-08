const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ];
  };

  if (idx === - 1) {
    return [
      ...cartItems,
      item
    ]
  };

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ];
};

const updateCartItem = (book, item = {}, quantity) => {
  const {
    id = book.id,
    count = 0,
    title = book.title,
    total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price
  };
};

const updateOrder = (state, bookId, quantity) => {
  const { bookList: { books }, shoppingCart: { cartItems } } = state;

  const book = books.find(({ id }) => id === bookId);
  const itemId = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[itemId];

  const newItem = updateCartItem(book, item, quantity);
  const newArr = updateCartItems(cartItems, newItem, itemId);

  return {
    cartItems: newArr,
    orderTotal: newArr.reduce((a, b) => a + b.total, 0),
    orderCount: newArr.reduce((a, b) => a + b.count, 0)
  };
};

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
      orderCount: 0
    };
  };

  switch (action.type) {
    case 'BOOK_ADD_TO_CART':
      return updateOrder(state, action.payload, 1);

    case 'BOOK_COUNT_DECREASE_IN_CART':
      return updateOrder(state, action.payload, -1);

    case 'BOOK_DELETE_FROM_CART':
      const delItem = state.shoppingCart.cartItems.find(({ id }) => id === action.payload);
      return updateOrder(state, action.payload, -delItem.count);

    default:
      return state.shoppingCart;
  };
};

export default updateShoppingCart;