import { homePage } from './pages/home.js';
import { loginPage } from './pages/login.js';
import { registerPage } from './pages/register';

const thisPath = window.location.pathname.replace("/#", "");

const routes = {
    '': homePage,
    'login': loginPage,
    'register': registerPage
}

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

function onNavigate(pathname) {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    );
    
    var pageName = pathname.split('/').pop();
    rootDiv.innerHTML = routes[pageName];
}

document.querySelector('#login').addEventListener('click', function(){
    onNavigate(thisPath + 'login');
})

document.querySelector('#home').addEventListener('click', function(){
    onNavigate(thisPath + '');
})