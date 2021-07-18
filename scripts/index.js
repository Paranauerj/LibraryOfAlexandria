import { Book } from '../classes/book.js';
import { gun, user } from '../utils/gun.js';

document.getElementById('isLogged').innerHTML = user.is ? `<a class="nav-link" href="myprofile.html">My profile</a>` : `<a class="nav-link" href="login.html">Login</a>`;
document.getElementById('canLogout').innerHTML = user.is ? `<a class="nav-link" href="login.html">Logout</a>` : ``;

localStorage.clear();

// verifyAuthentication();

const book = new Book('Silmarilion', 332432, 'J.R.R. Tolkien', 'Awesome Book', null, 'https://lojasaraiva.vteximg.com.br/arquivos/ids/12114592/1008609237.jpg?v=637142268557100000', 'http://www.portugues.seed.pr.gov.br/arquivos/File/A_Historia_das_Silmarils.pdf');
/*var gun = Gun(config.peer);
var user = gun.user().recall({ sessionStorage: true }); */
var books = gun.get('books');

console.log(user);

/*var userInfo = {
    username: "Paranaue",
    password: "para",
    name: "João C.",
    birthDate: "2001-04-03",
    gender: "M",
    email: "pimba@gmail.com",
    bio: "Curto livros? mais ou menos rs"
}*/

/*user.create(userInfo.username, userInfo.password, ack => {
    if(ack.ok == 0){
        alert('criado: ' + ack.pub);
        console.log(ack.pub);
    }
    else{
        alert('erro: ' +  ack.err);
        console.log(ack.err);
    }
});*/

// user.auth(userInfo.username, userInfo.password, function(at){
    /*gun.get('pub/' + at.sea.pub).get('info').put({
        username: userInfo.username,
        name: userInfo.name,
        birthDate: userInfo.birthDate,
        gender: userInfo.gender,
        email: userInfo.email,
        bio: userInfo.bio
    });*/

    /*UpdateInfo({ bio: "Curto só os que gosto!" });
    
    // console.log(at.sea.pub);
    // console.log(user);

    gun.get('pub/' + at.sea.pub).get('info').once( function(val, key){
        console.log(val);
    });

});*/

// var silmarilion = books.get(uniqid()).put(book);

/*gun.get('books').map().once(function(val,key){
    books.get(key).put(null);
})*/

/*gun.get('books').map(val => null ? true : false).once(function(val,key){
    if(val){
        console.log(key, val);
    }
});*/

/*gun.get('books').map().once(function(val,key){
    books.get(key).set(null);
})*/