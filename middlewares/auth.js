import { user } from "../utils/gun";

function verifyAuthentication(){
    if(!user.is){
        document.location.href = 'login.html';
    }
}

export { verifyAuthentication }