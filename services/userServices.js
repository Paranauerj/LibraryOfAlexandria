import { gun, user } from '../utils/gun.js';

function UpdateInfo(newInfo, callback){
    if(newInfo.admin){
        newInfo.admin = null;
    }
    gun.get('pub/' + user.is.pub).get('info').put(newInfo, callback);
}

function GetInfo(pubKey, callback){
    gun.get('pub/' + pubKey).get('info').once(callback);
}
export { UpdateInfo, GetInfo }