myApp.controller('loginModalCtrl', function ($uibModal, $scope, authService, $window) {

    const save = () => {
        $uibModal.close({
            name: $scope.login.name,
            email: $scope.login.email,
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
            })
            .catch(error => {
                console.log(error);
            });
    };

    $scope.login = login;
    $scope.save = save;
    $scope.cancel = cancel;

});