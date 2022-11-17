myApp.controller('loginModalCtrl', [
    '$uibModal',
    '$scope',
    'authService',
    '$uibModalInstance',
    'AlertMessage',
    '$state',
    'rentService',
    '$location',
    function ($uibModal, $scope, authService, $uibModalInstance, AlertMessage, $state, rentService, $location) {

        const carIdParsed = parseInt($location.search().carro_id);

        const rentCompleted = {
            'car_id': [carIdParsed],
            'rent_started_at': $location.search().inicio,
            'rent_end_at': $location.search().fim,
            'capital_id': $location.search().cidade_id,
        };

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
                    localStorage.setItem('token', resp.data);
                }).then(() => {
                    finishRent();
                    $uibModalInstance.dismiss('cancel')
                })
                .catch(error => {
                    AlertMessage.error("Credenciais Inválidas!")
                    console.log(error);
                });
        };

        const finishRent = () => {
            rentService.create(rentCompleted).then(() => {
                $state.go('userpage')
            }).catch((e) => {
                console.log(e);
            })
        }

        $scope.login = login;
        $scope.save = save;
        $scope.cancel = cancel;

    }]);