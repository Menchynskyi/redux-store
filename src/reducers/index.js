import updateBookList from './bookList';
import updateShoppingCart from './shoppingCart';

const reducer = (state, action) => {
    return {
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    }
};

export default reducer;