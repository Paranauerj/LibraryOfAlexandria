import { Register } from '../services/auth/register.js';
import { UpdateInfo } from '../services/userServices.js';

var errLabel = document.getElementById('errorText');

document.getElementById("registerForm").addEventListener('submit', function(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var name = document.getElementById('name').value;

    if(username && password){
        Register({
            username: username,
            password: password
        }, function(ack){
            if(ack.ok == 0){
                errLabel.innerText = "";
                UpdateInfo({
                    name: name
                });
                alert('Created successfully');
            }
            else{
                errLabel.innerText = ack.err;
            }
        });
    }

});