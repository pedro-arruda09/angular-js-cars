myApp.controller('authCtrl', function($scope, authService, $location){
    $scope.model = "auth"
    const login = () => {
        console.log('oi');
        authService.login($scope.user.email, $scope.user.password)
            .then((resp) => {
                localStorage.setItem('email', $scope.user.email)
                localStorage.setItem('token', resp.data.token)
                $location.path('/inicio/perfil')
            })
            .catch(error => {
                console.log(error);
                $location.path('/login')
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
                $location.path('/')
                authService.logout()
            }
          })
    }

    $scope.login = login;
    $scope.logout = logout;
});