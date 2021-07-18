import { gun, user } from '../utils/gun.js';
import { uniqid } from '../utils/utils.js';

function ListBooks(callback) {
    gun.get('books').map(book => book != undefined ? book : undefined).once(callback);
}

function CreateBook(book, callback){
    gun.get('books').get(uniqid()).put(book, callback);
}

function MyUploadedBooks(callback){
    gun.get('books').map(function(book) {
            if(!book){
                return undefined;
            }
            
            return book.creator === user.is.pub ? book : undefined;

        }).once(callback);
}

function DeleteBook(key, callback){
    gun.get('books').get(key).once(function(book, id){
        if(!book){
            callback(false);
        }
        if(book.creator === user.is.pub){
            gun.get('books').get(id).put(null);
            callback(true);
        }
        else {
            callback(false);
        }

    });

}

function SearchBooks(query, callback){
    gun.get('books').map(function(book){
        if(!book || !query){
            return undefined;
        }
        if(book.name.toLowerCase().indexOf(query.toLowerCase()) >= 0){
            return book;
        }
        else {
            return undefined;
        }
    }).once(callback);
}

export { ListBooks, CreateBook, MyUploadedBooks, DeleteBook, SearchBooks }