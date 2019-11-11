import React, { useState } from 'react';
import { BookstoreProvider } from '../BookstoreServiceContext/BookstoreServiceContext';
import BookstoreService from '../../services/bookstore-service';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';

const App = () => {
    const { getBooks } = new BookstoreService();

    const [books, setBooks] = useState(getBooks());

    return (
        <BookstoreProvider value={books}>
            <ErrorBoundry>
                <div className="jumbotron">
                    <span>Redux Store</span>
                </div>
            </ErrorBoundry>
        </BookstoreProvider>
    )
}

export default App;