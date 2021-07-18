import { user } from '../../utils/gun.js';


var loginOrMyprofile = user.is ? `<a class="nav-link" href="myprofile.html">My profile</a>` : `<a class="nav-link" href="login.html">Login</a>`;

const navbar = `

<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#page-top">Library of Alexandria</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="books.html">Books</a></li>
                        <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
                        <li class="nav-item"><a class="nav-link" href="#signup">Contact</a></li>
                    </ul>
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"> ` + 
                            loginOrMyprofile
                        + `</li>
                    </ul>
                </div>
            </div>
        </nav>

`

export { navbar }