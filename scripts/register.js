import { Register } from '../services/auth/register.js';
import { UpdateInfo } from '../services/userServices.js';
import { ValidateForm } from '../utils/validator.js';

var errLabel = document.getElementById('errorText');

document.getElementById("registerForm").addEventListener('submit', function(){
    var formData = {
        username : document.getElementById('username').value,
        password : document.getElementById('password').value,
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        gender : document.getElementById('gender').value,
        birthdate : document.getElementById('birthdate').value,
    };

    if(ValidateForm(formData)){
        Register({
            username: formData.username,
            password: formData.password
        }, function(ack){
            if(ack.ok == 0){
                errLabel.innerText = "";

                UpdateInfo({
                    name: formData.name,
                    email : formData.email,
                    gender : formData.gender,
                    birthDate : formData.birthdate
                });
                
                alert('Created successfully');
                document.location.href = document.location.href;
            }
            else{
                errLabel.innerText = ack.err;
            }
        });
    }

});
