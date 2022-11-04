myApp.controller("changePasswordCtrl",[
    '$scope', 
    'recoverPasswordService',
    '$state', 
    '$rootScope', 
    'AlertMessage', 
    '$location', 
    function ($scope, recoverPasswordService, $state, $rootScope, AlertMessage, $location) {
        $scope.form = {
            password: '',
            confirm_password: '',
            token: $location.search().token
        };
        $scope.isTokenValid = false;

        const init = () => {
            if ($rootScope.isLogged || !$scope.form.token) {
                $state.go('home');
                return;
            }

            recoverPasswordService.validateToken($scope.form.token).then(() => {
                $scope.isTokenValid = true;
            }).catch(() => {
                AlertMessage.error("TOKEN EXPIRADO!")
                $state.go('login')
            });
            // CHAMAR SERVICE MANDANDO O TOKEN
        };


        const isValid = () => {
            if (!$scope.form.password) {
                AlertMessage.error("Insira a senha!")
                return false;
            }

            if (!$scope.form.confirm_password) {
                AlertMessage.error("Insira a confirmação da senha!")
                return false;
            }

            if ($scope.form.password !== $scope.form.confirm_password) {
                AlertMessage.error("As senhas não conferem!")
                return false;
            }

            return true;
        };

        const submit = () => {
            if (!isValid()) {
                return;
            }

            recoverPasswordService.changePassword($scope.form).then(() => {
                AlertMessage.success("Acesso redefinido com sucesso!")
                $state.reload();
                $state.go("login");
            }).catch((e) => {
                console.log($scope.form, 'oi');
                AlertMessage.error("Erro ao redefinir acesso!")
            });

        };

        init();
        $scope.submit = submit;
}]);