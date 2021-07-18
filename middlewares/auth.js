import { user } from "../utils/gun.js";

function verifyAuthentication(){
    if(!user.is){
        document.location.href = 'login.html';
    }
}

export { verifyAuthentication }