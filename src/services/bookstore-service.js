import axios from 'axios';

export default class BookstoreService {
    _fireBaseUrl = 'https://redux-store.firebaseio.com'

    async getBooks() {
        const res = await axios.get(`${this._fireBaseUrl}/books/-Ltf9K0QNcQUinW0oAsh.json`);

        return res.data
    };
};