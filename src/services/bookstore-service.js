export default class BookstoreService {

  data = [
    { author: 'Mark Frost', cover: 'https://upload.wikimedia.org/wikipedia/en/8/8a/The_Secret_History_of_Twin_Peaks_cover.jpg', id: 1, price: 20, title: 'The Secret History of Twin Peaks' },
    { author: 'J.K.Rowling', cover: 'https://upload.wikimedia.org/wikipedia/en/7/70/Harry_Potter_and_the_Order_of_the_Phoenix.jpg', id: 2, price: 15, title: 'Harry Potter and the Order of the Phoenix' },
    { author: 'J.R.R.Tolkien', cover: 'https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif', id: 3, price: 27, title: 'Lord of the Rings' },
    { author: 'George R.R.Martin', cover: 'https://upload.wikimedia.org/wikipedia/en/d/dc/A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg', id: 4, price: 40, title: 'A Song of Ice and Fire' },
    { author: 'Andrzej Sapkowski', cover: 'https://upload.wikimedia.org/wikipedia/en/1/14/Andrzej_Sapkowski_-_The_Last_Wish.jpg', id: 5, price: 80, title: 'The Witcher' },
    { author: 'F.Scott Fitzgerald', cover: 'https://upload.wikimedia.org/wikipedia/en/f/f7/TheGreatGatsby_1925jacket.jpeg', id: 6, price: 50, title: 'The Great Gatsby' },
    { author: 'Stephen King', cover: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Shiningnovel.jpg', id: 7, price: 35, title: 'The Shining' },
    { author: 'Suzanne Collins', cover: 'https://upload.wikimedia.org/wikipedia/en/d/dc/The_Hunger_Games.jpg', id: 8, price: 25, title: 'The Hunger Games' },
    { author: 'Philip K.Dick', cover: 'https://upload.wikimedia.org/wikipedia/en/e/ee/DoAndroidsDream.png', id: 9, price: 90, title: 'Do Androids Dream of Electric Sheep?' }
  ];

  getBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data);
      }, 1000);
    });
  };

};