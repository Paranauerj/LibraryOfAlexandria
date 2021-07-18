import { user } from '../../utils/gun.js'

function Register(userInfo, callback){
    user.create(userInfo.username, userInfo.password, callback);
        
        /*ack => {
        if(ack.ok == 0){
            alert('criado: ' + ack.pub);
            console.log(ack.pub);
        }
        else{
            alert('erro: ' +  ack.err);
            console.log(ack.err);
        }
    });*/
}


export { Register }