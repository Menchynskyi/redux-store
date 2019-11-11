export default class BookstoreService {

    getBooks() {
        return [
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
        ];
    }
    
}