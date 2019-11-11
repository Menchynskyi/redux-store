import { createContext } from 'react';

const { 
    Provider: BookstoreProvider,
    Consumer: BookstoreConsumer
} = createContext();

export {
    BookstoreProvider, 
    BookstoreConsumer
};