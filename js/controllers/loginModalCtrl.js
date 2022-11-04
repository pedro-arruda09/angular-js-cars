myApp.controller('loginModalCtrl', [
    '$uibModal', 
    '$scope', 
    'authService', 
    '$uibModalInstance', 
    function ($uibModal, $scope, authService, $uibModalInstance) {

        const save = () => {
            $uibModal.close({
                email: $scope.user.email,
                password: $scope.user.password,
            });
        }

        const cancel = (cancel) => {
            $uibModal.dismiss(cancel);
        }

        const login = () => {
            authService.login($scope.user.email, $scope.user.password)
                .then((resp) => {
                    localStorage.setItem('email', $scope.user.email);
                    localStorage.setItem('token', resp.data.token);
                }).then(() => {
                    $uibModalInstance.dismiss('cancel')
                })
                .catch(error => {
                    console.log(error);
                });
        };

        $scope.login = login;
        $scope.save = save;
        $scope.cancel = cancel;

}]);