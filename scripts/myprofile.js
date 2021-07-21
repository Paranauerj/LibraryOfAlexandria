import { user } from '../utils/gun.js';
import { CreateBook, DeleteBook, MyUploadedBooks } from '../services/bookServices.js';
import { verifyAuthentication } from '../middlewares/auth.js';

verifyAuthentication();

document.getElementById('isLogged').innerHTML = user.is ? `<a class="nav-link" href="myprofile.html">My profile</a>` : `<a class="nav-link" href="login.html">Login</a>`;
document.getElementById('canLogout').innerHTML = user.is ? `<a class="nav-link" href="login.html">Logout</a>` : ``;

// localStorage.clear();

$("#upload_file").submit(function(event) {
    var book = {
        creator: user.is.pub,
        name: document.getElementById("title").value,
        description: document.getElementById("description").value,
        author: document.getElementById("author").value,
        pubDate: document.getElementById("date").value,
        image: document.getElementById("image_hash").value,
        hash: document.getElementById("file_hash").value
    };

    CreateBook(book);

    event.preventDefault();
});

$('body').on('submit', '.deleter', function (event) {
    var id  = event.currentTarget[0].value;
    DeleteBook(id, function(ac){
        ac ? location.reload() : alert('erro!');
    });
});

MyUploadedBooks(function(book, id){
    document.getElementById('booksList').innerHTML += `
    
        <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div class="col-xl-4 col-lg-7">
                <center>
                    <img class="img-fluid mb-3 mb-lg-0" src="https://gateway.pinata.cloud/ipfs/` + book.image + `" style="width: 50%" alt="..."/>
                </center>
            </div>

            <div class="col-xl-8 col-lg-5">
                <div class="text-lg-right">
                    <form class="deleter" onsubmit="return false;">
                        <input type="hidden" name="id" value="` + id + `"/>
                        <button class="btn btn-outline-danger">Delete</button>
                    </form>
                </div>
            
                <div class="featured-text text-center text-lg-left">
                    <h4><a target="_blank" href="https://gateway.pinata.cloud/ipfs/` + book.hash + `">` + book.name + `</a></h4>
                    <p class="text-black-50 mb-0">` + book.description + `</p>
                </div>
            </div>

        </div>
    
    `;
});
