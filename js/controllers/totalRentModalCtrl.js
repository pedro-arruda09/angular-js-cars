myApp.controller('totalRentModalCtrl', [
    '$scope',
    'rentService',
    '$uibModalInstance',
    '$state',
    function ($scope, rentService, $uibModalInstance, $state) {

        const cancel = (cancel) => {
            $uibModalInstance.dismiss(cancel);
            $state.reload();
        }

        const total = (id) => {
            id = localStorage.getItem("rent_id");
            rentService.totalPrice(id)
                .then((resp) => {
                    $scope.price = resp.data;
                    console.log($scope.price);
                }).then(() => {
                    localStorage.removeItem("rent_id");
                })
                .catch(error => {
                    console.log(error);
                });
        };

        $scope.cancel = cancel;
        total();

    }]);