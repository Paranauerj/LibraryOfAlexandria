    function ValidateForm(formValues){
    for (var key in formValues) {
        if (formValues.hasOwnProperty(key)) {
            if(!document.getElementById(key).checkValidity()){
                return false;
            }
        }
    }
    return true;
}

export { ValidateForm }
