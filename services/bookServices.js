import { gun, user } from '../utils/gun.js';
import { uniqid } from '../utils/utils.js';

const pageSize = 8;

function ListBooks(page, callback) {
    if(!page || page < 1){
        page = 1;
    }

    var count = -1;

    // gun.get('books').map(book => book != undefined ? book : undefined).once(callback);
    gun.get('books').map(function(book){
        if(!book){
            return undefined;
        }

        count++;
        if(count >= (page * pageSize) - pageSize && count < page * pageSize){
            return book;
        }
        else {
            return undefined;
        }

    }).once(callback);
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

function SearchBooks(query, page, callback){
    if(!page || page < 1){
        page = 1;
    }

    var count = -1;

    gun.get('books').map(function(book){
        if(!book || !query){
            return undefined;
        }
        if(book.name.toLowerCase().indexOf(query.toLowerCase()) >= 0){
            count++;
            if(count >= (page * pageSize) - pageSize && count < page * pageSize){
                return book;
            }
            else {
                return undefined;
            }
        }
        else {
            return undefined;
        }
    }).once(callback);
}

export { ListBooks, CreateBook, MyUploadedBooks, DeleteBook, SearchBooks }