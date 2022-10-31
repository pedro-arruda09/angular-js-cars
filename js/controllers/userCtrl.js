myApp.controller("userCtrl", function ($scope, userService, authService, $location, $stateParams, $window, $uibModal) {
    const init = () => {
        userService.show($stateParams.id).then(response => {
            $scope.user = response.data;
        }).catch((e) => console.log(e))
    }

    const listUsers = () => {
        return userService.get().then(resp => {
                $scope.users = resp.data;
            }).catch(() => {
                $scope.error = "Unable to load data.";
            }); 
    };

    const addUsers = () => {
        return userService.create($scope.user).then(() => {
            // delete $scope.user;
            $location.path('/login')
        }).catch(error => {
            console.log(error);
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
                $window.location.href = '/';
                authService.logout();
            }
          })
    };

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
                $location.path('/')
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
    $scope.addUsers = addUsers;
    $scope.logout = logout;
    $scope.login = login;
    init();
});