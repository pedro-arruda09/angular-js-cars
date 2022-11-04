myApp.controller('authCtrl', [
    '$scope', 
    'authService', 
    '$state', 
    '$rootScope', 
    'AlertMessage', 
    function($scope, authService, $state, $rootScope, AlertMessage){

        $scope.model = "auth"
        const login = () => {
            console.log('oi');
            authService.login($scope.user.email, $scope.user.password)
                .then((resp) => {
                    localStorage.setItem('email', $scope.user.email)
                    localStorage.setItem('token', resp.data)
                    $rootScope.isLogged = true;
                    $state.go('userpage')
                })
                .catch(error => {
                    AlertMessage.error("Credenciais Inválidas!")
                    console.log(error);
                    $state.go('login')
                });
        };

        const logout = () => {
            Swal.fire({
                title: 'Tem certeza?',
                text: "Você será deslogado",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim, deslogar'
            }).then((result) => {
                if (result.isConfirmed) {
                    $state.go('homepage')
                    authService.logout()
                }
            })
        }

        $scope.login = login;
        $scope.logout = logout;
}]);