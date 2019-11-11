const initialState = {
    books: [
        {
            id: 1,
            title: 'The Secret History of Twin Peaks',
            author: 'Mark Frost'
        }, 
        {
            id: 2,
            title: 'Harry Potter',
            author: 'J. K. Rowling'             
        }, 
        {
            id: 3,
            title: 'Lord of the Rings',
            author: 'J. R. R. Tolkien'           
        } 
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_LOADED': 
            return {
                books: action.payload
            };

        default:
            return state;
    }
};

export default reducer;