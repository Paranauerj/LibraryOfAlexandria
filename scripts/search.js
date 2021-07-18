import { user } from '../utils/gun.js';
import { SearchBooks } from '../services/bookServices.js';
import { verifyAuthentication } from '../middlewares/auth.js';

verifyAuthentication();

document.getElementById('isLogged').innerHTML = user.is ? `<a class="nav-link" href="myprofile.html">My profile</a>` : `<a class="nav-link" href="login.html">Login</a>`;
document.getElementById('canLogout').innerHTML = user.is ? `<a class="nav-link" href="login.html">Logout</a>` : ``;

localStorage.clear();

var url = new URL(window.location.href);
var query = url.searchParams.get("q");

SearchBooks(query, function(book, key){

    document.getElementById('booksList').innerHTML += `
    
        <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div class="col-xl-4 col-lg-7">
                <center>
                <img class="img-fluid mb-3 mb-lg-0" src="https://gateway.pinata.cloud/ipfs/` + book.image + `" style="width: 50%" alt="..."/>
                </center>
            </div>

            <div class="col-xl-8 col-lg-5">
                <div class="featured-text text-center text-lg-left">
                    <h4><a target="_blank" href="https://gateway.pinata.cloud/ipfs/` + book.hash + `">` + book.name + `</a></h4>
                    <p class="text-black-50 mb-0">` + book.description + `</p>
                </div>
            </div>

        </div>
    
    `;
});