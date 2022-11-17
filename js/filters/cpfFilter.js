myApp.filter('cpf', function () {

    return function (cpf) {
        if (!cpf) { return ''; }

        let str = cpf + '';

        if (str.length <= 11) {
            str = str.replace(/\D/g, '');
            str = str.replace(/(\d{3})(\d)/, "$1.$2");
            str = str.replace(/(\d{3})(\d)/, "$1.$2");
            str = str.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        }

        return str;
    }
})

