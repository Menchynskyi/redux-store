export default class BookstoreService {
    data = [
        {
            id: 1,
            title: 'The Secret History of Twin Peaks',
            author: 'Mark Frost',
            price: 20,
            cover: 'https://upload.wikimedia.org/wikipedia/en/8/8a/The_Secret_History_of_Twin_Peaks_cover.jpg'
        }, 
        {
            id: 2,
            title: 'Harry Potter and the Order of the Phoenix',
            author: 'J. K. Rowling',
            price: 15,
            cover: 'https://upload.wikimedia.org/wikipedia/en/7/70/Harry_Potter_and_the_Order_of_the_Phoenix.jpg'             
        }, 
        {
            id: 3,
            title: 'Lord of the Rings',
            author: 'J. R. R. Tolkien' ,
            price: 14,
            cover: 'https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif'         
        } 
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('Something bad happened'));
                } else {
                    resolve(this.data);
                }
            }, 700);
        });
    }
    
}