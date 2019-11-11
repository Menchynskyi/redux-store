import React from 'react';
import { BookstoreConsumer } from '../BookstoreServiceContext/BookstoreServiceContext';

const withBookstoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BookstoreConsumer>
                {
                    (bookstoreService) => {
                        return (
                            <Wrapped {...props} bookstoreService={bookstoreService}/>
                        )
                    }
                }
            </BookstoreConsumer>
        )
    }
}

export default withBookstoreService;