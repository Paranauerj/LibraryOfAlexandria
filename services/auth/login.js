import { user } from '../../utils/gun.js'

function Auth(userInfo, callback){
    user.auth(userInfo.username, userInfo.password, callback);
}

function Logout(){
    user.leave();
}

export { Auth, Logout }