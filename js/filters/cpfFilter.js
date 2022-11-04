// var ao_cpf=document.forms.form1.ao_cpf.value; 
// var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/;

myApp.filter('cpf', function () {

    return function (cpf) {
        if (!cpf) { return ''; }

        let str = cpf + '';
        
        if(str.length <= 11){
            str = str.replace(/\D/g, '');
            str = str.replace(/(\d{3})(\d)/, "$1.$2");
            str = str.replace(/(\d{3})(\d)/, "$1.$2");
            str = str.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        }

        return str;
    }
})

