myApp.directive('directiveMenu', function () {
    return {
        restrict: 'E',
        templateUrl: '../view/menu.html',
        controller: function ($scope, $rootScope, $state, authService, AlertMessage) {
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
                        authService.logout();
                        $rootScope.isLogged = false;
                    }
                })
            }

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

            $scope.logout = logout;
            $scope.login = login;
        }
    };
});