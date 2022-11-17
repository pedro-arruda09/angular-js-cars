myApp.controller("userCtrl", [
    '$scope',
    'userService',
    'authService',
    '$state',
    '$window',
    '$uibModal',
    '$rootScope',
    function ($scope, userService, authService, $state, $uibModal, $rootScope) {

        const init = () => {
            userService.show().then(response => {
                $scope.user = response.data;
                localStorage.setItem("name", $scope.user.name);
            }).catch((e) => console.log(e))
        }

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
                    $state.go('homepage');
                    authService.logout();
                }
            })
        };

        const login = () => {
            console.log('oi');
            authService.login($scope.user.email, $scope.user.password)
                .then((resp) => {
                    localStorage.setItem('email', $scope.user.email)
                    localStorage.setItem('token', resp.data)
                    $rootScope.isLogged = true;
                    $state.path('/inicio/perfil')
                })
                .catch(error => {
                    console.log(error);
                    $state.path('/')
                });
        };

        const openLoginModal = () => {
            const modalInstance = $uibModal.open({
                templateUrl: 'view/login.html',
                controller: 'loginModalCtrl',
                size: 'full',
                backdropClass: 'modal-css'
            })

            modalInstance.result.then(() => {
                login();
                $uibModal.dismis();
            })
        }

        $scope.openLoginModal = openLoginModal;
        $scope.logout = logout;
        $scope.login = login;
        init();
    }]);