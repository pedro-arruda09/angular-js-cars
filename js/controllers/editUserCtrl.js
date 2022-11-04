myApp.controller("editUserCtrl", [
    '$scope', 
    'userService', 
    '$state',
    'authService',
    function ($scope, userService, $state, authService) {
        const init = () => {
            userService.show().then(response => {
                $scope.user = response.data;
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
    
        const editUser = () => {
            return userService.edit($scope.user).then(resp => {
                    console.log(resp.data);
                    $scope.editUserForm.$setPristine();
                }).then(() => {
                    Swal.fire({
                        title: 'Tem certeza?',
                        text: "Seu perfil será atualizado",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Sim, atualizar'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            $state.go('profilepage');
                        }
                    })
                }).catch(() => {
                    $scope.error = "Unable to load data.";
                }); 
        };

        $scope.logout = logout;
        $scope.editUser = editUser;
        init();
}]);