import { gun } from '../utils/gun.js';

function ListBooks(callback) {
    gun.get('books').get('silmarilion').put({
        name: "silmarilion",
        description: "livro pýka"
    });
    
    gun.get('books').map().once(callback);
}

export { ListBooks }